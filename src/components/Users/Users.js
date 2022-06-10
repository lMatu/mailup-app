//Libraries
import React from 'react'
import styled from 'styled-components'

//Other components
import Device from '../Common/Device'

//Img
import logo from '../../assets/img/logo.svg'

//Custom Styled Components
const Logo = styled.img`
  display: flex;
  color: #fff;
  width: 10rem;
  height: auto;
  align-items: flex-start
  @media only screen and ${Device.lg} {
    width: 7rem;
  }
  @media only screen and ${Device.md} {
    width: 7rem;
  }
  @media only screen and ${Device.sm} {
    width: 7rem;
  }  
  @media only screen and ${Device.xs} {
    width: 7rem;
  }  
`
const Container = styled.div`
  width: 90%;
  margin: auto;
  padding 1rem;
`

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between
  width: 100%;
  margin: auto;
  border: 1px solid #ccc;
  padding: 1rem 0;
  border-radius: 8px;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
  @media only screen and ${Device.xs} {
    font-size: 10px;
  }
`

const Items = styled.div`
  #flex: 3;
  width: 2rem;
  margin: auto;
  border: 1px solid #ccc;
  padding: 1rem 0;
  border-radius: 8px;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
  @media only screen and ${Device.xs} {
    #flex: 1;
  }
`

function Users() {
  return (
    <Container>
      <Logo src={logo} alt="logo" />
      <Row>
        <Items></Items>
        <Items></Items>
        <Items></Items>
        <Items></Items>
        <Items></Items>
        <Items></Items>
      </Row>
    </Container>
  )
}

export default Users