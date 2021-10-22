import React, { useState, useEffect } from "react"
import styled from "styled-components"

const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  @media only screen and (min-width: 1024px){
    justify-content: end;
  }
  align-items: center;
`

const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ListItem = styled.li`
  cursor: pointer;
  font-weight: 600;
  margin: 0 5px;
  font-size: 27px;
  cursor: pointer;
  color: white;
`

const StyledSpan = styled.span`
  font-weight: 300;
  font-size: 2.4rem;
  transform: translateY(-1000px);
`
const YourStyled = styled.span`
  font-weight: 800;
  font-size: 1.8rem;
  transform: translateY(-1000px);
`

const Header = props => {
  return (
    <HeaderStyled>
        <List>
          <ListItem>
          <YourStyled>YOUR</YourStyled><StyledSpan>content</StyledSpan>
          </ListItem>
          <ListItem>
            <YourStyled>YOUR</YourStyled><StyledSpan>buy</StyledSpan>
          </ListItem>
          <ListItem>
          <YourStyled>YOUR</YourStyled><StyledSpan>token</StyledSpan>
          </ListItem>
          <ListItem>
          <YourStyled>YOUR</YourStyled><StyledSpan>wallet</StyledSpan>
          </ListItem>
        </List>
        {/* <Button>whitepaper</Button> */}
    </HeaderStyled>
  )
}

export default Header
