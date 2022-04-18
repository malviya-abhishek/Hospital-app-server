require("dotenv").config();
import { Client } from "pg";
import { CREATE_TABLES, GENERATE_DATA } from "./queries";

export const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: parseInt(process.env.DB_PORT as string),
});


 export const create_tables = (): any =>{
   return client.query(CREATE_TABLES);
 }

 export const generate_data = (): any => {
   return client.query(GENERATE_DATA);
 }