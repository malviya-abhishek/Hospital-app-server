require("dotenv").config();

import express  from "express";
import { client, create_tables, generate_data } from "./models";



const PORT = process.env.PORT || "4000";
const app = express();



const INIT =async () => {
  try {
    await client.connect();
    console.log("Database connected");
    const log_create_tables =  await create_tables();
    console.log("log_create_tables", log_create_tables);
    const log_generate_data =  await generate_data();
    console.log("log_generate_data", log_generate_data);
    
    app.listen(PORT, ()=>{
      console.log("Server is started at", `http://localhost:${PORT}`);
    });
  } catch (error) {console.log(error);}
}

INIT();