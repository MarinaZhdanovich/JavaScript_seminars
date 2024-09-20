const express = require('express');

const app = express();

const articles = [];
let uniqueId = 0;

app.use(express.json());

app.get('/articles', (req, res) => {
  res.send({ articles });
});

app.post('/articles', (req, res) => {
  uniqueId += 1;

  articles.push({
    id: uniqueId,
    ...req.body
  });
  res.send({
    id: uniqueId
  })
});

app.get('/articles/:id', (req, res) => {
  const article = articles.find((article) => article.id === Number(req.params.id));
  if (article) {
    res.send({ article });
  } else {
    res.status(404);
    res.send({ article: null });
  }
});


app.put('/articles/:id', (req, res) => {
  const article = articles.find((article) => article.id === Number(req.params.id));

  if (article) {
    article.title = req.body.title;
    article.content = req.body.content;
    res.send({ article });
  } else {
    res.status(404);
    res.send({ article: null })
  }
});

app.delete('/articles/:id', (req, res) => {
  const article = articles.find((article) => article.id === Number(req.params.id));
  if (article) {
    const articleIndex = articles.indexOf(article);
    articles.splice(articleIndex, 1)

    res.send({ article });
  } else {
    res.status(404);
    res.send({ article: null })
  }
});


app.listen(3000);