export const CREATE_NEW_APPOINTMENT_TABLE = (): string => 
`
CREATE TABLE IF NOT EXISTS "new_appointments" ( 
  "id" SERIAL,
  "doctor" integer,
  "patient" integer,
  "appointmentAt" TIMESTAMP WITH TIME ZONE NOT NULL, 
  "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT current_timestamp,
  PRIMARY KEY ("id"),
  FOREIGN KEY(doctor) 
	  REFERENCES users(id)
      ON DELETE CASCADE,

  FOREIGN KEY(patient) 
    REFERENCES users(id)
        ON DELETE CASCADE
);
`;

export const CREATE_NEW_APPOINTMENT = (appointment : any ): string =>
  `
  INSERT INTO new_appointments(doctor, patient, "appointmentAt")
  VALUES (${appointment.doctor}, ${appointment.patient}, '${appointment.appointmentAt}' )
  RETURNING *;
  `


  