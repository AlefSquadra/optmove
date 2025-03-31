import { InteractionRequiredAuthError } from "@azure/msal-browser";
import { useMsal } from "@azure/msal-react";
import { useEffect, useState } from "react";

export const useAuth = () => {
  const { instance, accounts } = useMsal();
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const login = () => {
    instance
      .loginPopup({
        scopes: ["User.Read"], // Defina os escopos necessários
      })
      .catch((e) => console.error(e));
  };

  const logout = () => {
    instance.logoutPopup();
  };

  useEffect(() => {
    if (accounts.length > 0) {
      instance
        .acquireTokenSilent({
          scopes: ["User.Read"],
          account: accounts[0],
        })
        .then((response) => {
          setAccessToken(response.accessToken);
        })
        .catch((error) => {
          if (error instanceof InteractionRequiredAuthError) {
            instance
              .acquireTokenPopup({
                scopes: ["User.Read"],
              })
              .then((response) => {
                setAccessToken(response.accessToken);
              });
          } else {
            console.error(error);
          }
        });
    }
  }, [accounts, instance]);

  return { login, logout, accessToken, accounts };
};
