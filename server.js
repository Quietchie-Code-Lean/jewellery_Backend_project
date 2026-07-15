import express from 'express';
import cors from 'cors';
import routes from './src/routes/jewell.routes.js'
import reportMiddleware from './src/middleware/report.js'
import { connectionDB } from './src/database/jewelly_store_db.js';


const server = express();
const PORT = 3000;


server.get("/", (req, res) => { 
    res.send("Server running correctly!")
})

//Middlewares

server.use(express.json());
server.use(cors());
server.use(reportMiddleware)
server.use("/", routes)


//Exported function to show server connection.
connectionDB()

server.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT} within the port: `, PORT)

})