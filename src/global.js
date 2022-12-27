import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.font};
    accent: ${({ theme }) => theme.accent};
}
`;

export default GlobalStyles;
