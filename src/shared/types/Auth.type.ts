export interface ILoginPayloadRequest {
    username: string;
    password: string;
  }

export interface ILoginPayloadResponse {
    token: string;
    refreshToken?: string;
    user: {
      id: string;
      username: string;
      email: string;
    };
  }
  export interface IGetTokenDefaultPayloadRequest {
    token: string;
  }
  
  export interface IGetTokenDefaultPayloadResponse {
    accessToken: string;
  }
  
  