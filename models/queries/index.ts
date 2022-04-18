import * as users from "./users.query";
import * as roles from "./roles.query";
import { QueryConfig } from "pg";


export const CREATE_TABLES = (): QueryConfig<any[]> => ({
  text: roles.CREATE_ROLES_TABLE() + users.CREATE_USERS_TABLE()
});

export const GENERATE_DATA = () : QueryConfig => ({
  text: roles.GENERATE_ROLES()
});

export const CREATE_USER = (user: any): QueryConfig<any> => ({
  text: users.CREATE_USER(user),
});
