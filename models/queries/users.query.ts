export const CREATE_USERS_TABLE = (): string => 
`
CREATE TABLE IF NOT EXISTS "users" ( 
  "id" SERIAL, 
  "name" VARCHAR(255) NOT NULL, 
  "email" VARCHAR(255) NOT NULL UNIQUE,
  "password" VARCHAR(255) NOT NULL,
  "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT current_timestamp, 
  "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT current_timestamp,
  PRIMARY KEY ("id"),
  "role" integer ,
  FOREIGN KEY(role) 
	  REFERENCES roles(id)
      ON DELETE SET NULL
);
`;

export const CREATE_USER = (user: any): string => 
`
INSERT INTO users(name, email, password, role)
VALUES ('${user.name}', '${user.email}', '${user.password}', '${user.role}')
RETURNING id as userId
`;

export const GET_USERS = (): string =>
`
SELECT u.id, u.name, u.email, r.role FROM users as u
INNER JOIN roles as r ON u.role = r.id;
`;

export const GET_USER = (userId : any): string =>
`
SELECT u.id, u.name, u.email, r.role FROM users as u
INNER JOIN roles as r ON u.role = r.id
where u.id = ${userId};
`;