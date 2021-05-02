import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,
        colors: {
            primary: string,
            secundary: string,

            background: string,
            backgroundBox: string,

            primaryText: string,
            secundaryText: string,

            primaryBorder: string,
            secundaryBorder: string,

            blueButton: string,
        }
    }
}