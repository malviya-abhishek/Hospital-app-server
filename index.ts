require("dotenv").config();

import express  from "express";
import cors from 'cors';
import { client, create_tables, generate_data } from "./models";
import {routesInit} from './routes/index.routes'


const PORT = process.env.PORT || "4000";
const app = express();



const INIT =async () => {
  try {
    await client.connect();
    console.log("Database connected");

    // CREATE TABLES
    const log_create_tables =  await create_tables();
    let log_create_tables_status = 0;
    log_create_tables.forEach( (e: { command: string; }) => {
      if(e.command === 'CREATE')    
        log_create_tables_status += 1;
    });
    console.log("log_create_tables", log_create_tables_status , "/" , log_create_tables.length );

    // FILL INTIAL DATA
    const log_generate_data =  await generate_data();
    console.log("log_generate_data", log_generate_data.command === 'INSERT' );

    // MIDDLEWARE
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    // INIT ROUTES
    routesInit(app);
    
    // START SERVER
    app.listen(PORT, ()=>{
      console.log("Server is started at", `http://localhost:${PORT}`);
    });

  } catch (error) {console.log(error);}
}

INIT();