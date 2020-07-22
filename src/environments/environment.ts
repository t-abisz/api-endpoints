import { KeycloakConfig } from 'keycloak-angular';

const keycloakConfig: KeycloakConfig = {
  url: 'http://localhost:8080/auth',
  realm: 'keycloakRealm',
  clientId: 'ams-app'
};


export const environment = {
  production: true,
  apiUrl: 'http://localhost:8080',
  keycloakConfig
};


