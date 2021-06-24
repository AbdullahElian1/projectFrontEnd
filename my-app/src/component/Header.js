import React, { Component } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from "react-router-dom";
import './Header.css'

export class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                   
                        <Navbar.Brand href="#home">photographer</Navbar.Brand>
                      
                            {/* <Nav.Link href="/">Home</Nav.Link> */}
                            <Link className="title" to="/">Home</Link>
                            <Link to="/myphotos">My Photos</Link> 
                            <Link to="/Environment">Environment</Link>
                            <Link to="/AboutUs">About Us</Link>
                        
                    
                </Navbar>

            </div>
        )
    }
}

export default Header
