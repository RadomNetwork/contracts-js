export enum AuthenticationType {
  'Access Token' = 0,
  'Public Key' = 1,
  'Password' = 2,
  'No Auth' = 3
}

export type AuthenticationTypeKey = keyof typeof AuthenticationType
