const CREATE_USERS = `CREATE TABLE IF NOT EXISTS "users" ( 
  "id" SERIAL, 
  "name" VARCHAR(255) NOT NULL, 
  "email" VARCHAR(255) NOT NULL UNIQUE,
  "password" VARCHAR(255) NOT NULL,
  "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL, 
  "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL,
  PRIMARY KEY ("id"),
  "role" integer ,
  FOREIGN KEY(role) 
	  REFERENCES roles(id)
      ON DELETE SET NULL
); `;


export {
  CREATE_USERS
}