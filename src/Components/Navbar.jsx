    import React from 'react'
    import styled from 'styled-components'
    import {SearchOutlined,ShoppingCartOutlined } from '@mui/icons-material';
    import ReactCountryFlag from 'react-country-flag';
    import { Badge } from '@mui/material';
    import Img1 from "../Assets/logo.png"

    const Container = styled.div`
        height: 60px;
    `;

    const Wrapper = styled.div`
        padding: 10px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    `;

    const Left = styled.div`
        flex: 1;
        display: flex;
        align-items: center;
    `;

    const Languages = styled.span`
        font-size: 16px;
        cursor: pointer;
        margin: 5px 5px;
    `;
    const SearchContainer = styled.div`
        border: 0.5px solid lightgray;
        display: flex;
        align-items: center;
        margin-left:25px;
        padding: 5px
    `;
    const Input = styled.input`
        width: 300px;
        padding: 6px;
        border: none;
    `
    const Center = styled.div`
        flex:1;
        text-align: center;
    `
    const Logo = styled.h1`
        font-weight: bold;
    `

    const Right = styled.div`
        flex:1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    `
    const MenuItem = styled.div`
        font-size:14px; 
        cursor:pointer;
        margin-left: 25px;
    `
    const Image = styled.img`
    width: 80px;
    height: 80px;

    `

    const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Languages>
                        <ReactCountryFlag countryCode="US" svg style={{width:'1.5em',height:'1.5em'}}/>
                    </Languages>
                    <Languages>
                        <ReactCountryFlag countryCode="DO" svg style={{width:'1.5em',height:'1.5em'}}/>
                    </Languages>
                    <SearchContainer>
                        <Input placeholder='Search'/>
                        <SearchOutlined style={{color: "gray", fontSize: 20}} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>
                        <Image src={Img1}></Image>
                    </Logo>
                </Center>
                <Right>
                    <MenuItem>Sign Up</MenuItem>
                    <MenuItem>Login</MenuItem>
                    <MenuItem>
                    <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlined />
                    </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
    }

    export default Navbar
