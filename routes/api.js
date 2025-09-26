import express from 'express'
import { getSensorHistory } from '../models/SensorLog.js'
import { publishControl } from '../mqttHandler.js'

const router = express.Router()

// Lấy dữ liệu sensor history
router.get('/data', async (req, res) => {
	const logs = await getSensorHistory(100)
	res.json(logs)
})

// Gửi lệnh điều khiển (REST)
router.post('/control', (req, res) => {
	const { device, action } = req.body
	publishControl({ device, action })
	res.json({ status: 'ok', device, action })
})

export default router
