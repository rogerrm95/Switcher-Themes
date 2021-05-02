import styled from 'styled-components'

export const Container = styled.footer`
     height: 50px;
     width: 100%;
     
     padding: 5px;
     color: ${props => props.theme.colors.primaryText};
     background-color: ${props => props.theme.colors.primary};
     border-top: solid 1px ${props => props.theme.colors.primaryBorder};
     display: flex;
     align-items: center;
     justify-content: center;

     p{
          font-size: 18px;
     }
`