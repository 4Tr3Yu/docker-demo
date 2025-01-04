const { Pool } = require('pg')
const pool = new Pool({
	host:'db',
	port: 5432,
	user: '4tr3yu',
	password: '4tr3yu',
	database: '4tr3yu'
})
module.exports = pool