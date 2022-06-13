//Libraries
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from 'react-icons/md';
import Swal from 'sweetalert2';
import ReactPaginate from 'react-paginate';

//Other components
import Device from '../Common/Device'
import getAllUsers from '../../services/getAllUsers';

//Img
import logo from '../../assets/img/logo.svg'
import getUserByPage from '../../services/getUserByPage';

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
  margin: 1rem;
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

const ItemsNo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 1;
  color: #FFFFFF;
  width: 30%;
  max-height: 5rem;
  margin: 1.5rem;
  border: 1px solid #efefef;
  padding: 1rem 0;
  border-radius: 8px;
  box-shadow: 0px 3px 4px rgba(240, 240, 240, 0.15);
`

const ItemsCol = styled.div`
  padding: 0.5rem;
  @media only screen and ${Device.xs} {
    width: 100%;
  }
`

const ImgProfile = styled.img`
  width: 3.5rem;
  border-radius: 50%;
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
    margin: 0.5rem 0;
    width: 100%;
  }
`;
const MyPaginate = styled(ReactPaginate).attrs({
  activeClassName: 'active',
})`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  width: 100%;
  margin: 1rem;
  li a {
    border-radius: 7px;
    padding: 0.1rem 1rem;
    border: gray 1px solid;
    cursor: pointer;
  }
  li.previous a,
  li.next a,
  li.break a {
    color: #2BA6CB;
    border-color: transparent;
  }
  li.active a {
    background-color: #2BA6CB;
    border-color: transparent;
    color: white;
    min-width: 32px;
  }  
  li.active a:hover {
    background: linear-gradient(180deg,#2ba6cb 0%,#1988a9 100%);
    border-color: transparent;
    color: white;
  }
  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 1rem;
  padding-left: 4rem;
  @media only screen and ${Device.xs} {
    padding-left: 0;
  }
`

function Users() {

  const inputRef = useRef();

  const [users, setUsers] = useState('');
  const [first, setFirst] = useState('');
  const [totUsers, setTotUsers] = useState('');
  const [pageCount, setpageCount] = useState(0);

  const limit = 12;

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

    allUsers()
    totalUsers()
  }, [])

  //Servicio con axios
  const allUsers = async () => {
    let response = await getAllUsers(`/user`, 1, limit);
    Swal.close();
    if (response.flag) {
      setUsers(response.result.data)
      setFirst(response.result.data)
      const total = response.result.total
      setpageCount((Math.ceil(total / limit)) - 1)
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

  //Traigo todos los usuarios para realizar la busqueda
  //Si tuviera una búsqueda por nombre en la API, se podría hacer en el servicio
  const totalUsers = async () => {
    let response = await getAllUsers(`/user`);
    Swal.close();
    if (response.flag) {
      setTotUsers(response.result.data)
    }
  }

  //Actualizo la página con los usuarios que vienen en la página seleccionada de la API
  const getUsers = async (currentPage) => {
    let response = await getUserByPage(`/user`, currentPage, limit);
    Swal.close();
    if (response.flag) {
      setUsers(response.result.data)
      setFirst(response.result.data)
    }
  }

  function handleClick() {
    const filter = inputRef.current.value;
    if (filter && filter.trim() !== "") {
      const userSearch = totUsers.filter(opt => {

        if ((opt.firstName).toUpperCase().includes(filter.toUpperCase())) {
          return true;
        } else if ((opt.lastName).toUpperCase().includes(filter.toUpperCase())) {
          return true;
        } else if ((opt.id).toUpperCase().includes(filter.toUpperCase())) {
          return true;
        } else if ((opt.firstName + ' ' + opt.lastName).toUpperCase().includes(filter.toUpperCase())) {
          return true;
        } else {
          return false;
        }
      })

      setUsers(userSearch)
    } else {
      Swal.fire({
        title: "Atención",
        text: "Debe ingresar un valor de búsqueda",
        icon: "info",
        confirmButtonColor: "#054d6e",
        allowOutsideClick: false,
        allowEscapeKey: false,
        width: 400,
      })
    }
  }

  function handleRefresh() {
    inputRef.current.value = ''
    setUsers(first)
  }

  function handleBlur() {
    if(inputRef.current.value === '') {
      setUsers(first)
    }
  }

  const handlePageClick = async (data) => {

    Swal.fire({
      title: "Por favor, aguarde...",
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      showConfirmButton: false,
      showCancelButton: false,
    });
    Swal.showLoading();

    let currentPage = data.selected + 1;

    await getUsers(currentPage);

  };

  return (
    <Container>
      <Logo src={logo} alt="logo" />
      <Box>
        <Group>
          <Input ref={inputRef} type="text" placeholder="ingrese nombre o id" name="search" onBlur={handleBlur}>
          </Input>
          <Button type="button" onClick={handleClick}>
            Buscar
          </Button>
          <Button type="button" onClick={handleRefresh}>
            Refrescar
          </Button>
        </Group>
        <Content>
          {users.length > 0 ? users.map((opt, index) => {
            return (
              <Items to={`/users/profile/${opt.id}`} key={opt.id}>
                <ItemsCol><ImgProfile src={opt.picture}></ImgProfile></ItemsCol>
                <ItemsCol>{opt.firstName} {opt.lastName}</ItemsCol>
                <ItemsCol><ArrowRight /></ItemsCol>
              </Items>
            )
          }) :
            <ItemsNo>
              <ItemsCol>Usuarios no encontrados</ItemsCol>
            </ItemsNo>
          }
        </Content>
      </Box>
      <Footer>
        <MyPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={1}
          onPageChange={handlePageClick}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          disabledClassName={"disabled"}
          activeClassName={"active"}
        />
      </Footer>
    </Container>
  )
}

export default Users