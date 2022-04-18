require("dotenv").config();
import { Client } from "pg";
import { CREATE_TABLES, CREATE_USER, GENERATE_DATA } from "./queries";

export const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: parseInt(process.env.DB_PORT as string),
});


 export const create_tables = (): any=>{
   return client.query(CREATE_TABLES());
 }

 export const generate_data = ()=> {
   return client.query(GENERATE_DATA());
 }

 export const create_user = (user: any)=>{
  return client.query(CREATE_USER(user));
}