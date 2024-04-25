import express from 'express';
import axios from 'axios';
const app = express();
app.use(express.json());
const TEST_SERVER_BASE_URL = 'http://20.244.56.144/test';

const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE0MDQ2OTEyLCJpYXQiOjE3MTQwNDY2MTIsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjI5M2I2NDBkLWNjNWItNDhiYi04NzNhLTUwNzFkNzJkZGE5MyIsInN1YiI6ImFnNjE3NjY0QDFnbWFpbC5jb20ifSwiY29tcGFueU5hbWUiOiJnb01hcnQiLCJjbGllbnRJRCI6IjI5M2I2NDBkLWNjNWItNDhiYi04NzNhLTUwNzFkNzJkZGE5MyIsImNsaWVudFNlY3JldCI6IllraERxRUVJUnZvdlptQVYiLCJvd25lck5hbWUiOiJBYmhpc2hlayIsIm93bmVyRW1haWwiOiJhZzYxNzY2NEAxZ21haWwuY29tIiwicm9sbE5vIjoiRTIxQ1NFVTA4MzMifQ.TJ_rK9Au8zc9KtDQuS4FFTOce-kGX9b2dvwzB6WmMsk';
app.get('/categories/:categoryname/products', async (req, res) => {
    try {
        const {categoryname, n, minPrice, maxPrice } = req.body;

        console.log(n);
        const companies = ['AMZ', 'FLP', 'SN', 'MYN', 'AZO'];
        const productsPromises = companies.map(async (company) => {
          const url = `${TEST_SERVER_BASE_URL}/companies/${company}/categories/${categoryname}/products`;
          const response = await axios.get(url, {
            headers: {
              Authorization: `Bearer ${accessToken}`
            },
            params: {
              n, // Use the 'n' parameter
              minPrice,
              maxPrice
            }
          });
          return response.data.products;
        });

        const products = await Promise.all(productsPromises);
        const allProducts = products.flat();
        const topNProducts = allProducts.slice(0, n);
    
        res.json(topNProducts);
      } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
});
app.get('/categories/:categoryname/products/:productid', async (req, res) => {
    try {
        const { categoryname, productid } = req.params;
        res.json(productDetails);
      } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
