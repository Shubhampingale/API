// /api/replies.js

export default (req, res) => {
    // Handle GET or POST request
    if (req.method === 'GET') {
      // Handle GET request
      res.status(200).json({ message: 'GET request to /replies' });
    } else if (req.method === 'POST') {
      // Handle POST request
      const { body } = req;
      res.status(200).json({ message: 'POST request to /replies', body });
    } else {
      res.status(405).end(); // Method Not Allowed
    }
  };
  