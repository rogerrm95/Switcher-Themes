import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.main`
    height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: ${props => props.theme.colors.secundaryText};
    background: ${props => props.theme.colors.background};

    article {
        flex: 1;
        margin-top: 50px;
        margin-bottom: 16px;
        max-width: 600px;
        line-height: 24px; 
        padding: 24px;
        border-radius: 6px;
        background: ${props => props.theme.colors.backgroundBox};
        border: solid 1px ${props => props.theme.colors.secundaryBorder};

        display: flex;
        flex-direction: column;
        align-items: center;

        h1 {
            margin-bottom: 24px
        };

        img {
            width: 450px;
            height: 250px;
            border-radius: 4px;
            border: 4px solid ${props => props.theme.colors.secundaryBorder};
        }

        p {
            margin: 16px 12px;
            text-align: justify
        }
    };
    
`

export const ButtonGroup = styled.div`
    margin-top: 36px;
    padding: 20px;
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    button {
        padding: 12px;
        border-radius: 6px;
        border: none;
        cursor: pointer;
        background-color: ${props => props.theme.colors.blueButton};
        color: ${props => props.theme.colors.primaryText};
        font-weight: 600;

        display: flex;
        align-items: center;
        justify-content: center;

        transition: background-color 0.2s;
        
        &:hover{
            background-color: ${props => shade(0.2, props.theme.colors.blueButton)};
        }
    } 
`