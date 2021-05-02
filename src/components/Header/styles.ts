import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.header`
    height: 100px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 25px;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primaryText};

    a{
        font-size: 20px;
        font-weight: 400;
        margin: 0 16px;
    
        &:hover{
            color: ${props => props.theme.colors.secundaryText} 
        }
    }

    p{
        font-size: 24px;  
    };
`