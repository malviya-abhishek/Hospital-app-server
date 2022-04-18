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
    const log_create_tables_status : boolean[] = [];
    log_create_tables.forEach( (e: { command: string; }) => {
          log_create_tables_status.push(e.command === 'CREATE');
    });
    console.log("log_create_tables", log_create_tables_status );


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