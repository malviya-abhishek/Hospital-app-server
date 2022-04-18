export const CREATE_ROLES = 
`
  CREATE TABLE IF NOT EXISTS "roles" ( 
  "id" SERIAL PRIMARY KEY, 
  "role" VARCHAR(255) NOT NULL UNIQUE); 
`;

export const GENERATE_ROLES = 
`
  INSERT INTO roles(role)
  VALUES
    ('doctor'),
    ('receptionist'),
    ('patient')
    ON CONFLICT DO NOTHING;
`;
