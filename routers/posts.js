const express = require('express');
const router = express.Router();

const posts = [
  { id: 1, title: "Post 1", content: "Content of Post 1" },
  { id: 2, title: "Post 2", content: "Content of Post 2" },
  { id: 3, title: "Post 3", content: "Content of Post 3" },
];

// Index route
router.get('/', (req, res) => {
  res.json(posts);
});

// Show route
router.get('/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (post) {
    res.json(post);
  } else {
    res.status(404).send(`Post with id ${req.params.id} not found`);
  }
});

// Create route
router.post('/', (req, res) => {
  res.send('Creazione di un nuovo post');
});

// Update route
router.put('/:id', (req, res) => {
  res.send(`Aggiornamento del post ${req.params.id}`);
});

// Delete route
router.delete('/:id', (req, res) => {
  res.send(`Cancellazione del post ${req.params.id}`);
});

module.exports = router;
