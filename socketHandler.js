import { publishControl } from './mqttHandler.js'

export default function socketHandler(io) {
	io.on('connection', (socket) => {
		console.log('📱 App connected:', socket.id)

		socket.on('controlDevice', (command) => {
			console.log('📤 Control from app:', command)
			publishControl(command)
		})

		socket.on('disconnect', () => {
			console.log('❌ App disconnected:', socket.id)
		})
	})
}
