//Libraries
import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from 'react-icons/md';

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

const Box = styled.div`
  display: flex;;
  flex-direction: column;
  width: 100%;
  margin: auto;
  border: 1px solid #efefef;
  border-radius: 8px;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
  @media only screen and ${Device.xs} {
    font-size: 10px;
  }
`

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin: auto;
`

const Items = styled(Link)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 3 3 3 3;
  text-decoration: none;
  color: #FFFFFF;
  width: 30%;
  max-height: 5rem;
  margin: 1.5rem;
  border: 1px solid #efefef;
  padding: 1rem 0;
  border-radius: 8px;
  box-shadow: 0px 3px 4px rgba(240, 240, 240, 0.15);
  &:hover{
    background-color: #054d6e;    
    box-shadow: 0px 3px 4px rgba(180, 180, 180, 0.25);
  }
  @media only screen and ${Device.md} {
    width: 40%;
  }
  @media only screen and ${Device.sm} {
    width: 100%;
  }
  @media only screen and ${Device.xs} {
    width: 100%;
  }
`
const ItemsCol = styled.div`
  padding: 0.5rem;
  @media only screen and ${Device.xs} {
    width: 100%;
  }
`

const ImgProfile = styled.img`
  width: 5rem;
  height: auto;
`

const ArrowRight = styled(MdKeyboardArrowRight)`
  color: white;
  margin: 0 auto;
  font-size: 1.3rem;
  &:hover {
    cursor: pointer;
  }
`;

const Group = styled.div`
  display: flex;
  margin: 1rem;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  @media only screen and ${Device.xs} {
    margin: 0.5rem 0;
    width: 100%;
  }
`;

const Button = styled.button`
  &:hover {
    background-color: #054d6e;
    color: #FFFFFF;
    border-color: #FFFFFF;
  }
  @media only screen and ${Device.xs} {
    width: 100%;
  }
`;

function Users() {
  return (
    <Container>
      <Logo src={logo} alt="logo" />
      <Box>
        <Group>
          <Input></Input><Button type="button">Buscar</Button>
        </Group>
        <Content>
          <Items to={`/profile/1`} key={1}>
            <ItemsCol><ImgProfile src={logo}></ImgProfile></ItemsCol>
            <ItemsCol>Matias Pereira</ItemsCol>
            <ItemsCol><ArrowRight /></ItemsCol>
          </Items>
        </Content>
      </Box>
    </Container>
  )
}

export default Users