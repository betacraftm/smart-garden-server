import mqtt from 'mqtt'
import dotenv from 'dotenv'

dotenv.config() // Load environment variables from .env file

let io // Socket.IO instance

export function setIO(socketIO) {
	io = socketIO
}

// HiveMQ Cloud connection settings
const MQTT_BROKER_URL = process.env.MQTT_BROKER_URL
const MQTT_PORT = process.env.MQTT_PORT
const MQTT_USERNAME = process.env.MQTT_USERNAME
const MQTT_PASSWORD = process.env.MQTT_PASSWORD

// Connect to HiveMQ Cloud
const mqttClient = mqtt.connect(`mqtts://${MQTT_BROKER_URL}:${MQTT_PORT}`, {
	username: MQTT_USERNAME,
	password: MQTT_PASSWORD,
})

const TOPIC_DATA = 'garden/data'
const TOPIC_CONTROL = 'garden/control'

mqttClient.on('connect', () => {
	console.log('✅ Connected to HiveMQ Cloud')
	mqttClient.subscribe(TOPIC_DATA, (err) => {
		if (err) {
			console.error('❌ Error subscribing to topic:', err.message)
		} else {
			console.log(`📡 Subscribed to topic: ${TOPIC_DATA}`)
		}
	})
})

export function publishControl(command) {
	console.log(`📤 Publishing control command: ${JSON.stringify(command)}`)
	mqttClient.publish(TOPIC_CONTROL, JSON.stringify(command))
}
