import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import apiRoutes from './routes/api.js'
import socketHandler from './socketHandler.js'
import { setIO } from './mqttHandler.js'
import { checkDatabaseConnection } from './utils.js'

const app = express()
const server = http.createServer(app)
const io = new Server(server, { cors: { origin: '*' } })

app.use(express.json())
app.use('/api', apiRoutes)

// Socket.IO
socketHandler(io)
setIO(io)

checkDatabaseConnection()

const PORT = 3000
server.listen(PORT, () => {
	console.log(`🚀 Server running on port ${PORT}`)
})
