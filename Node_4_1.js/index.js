const express = require('express');
const { checkBody, checkParams } = require('./validation/validator');
const { idScheme, articleScheme } = require('./validation/scheme');

const app = express();

const articles = [];
let uniqueId = 0;

app.use(express.json());

app.get('/articles', (req, res) => {
  res.send({ articles });
});

app.post('/articles', checkBody(articleScheme), (req, res) => {
  uniqueId += 1;

  articles.push({
    id: uniqueId,
    ...req.body
  });
  res.send({
    id: uniqueId
  })
});

app.get('/articles/:id', checkParams(idScheme), (req, res) => {  //checkParams(idScheme) промежуточный обработчик
  const article = articles.find((article) => article.id === Number(req.params.id));
  if (article) {
    res.send({ article });
  } else {
    res.status(404);
    res.send({ article: null });
  }
});

// очередность checkParams затем checkBody
app.put('/articles/:id', checkParams(idScheme), checkBody(articleScheme), (req, res) => {
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

app.delete('/articles/:id', checkParams(idScheme), (req, res) => {
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

app.use((req, res) => {
  res.status(404).send({
    message: 'URL not found!'
  })
});


app.listen(3000);