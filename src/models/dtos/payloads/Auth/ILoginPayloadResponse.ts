export interface ILoginPayloadResponse {
  token: string;
  refreshToken?: string;
  user: {
    id: string;
    username: string;
    email: string;
  };
}
