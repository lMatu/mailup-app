//Libraries
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2';
import moment from "moment";

//Other components
import Device from '../Common/Device'
import getDataUser from '../../services/getUser';

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
  justify-content: center;
  width: 100%;
  margin: auto;
`

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: left;
  color: #FFFFFF;
  width: 100%;
  margin: 2rem;
  border: 1px solid #efefef;
  padding: 1rem 0;
  border-radius: 8px;
  box-shadow: 0px 3px 4px rgba(240, 240, 240, 0.15);
  @media only screen and ${Device.md} {
    width: 80%;
  }
  @media only screen and ${Device.sm} {
    width: 100%;
  }
  @media only screen and ${Device.xs} {
    width: 100%;
    text-align: center;
  }
`
const ItemsCol = styled.div`
  width: 40%;
  padding: 0.4rem;
  padding-left: 5rem;
  text-transform: ${(props) => (props.cap ? "capitalize" : "")};
  @media only screen and ${Device.md} {
    width: 40%;
    padding-left: 0;
  }
  @media only screen and ${Device.sm} {
    width: 40%;
    padding-left: 0;
  }
  @media only screen and ${Device.xs} {
    width: 100%;
    padding-left: 0;
  }
`

const ImgProfile = styled.img`
  width: 6rem;
  border-radius: 50%;
  height: auto;
  @media only screen and ${Device.sm} {
    width: 3.5rem;
  }
  @media only screen and ${Device.xs} {
    width: 3.5rem;
  }
`

const Name = styled.h1`
  color: white;
  margin: auto 1rem;
  font-size: 1.2rem;
`;

const Group = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 1rem;
  padding: 0.5rem 5rem;
  flex-flow: row wrap;
  @media only screen and ${Device.xs} {
    margin: auto;
    justify-content: center;
    padding: 0.5rem 0.5rem;
  }
`;

const SubGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and ${Device.xs} {
  }
`;

const Button = styled.button`
  &:hover {
    background-color: #054d6e;
    color: #FFFFFF;
    border-color: #FFFFFF;
  }
  @media only screen and ${Device.xs} {
    margin: 0.5rem 0;
    width: 90%;
  }
`;

function Profile() {

  let navigate = useNavigate()
  let params = useParams();
  //navigate("/users/profile", { replace: true })

  console.log("params")
  console.log(params.id)

  const [user, setUser] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {

    Swal.fire({
      title: "Por favor, aguarde...",
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      showConfirmButton: false,
      showCancelButton: false,
    });
    Swal.showLoading();

    getUser()
  }, [])

  const getUser = async () => {
    let response = await getDataUser(`/user/${params.id}`);
    Swal.close();
    if (response.flag) {
      setUser(response.result)
      setLocation(response.result.location)
    } else {
      Swal.fire({
        title: "Error",
        text: "No se pudo obtener los usuarios",
        icon: "error",
        confirmButtonColor: "#3085d6",
        allowOutsideClick: false,
        allowEscapeKey: false,
      })
    }
  }

  function handleClick() {
    navigate("/users")
  }

  console.log("user")
  console.log(user)
  console.log(location)

  return (
    <Container>
      <Logo src={logo} alt="logo" />
      <Box>
        <Group>
          <SubGroup>
            <ImgProfile src={user.picture}></ImgProfile>
            <Name>{user.firstName} {user.lastName}</Name>
          </SubGroup>
          <Button type="button" onClick={handleClick}>
            Volver
          </Button>
        </Group>
        <Content>
          <Items>
            <ItemsCol><b>Cumpleaños:</b> {moment(user.dateOfBirth).format("YYYY-MM-DD")}</ItemsCol>
            <ItemsCol><b>Email:</b> {user.email}</ItemsCol>
            <ItemsCol cap="1"><b>Género:</b> {user.gender}</ItemsCol>
            <ItemsCol><b>Dirección:</b> {location.street}</ItemsCol>
            <ItemsCol cap="1"><b>Ciudad:</b> {location.city}</ItemsCol>
            <ItemsCol cap="1"><b>Estado:</b> {location.state}</ItemsCol>
            <ItemsCol cap="1"><b>País:</b> {location.country}</ItemsCol>
            <ItemsCol><b>Teléfono:</b> {user.phone}</ItemsCol>
          </Items>
        </Content>
      </Box>
    </Container>
  )
}

export default Profile