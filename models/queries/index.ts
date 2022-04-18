import * as users from "./users.query";
import * as roles from "./roles.query";


export const CREATE_TABLES = {
  text: roles.CREATE_ROLES + users.CREATE_USERS
};

export const GENERATE_DATA = {
  text: roles.GENERATE_ROLES
}

