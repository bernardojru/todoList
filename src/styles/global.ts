import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
  --gray-100: #f2f2f2;
  --gray-200: #d9d9d9;
  --gray-300: #808080;
  --gray-400: #333333;
  --gray-500: #262626;
  --gray-600: #1a1a1a;
  --gray-700: #0d0d0d;

  --blue-dark: #1e6f9f;

  --blue: #4ea8de;

  --purple-dark: #5e60ce;

  --purple: #8284fa;

  --danger: #e25858;
}
* {
       margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
    }


    body {
       background: var(--gray-600);
       min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  color: var(--gray-100);
  overflow-x: hidden;
    }

    button {
  cursor: pointer;

    }

    ::-webkit-scrollbar {
        background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background-color: blue;
        border-radius: 30px;
        background-color: var(--gray-400);
    }
  `;
