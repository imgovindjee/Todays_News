import React, { useEffect, useRef, useState } from 'react'

import { Form, useNavigate } from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'

import { LinkContainer } from 'react-router-bootstrap'
import { Button, FormControl, Nav, Navbar } from 'react-bootstrap'

import { IoCloseOutline } from 'react-icons/io5'

import navItems from '../../config/NavItems/NavItems'

import './NavBar.scss'




const NavBar = () => {

    // uesRef forn targeting the particular elements
    const navRef = useRef(null)

    // helping to change the page 
    const navigate = useNavigate()

    // real time changing of the state
    const [isCollapsed, setIsCollaped] = useState(true);
    const [searchQuery, setSearchQuery] = useState("")



    // function to handle the collapse
    const handleCollapsed = () => {
        setIsCollaped(!isCollapsed);
    }


    // function to handle the navCLick
    const handleNavClick = () => {
        setIsCollaped(true)
    }


    // function to handle the search
    const handleSubmit = (e) => {
        e.preventDefault()

        navigate(`/search/${searchQuery}`)

        setSearchQuery("")
        setIsCollaped(true)
    }


    // function to handle the search change
    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    }


    const isSearchButtonDisabled = searchQuery.trim() === "";

    useEffect(()=>{
        console.log(navItems);
    },[])


    return (
        <Navbar
            ref={navRef}
            className="navBar"
            variant="dark"
            expand="lg"
            fixed="top"
            expanded={!isCollapsed}
        >
            <Navbar.Brand className="nav_brand" href="/">
                <img src={""} alt="" className='logo' />
                Today's News
            </Navbar.Brand>

            {
                isCollapsed && (
                    <Navbar.Toggle
                        className='border-0'
                        aria-controls='basic-navbar-nav'
                        onClick={handleCollapsed}
                    />
                )
            }
            {
                !isCollapsed && (
                    <IoCloseOutline
                        size={40}
                        className='close_btn'
                        onClick={handleCollapsed}
                    />
                )
            }

            <Navbar.Collapse className="nav_collapse" id='basic-navbar-nav'>
                <Nav className='nav mr-auto' onClick={handleNavClick}>
                    {
                        navItems.map((navItem) => (
                            <LinkContainer className='link_container' to={navItem.page} key={uuidv4()}>
                                <Nav.Link className='nav_item' >
                                    {
                                        navItem?.nav
                                    }
                                </Nav.Link>
                            </LinkContainer>
                        ))
                    }
                </Nav>

                <Form className="search_form search-form" onSubmit={handleSubmit}>
                    <FormControl
                        type="text"
                        placeholder="Explore news..."
                        className="form_input form-input form-control-lg mt-lg-2 mt-md-2 mt-sm-2 mt-xl-0"
                        value={searchQuery}
                        onChange={handleInputChange}
                    />
                    <Button
                        className="search_btn search-btn mt-lg-2 ml-2 mt-md-2 mt-sm-2 mt-xl-0"
                        onClick={handleSubmit}
                        disabled={isSearchButtonDisabled}
                    >
                        Search
                    </Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar
