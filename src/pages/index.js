import * as React from "react"
import Layout from '../components/layout'
import {createGlobalStyle} from 'styled-components'
import img from '../assets/connected-dots.png'
import styled from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
  body{
    box-sizing: border-box;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    font-family: 'proxima-nova', sans-serif;
    font-size: 16px;
    background: rgb(11, 108, 80);
  background: -moz-linear-gradient(
    172deg,
    rgba(11, 108, 80, 1) 0%,
    rgba(0, 26, 20, 1) 100%
  );
  background: -webkit-linear-gradient(
    172deg,
    rgba(11, 108, 80, 1) 0%,
    rgba(0, 26, 20, 1) 100%
  );
  background: linear-gradient(
    172deg,
    rgba(11, 108, 80, 1) 0%,
    rgba(0, 26, 20, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#0b6c50",endColorstr="#001a14",GradientType=1);
  }
`

const StyledImg = styled.img`
  transform: translate(500px, 100px);
  width: 80%;
  position: absolute;
  right:0;
  bottom: 0;
`



const IndexPage = () => (
  <>
  <StyledImg src={img}/>
  <GlobalStyle/>
  <Layout />
  </>
)

export default IndexPage
