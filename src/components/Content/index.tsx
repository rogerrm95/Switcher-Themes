import { Footer } from '../Footer'
import { Container, ButtonGroup } from './styles'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

export function Content() {

    const { colors } = useContext(ThemeContext)

    return (
        <Container>
            <article>
                <h1>Alterando Tema Dark/Light com ReactJS</h1>

                <img src="/banner.png" alt="Banner" />

                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.

                </p>

                <ButtonGroup>
                    <button type='button'>
                        <FiChevronLeft size={20} color={colors.primaryText}/>
                        Anterior
                    </button>
                    <button type='button'>
                        Próximo
                        <FiChevronRight size={20} color={colors.primaryText}/>
                    </button>
                </ButtonGroup>
            </article>

            <Footer />

        </Container>
    )
}