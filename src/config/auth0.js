import auth0 from 'auth0-js';
import params from 'json/params.json';

export const auth0Client = new auth0.WebAuth({
  domain: params.domain,
  clientID: params.clientId,
  redirectUri: params.callbackUrl,
  scope: params.scope,
  responseType: 'token id_token',
});
