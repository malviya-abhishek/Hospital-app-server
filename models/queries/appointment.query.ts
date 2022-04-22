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

export const CREATE_CONFIRM_APPOINTMENT_TABLE = (): string => 
`
CREATE TABLE IF NOT EXISTS "confirm_appointments" ( 
  "id" SERIAL,
  "appointment" integer,
  "receptionist" integer,
  "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT current_timestamp,
  PRIMARY KEY ("id"),
  FOREIGN KEY(appointment) 
    REFERENCES new_appointments(id)
      ON DELETE CASCADE,
  FOREIGN KEY(receptionist) 
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

export const CREATE_CONFIRM_APPOINTMENT = (appointment : any ): string =>
`
INSERT INTO confirm_appointments(appointment, receptionist)
VALUES (${appointment.appointment}, ${appointment.receptionist} )
RETURNING *;
`


  