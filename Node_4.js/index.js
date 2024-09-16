const express = require('express');
const joi = require('joi')
const app = express();

const users = [];

let uniqueID = 0;

app.use(express.json()) //Преобразует JSON-данные из запроса в JavaScript-объект, который затем становится доступным в req.body.

const userSchema = joi.object({
  firstName: joi.string().min(1).required(),
  secondName: joi.string().min(1).required(),
  age: joi.number().min(0).max(105).required(),
  city: joi.string().min(1).required()
})



app.get('/users', (req, res) => {
  res.send({ users })
})

app.get('/users/:id', (req, res) => {
  const userId = +req.params.id; // number
  const user = users.find((user) => user.id === userId);
  if (user) {
    res.send({ user })
  } else {
    res.status(404);
    res.send({ user: null })
  }
});

app.post('/users', (req, res) => {
  const result = userSchema.validate(req.body);
  if (result.error) {
    return res.status(400).send({ error: result.error.details });
  }
  uniqueID += 1;
  users.push({
    id: uniqueID,
    ...req.body
  })
  res.send({ id: uniqueID })
})

app.put('/users/:id', (req, res) => {
  const result = userSchema.validate(req.body);
  if (result.error) {
    return res.status(404).send({ error: result.error.details });
  }
  const userId = +req.params.id; // number
  const user = users.find((user) => user.id === userId);
  if (user) {
    const { firstName, secondName, age, city } = req.body
    user.firstName = firstName,
      user.secondName = secondName,
      user.age = age,
      user.city = city
    res.send({ user })
  } else {
    res.status(404);
    res.send({ user: null })
  }
})


app.delete('/users/:id', (req, res) => {
  const userId = +req.params.id; // number
  const user = users.find((user) => user.id === userId);
  if (user) {
    const userIndex = users.indexOf(user);
    users.splice(userIndex, 1);
    res.send({ user });
  } else {
    res.status(404);
    res.send({ user: null })
  }
})


app.listen(3000);