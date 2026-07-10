import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pg;

// pools will use environment variables
// for connection information
export const db = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    allowExitOnIdle: true,
})


//Test Function
export const connectionDB = async () => {
    try {
        // you can also use async/await
        const result = await db.query('SELECT current_database()')
        console.log(`Connected to Database: ${result.rows[0].current_database}`);
       
    } catch (error) {
        console.log("Error connecting to the database:", error.message);
    }

};