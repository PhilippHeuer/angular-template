/**
 * Dependencies
 */
import { KeycloakService } from 'keycloak-angular';
import { environment } from '@environments/environment';

/**
 * Keycloak Initializer Function
 */
export function initializer(keycloak: KeycloakService): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        await keycloak.init({
          config: {
            url: environment.auth.server,
            realm: environment.auth.realm,
            clientId: environment.auth.client
          },
          initOptions: {
            onLoad: 'login-required',
            responseMode: 'fragment',
            checkLoginIframe: true
          },
          // enables the interceptor that adds the Authorization: Bearer Token to every outgoing request
          enableBearerInterceptor: true,
          bearerExcludedUrls: [
            '/assets',
          ],
        });
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };
}
