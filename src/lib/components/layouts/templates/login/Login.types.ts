import { MouseEvent, ReactNode } from "react";
import { LoginFormZodValues } from "./login.schema";

export interface RootProps {
  children: ReactNode;
}

export interface BannerProps {
  children?: ReactNode;
  background?: string;
  logoImg?: string;
  title?: string;
}

export interface MainProps {
  children: ReactNode;
}

export interface HeaderProps {
  title?: string;
  description?: string;
}

export interface FormProps {
  onSubmit?: (data: LoginFormZodValues) => void;
}

export interface SocialButtonsProps {
  onClickLoginGoogle?: (e: MouseEvent<HTMLButtonElement>) => void;
  onClickLoginMicrosoft?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export interface FooterProps {
  children?: ReactNode;
}
