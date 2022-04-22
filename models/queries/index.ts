import * as users from "./users.query";
import * as roles from "./roles.query";
import * as appointments from "./appointment.query";
import { QueryConfig } from "pg";


export const CREATE_TABLES = (): QueryConfig<any[]> => ({
  text: roles.CREATE_ROLES_TABLE() + users.CREATE_USERS_TABLE() + appointments.CREATE_NEW_APPOINTMENT_TABLE(),
});

export const GENERATE_DATA = () : QueryConfig => ({
  text: roles.GENERATE_ROLES()
});

export const CREATE_USER = (user: any): QueryConfig<any> => ({
  text: users.CREATE_USER(user),
});

export const GET_USERS = (): QueryConfig<any[]> => ({
  text: users.GET_USERS(),
});

export const GET_USER = (userId: number | string) => ({
  text: users.GET_USER(userId),
});

export const CREATE_NEW_APPOINTMENT = (appointment: any): QueryConfig<any> => ({
  text: appointments.CREATE_NEW_APPOINTMENT(appointment)
})
