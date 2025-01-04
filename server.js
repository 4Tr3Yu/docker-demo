const express = require('express');
const pool = require('./db');
const port = 3000;

const app = express();
app.use(express.json());

app.get('/', async (req, res) => {
	try {
		const users = await pool.query('SELECT * FROM users');
		res.status(200).json(users.rows);
	} catch (error) {
		console.error(error.message);
		res.sendStatus(500);
	}
});

app.post('/user', async (req, res) => {
	const { name, age } = req.body;
	try {
		await pool.query('INSERT INTO users (name, age) VALUES ($1, $2) RETURNING *', [name, age]);
		res.status(201).send(`User created with Name: ${name} and Age: ${age}`);
	}
	catch (error) {
		console.error(error.message);
		res.sendStatus(500);
	}

});

app.get('/setup', async (req, res) => {
	try {
		const createQuery = await pool.query('CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, name VARCHAR(50), age INT)');
		res.status(200).send('Table created successfully');
	} catch (error) {
		console.error(error.message);
		res.sendStatus(500);
	}
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});