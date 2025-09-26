import pool from './db.js'
import { getLastSensorLog } from './models/SensorLog.js'

export const insertRecordIfNeeded = async () => {
	const lastRecord = await getLastSensorLog()
	if (lastRecord) {
		const lastRecordTime = new Date(lastRecord.created_at)
		const currentTime = new Date()
		const timeDifference = (currentTime - lastRecordTime) / (1000 * 60) // Difference in minutes

		if (timeDifference < 30) {
			return false
		}
	}
	return true
}

export async function checkDatabaseConnection() {
	try {
		const connection = await pool.getConnection()
		console.log('✅ Database connection successful!')
		connection.release()
	} catch (err) {
		console.error('❌ Database connection failed:', err.message)
		process.exit(1)
	}
}
