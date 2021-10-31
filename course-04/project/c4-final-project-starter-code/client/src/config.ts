// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = '...'
// export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`
export const apiEndpoint = 'http://localhost:4000/dev'

export const authConfig = {
  domain: 'dev-t3dolc50.us.auth0.com',            // Auth0 domain
  clientId: 'ZQdMZGEFHGRLS7ARyHF8az5SizhOpKgE',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
