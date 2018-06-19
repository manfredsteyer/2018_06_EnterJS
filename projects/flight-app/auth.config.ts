import { AuthConfig } from 'angular-oauth2-oidc';
 
export const authConfig: AuthConfig = {
 
  // Auth-Server
  issuer: 'https://steyer-identity-server.azurewebsites.net/identity',
 
  // Wer sind wir?
  redirectUri: window.location.origin + '/index.html',
  clientId: 'spa-demo',
 
  scope: 'openid profile email voucher',
  //          Identity        | Access
  //          ID_Token        | Access_Token
  //          OIDC            | Use-Case-spezifisch      
}