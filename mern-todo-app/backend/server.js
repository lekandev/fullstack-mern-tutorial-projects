const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const Todo = require('models/Todo');

mongoose.connect('', { useNewUrlParser: true })

mongoose.connection.once('open', () => {
    console.log('Mongodb is up and running')
})

const PORT = 4050;

const app = express();

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    Todo.find((err, todos) => {
        if (err) {
            console.log(err)
        } else {
            res.json(todos)
        }
    })
})

app.post('/create', (req, res) => {
    const todo = new Todo(req.body);
    todo.save().then((todo) => {
        res.json(todo)
    }).catch((err) => {
        res.status(500).send(err.message)
    })
})

app.get('/:id', (req, res) => {
    const id = req.params.id;
    Todo.findById(id, (err, todo) => {
        res.json(todo)
    })
})

app.listen(PORT, () => {
    console.log(`Server is up on port: ${PORT}`);
})