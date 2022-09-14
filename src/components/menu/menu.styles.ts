import styled from "styled-components"

type Props = {
    opacity: string
    position: string
    visibility: string
}

export const Drop = styled.div<{opacity?: boolean}>`
    opacity: ${props => props.opacity ? '0' : '1'};
`

export const list = styled.ul<{position?: boolean, visibility?: boolean}>`

    top: ${props => props.position ? '50%' : '0%'};
    position: relative;
    opacity: 1;
    visibility: ${props => props.visibility ? 'visible' : 'hidden'};
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    z-index: 999;
    background-color: white;
    padding: 10px 10px;
    transition: opacity 1s;
    transition: all 0.5s ease-in;
`

