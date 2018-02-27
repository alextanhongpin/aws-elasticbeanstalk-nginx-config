const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
	console.log('hit get endpoint')
	res.status(200).json({
		message: 'hello',
		environment: process.env.NODE_ENV || 'no node env'
	})
})

app.post('/', (req, res) => {
	console.log('hit post endpoint')
	res.status(200).json({
		ok: true
	})
})

app.listen(port, () => {
	console.log(`listening to port *:${port}. press ctrl + c to cancel.`)
})