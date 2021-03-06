require("dotenv").config();
import { Client } from "pg";
import { CREATE_TABLES, CREATE_USER, GENERATE_DATA, GET_USERS, GET_USER, CREATE_NEW_APPOINTMENT, CREATE_CONFIRM_APPOINTMENT } from "./queries";

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
  console.log( "Query" ,user);
  return client.query(CREATE_USER(user));
}

export const get_users = ()=>{
  return client.query(GET_USERS());
}

export const get_user = (userId: number | string)=>{
  return client.query(GET_USER(userId));
}

export const create_new_appointment = (appointment: any) => {
  return client.query(CREATE_NEW_APPOINTMENT(appointment));
}

export const create_confirm_appointment = (appointment: any) => {
  return client.query(CREATE_CONFIRM_APPOINTMENT(appointment));
};

