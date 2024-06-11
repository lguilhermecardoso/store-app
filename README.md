# Meu Aplicativo React Native

Este é um aplicativo desenvolvido utilizando React Native com Expo. O projeto está configurado para usar Yarn como gerenciador de pacotes, mas também é compatível com PNPM. A seguir, você encontrará detalhes sobre as tecnologias utilizadas, a estrutura do diretório e as instruções para rodar a aplicação e executar os testes.

## Screens Shots


https://github.com/lguilhermecardoso/store-app/assets/15979107/120023fd-0697-452b-8b54-51aa112b3adc

<div>
<img src="https://github.com/lguilhermecardoso/store-app/assets/15979107/d8a83d52-f3e6-40f1-9221-1fc05ae6df19" width="200"/>
</div>



## Tecnologias Utilizadas

- **[React Native com Expo](https://www.npmjs.com/package/expo):** Para desenvolvimento multiplataforma (iOS e Android).
- **[Yarn](https://yarnpkg.com/):** Gerenciador de pacotes.
- **[React Native Testing Library](https://www.npmjs.com/package/@testing-library/react-native):** Para testes de componentes.
- **[Axios](https://www.npmjs.com/package/axios):** Para requisições HTTP.
- **[Styled Components](https://www.npmjs.com/package/styled-components):** Para estilização dos componentes.
- **[Typescript](https://www.npmjs.com/package/typescript):** Superset de JavaScript que adiciona tipagem estática.
- **[Jest](https://www.npmjs.com/package/jest):** Framework de testes.

## Técnicas de Desenvolvimento

- **[ContextAPI](https://reactjs.org/docs/context.html):** Para gerenciamento de estado global.
- **[useReducers](https://reactjs.org/docs/hooks-reference.html#usereducer):** Para gerenciamento de estado complexo.
- **React Funcional com Hooks:** Para criação de componentes funcionais e gerenciamento de estado e efeitos colaterais.

## Estrutura de Diretório

A estrutura do projeto segue a seguinte organização dentro do diretório `src`:

```perl
src
│
├── components   # Componentes reutilizáveis do aplicativo
├── screens      # Telas do aplicativo
├── contexts     # Provedores de contexto para gerenciamento de estado global
├── lib          # Bibliotecas e configurações adicionais
├── models       # Modelos e interfaces TypeScript
├── reducers     # Funções de redução para gerenciamento de estado
├── routes       # Configurações de navegação e rotas
├── theme        # Configurações de tema e estilos globais
└── utils        # Funções utilitárias e helpers
```

## Como Subir a Aplicação

Para instalar as dependências e rodar a aplicação, siga os passos abaixo:

1. Instale as dependências:

```bash
yarn
```

2. Para rodar a aplicação no iOS:

```bash
yarn ios
```

3. Para rodar no Android:

```bash
yarn android
```

## Executando os Testes

#### Para executar os testes, utilize o comando:

```bash
yarn test
```
