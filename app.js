const express = require('express');
const app     = express();
const PORT    = 8080;

app.get('/', (req, res) => {
  return res.send("Hello, Kubernetes!");
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
})