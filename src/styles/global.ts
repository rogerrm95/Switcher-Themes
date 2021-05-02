import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
    padding: 0;
    margin: 0;
    box-sizing: 'border-box';
    }

    body {
        overflow: hidden
    }

    body, textarea, input {
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }

    button {
        font-family: Arial, Helvetica, sans-serif;
    }

    a {
        text-decoration: none;
        color: inherit
    }

`