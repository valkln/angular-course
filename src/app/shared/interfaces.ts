export interface UserI {
  email: string
  password: string
  returnSecureToken?: boolean
}
export interface FbAuthResponse {
  idToken: string,
  expiresIn: string
}
export interface PostI {
  id?: string
  title: string
  author: string
  text: string
  date: Date
}
export interface DataBaseCreateResponse {
  name: string
}
