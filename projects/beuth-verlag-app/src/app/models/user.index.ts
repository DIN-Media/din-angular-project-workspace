/**
 * Contract type to user in login feature
 */
export interface User {
  id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  gender?: Gender;
  session: Session;
}

/**
 * Contract type to user's session
 */
export interface Session {
  id: string;
  accessToken: string;
}

/**
 * Contract enum type to user's gender
 */
export enum Gender {
  MALE = 'M',
  FEMALE = 'F',
  OTHER = 'O'
}
