/**
 * Contract type to user in login feature
 */
export interface User {
  id:          string;
  username:    string;
  password:    string;
  firstName?:  string;
  lastName?:   string;
  gender?:     string; // m | f | o
  session:     Session;
}

/**
 * Contract type to user's session
 */
export interface Session {
  id:          string;
  accessToken: string;
}
