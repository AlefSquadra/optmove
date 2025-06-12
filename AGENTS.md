# Este documento descreve os principais agentes (componentes, contextos, serviços e hooks) utilizados no frontend do projeto Optmove.

    ---

    ## Aplicação Principal
    - **src/main.tsx**: Ponto de entrada da aplicação React, renderiza o componente `<App />` dentro do StrictMode.
    - **src/app/App.tsx**: Componente raiz que envolve a aplicação nos provedores principais:
       - `ApplicationProvider`: Contexto global da aplicação.
       - `MsalProvider`: Provedor de autenticação MSAL (Microsoft Authentication Library).
       - `QueryClientProvider`: Provedor de estado e cache para React Query.
       - `FluentProvider` e `MantineProvider`: Temas UI para Fluent UI e Mantine.
       - `AppRoutes`: Componente que define as rotas da SPA.

    ---

    ## Rotas (src/app/router/Routes.tsx)
    - Define as rotas do frontend usando react-router.
    - Rotas visíveis:
       - `/login`: Página de Login (`<LoginPage />`).
       - `/select-zone`: Página para seleção de zona (`<SelectZonePage />`).
       - `/home`: Página inicial ou dashboard (`<Home />`).
    - O componente é envolvido pelo `AuthProvider` que gerencia autenticação.

    ---

    ## Provedores (src/app/providers/)
    - **AuthProvider**: Gerencia estado da autenticação usando MSAL.
       - Mantém usuário ativo, tokens de acesso MSAL e API.
       - Interage com MSAL para login, logout e renovação de tokens.
       - Fornece contexto de autenticação para toda a aplicação.
    - **ApplicationProvider**: Mantém estados específicos da aplicação:
       - Parâmetros da seleção de zona.
       - Dados de oficialização selecionados.

    ---

    ## Features Principais

    ### Login (src/features/login/)
    - **LoginPage.tsx**: Componente que exibe o formulário de login.
      - Usa `react-hook-form` para controle do formulário.
      - Usa o hook `useAuth` para disparar o login.
    - **useAuth hook**: Hook que acessa o contexto de autenticação provido pelo `AuthProvider`.

    ### Seleção de Zona (src/features/selectZone/)
    - **SelectZonePage.tsx**: Componente para seleção de zona e perfil.
      - Usa React Query para carregar dados de perfis, zonas e mesas.
      - Usa `react-hook-form` com validação Zod.
      - Atualiza o estado do `ApplicationProvider` com a seleção realizada.
    - **SelectZoneService.ts**: Serviço que faz chamadas HTTP para backend para obter dados relacionados a perfis, zonas e transferência de perfis.
      - Utiliza `apiClient` para comunicação HTTP.

    ---

    ## Serviços Compartilhados
    - **apiClient** (src/shared/services/apiClient.ts): Cliente HTTP configurado com base em `HttpClient`.
      - Ajusta automaticamente o token de autenticação para chamadas a backend.
      - O token é gerenciado globalmente e atualizado pelo `AuthProvider`.

    ---

    ## Autenticação e Tokens
    - Autenticação baseada em MSAL com configuração em `src/app/providers/AuthProvider/msalConfig.ts`.
    - Configurações:
      - clientId, authority, redirectUri configurados via variáveis de ambiente.
    - O fluxo de login utiliza pop-up para autenticação.
    - Tokens MSAL são usados para adquirir token da API backend via serviço de autenticação.

    ---

    ## Tecnologias e Bibliotecas
    - React 18 com JSX/TSX.
    - React Router para roteamento SPA.
    - React Hook Form + Zod para validação de formulários.
    - React Query para data fetching e caching.
    - MSAL React para autenticação Microsoft.
    - Fluent UI e Mantine para UI e temas.

    **Importante:**

    - Os componentes a serem utilizados na aplicação devem ser exclusivamente do Fluent UI.
    - O Mantine é utilizado apenas e somente para grid e tabelas.
    - Ao criar novos arquivos certifique-se de seguir os padrões recomendados no tsconfig,json, .prettierrc e eslint.config.js
    - Toda vez que um componente novo for criado, deve-se partir desse princípio, utilizando Fluent UI para componentes UI e Mantine somente para grid e tabelas.

    ---

    ## Observações
    - Há arquivos de ambiente e configuração TS, além do uso de `vite` como bundler.
    - Código possui modularização clara por features e provedores.
    - Algumas rotas ainda comentadas indicam planos para rotas protegidas.

    ---
