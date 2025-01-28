// Mock dei dati dei post
const posts = [
    { id: 1, title: "Post 1", content: "Content of Post 1" },
    { id: 2, title: "Post 2", content: "Content of Post 2" },
    { id: 3, title: "Post 3", content: "Content of Post 3" },
  ];
  
  // Funzione per restituire la lista dei post
  const getAllPosts = (req, res) => {
    res.json(posts);
  };
  
  // Funzione per restituire un singolo post
  const getPostById = (req, res) => {
    const post = posts.find((p) => p.id === parseInt(req.params.id));
    if (post) {
      res.json(post);
    } else {
      res.status(404).send(`Post with id ${req.params.id} not found`);
    }
  };
  
  // Funzione per creare un nuovo post
  const createPost = (req, res) => {
    res.send("Creazione di un nuovo post");
  };
  
  // Funzione per aggiornare un post
  const updatePost = (req, res) => {
    res.send(`Aggiornamento del post ${req.params.id}`);
  };
  
  // Funzione per cancellare un post
  const deletePost = (req, res) => {
    res.send(`Cancellazione del post ${req.params.id}`);
  };
  
  // Esporta tutte le funzioni
  module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
  };
  