export default {
	jwt: process.env.JWT_SECTRET || "secretjsonwebtoken",
	DB: {
		URI: process.env.MONGODB_URI || "mongodb://localhost/seminary", 
		USER:process.env.MONGODB_USER,
		PASSWORD:process.env.MONGODB_PASSWORD,
	}
}