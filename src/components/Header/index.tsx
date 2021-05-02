import Switch from 'react-switch'
import { shade } from 'polished'
import { Container } from './styles'

import { ThemeContext } from 'styled-components'
import { useContext } from 'react'

interface HeaderProps {
    toggleTheme: () => void
}

export function Header({ toggleTheme }: HeaderProps) {

    const { colors, title } = useContext(ThemeContext)

    return (
        <Container>
            <p>
                Switcher Theme
            </p>

            <div>
                <a href="/">Home</a>
                <a href="/">Sobre</a>
                <a href="/">Produtos</a>
                <a href="/">Contato</a>
            </div>

            <Switch
                checked={title  === 'dark'}
                handleDiameter={20}
                checkedIcon={false}
                uncheckedIcon={false}
                onChange={toggleTheme}
                onColor={shade(0.1, colors.secundary)}
                offColor={colors.secundary}
            />
        </Container>
    )
}