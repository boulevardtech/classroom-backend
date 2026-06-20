import express from 'express';

const app = express();
const PORT = 8000;

// JSON middleware
app.use(express.json());

// Route that returns a message
app.get('/', (req, res) => {
  res.json({ message: 'Hello, welcome to the Classroom API!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
