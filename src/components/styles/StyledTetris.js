import styled from 'styled-components';

import bgImage from '../../img/tester.png';

export const StyledTetrisWrapper = styled.div`
    width: 75vw;
    height: 85vh;
    background: url(${bgImage}) #000;
    background-size: 70%; 
    //overflow: hidden;
`

export const StyledTetris = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 40px;
    margin: 0 auto;
    max-width: 900px;

    aside {
        width: 100%;
        max-width: 200px;
        display: block;
        padding 0 20px;
    }
`
