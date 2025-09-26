import pool from '../db.js'

export async function insertSensorData(temperature, humidity, soil) {
	const [rows] = await pool.query(
		'INSERT INTO sensor_logs (temperature, humidity, soil_moisture, created_at) VALUES (?, ?, ?, NOW())',
		[temperature, humidity, soil]
	)
	return rows.insertId
}

export async function getLastSensorLog() {
	const [rows] = await pool.query(
		'SELECT * FROM sensor_logs ORDER BY created_at DESC LIMIT 1'
	)
	return rows[0]
}

export async function getSensorHistory(limit = 50) {
	const [rows] = await pool.query(
		'SELECT * FROM sensor_logs ORDER BY created_at DESC LIMIT ?',
		[limit]
	)
	return rows
}
