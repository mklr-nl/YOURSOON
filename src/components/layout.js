import * as React from "react"
import styled from 'styled-components'

import {Header} from './Header'
import {Hero} from './Hero'
import {Background} from './Background'
import {countDown} from '../helpers/countdown'

const LayoutStyled = styled.div`
  width: 90%;
  margin: 0 auto;
`

const Layout = (props) => {
  countDown()
  return (
      <LayoutStyled>
      <Header />
      <Hero/>
      </LayoutStyled>
  )
}


export default Layout
