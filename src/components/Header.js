import React, { useCallback, useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
    MDBBtn,
} from 'mdb-react-ui-kit';
import { loadUsersStart, searchUserStart } from '../redux/actions';


const Header = () => {
    const [showBasic, setShowBasic] = useState(false);
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        dispatch(searchUserStart(name));
        setName('');
    }, [dispatch, name]);

    return (
        <>
            <MDBNavbar expand="lg" light bgColor="primary">
                <MDBContainer fluid>
                    <MDBNavbarBrand className="text-white">
                        <span style={{ marginRight: "10px" }}>
                            <MDBIcon fas icon="book-open" />
                        </span>
                        Contact
                    </MDBNavbarBrand>
                    <MDBNavbarToggler
                        aria-controls='navbar'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        className='text-white'
                        onClick={() => setShowBasic(!showBasic)}
                    >
                        <MDBIcon fas icon="bars" />
                    </MDBNavbarToggler>
                    <MDBCollapse navbar show={showBasic} >
                        <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
                            <MDBNavbarItem className='active'>
                                <MDBNavbarLink aria-current='page' href='/'>
                                    Home
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem className='active'>
                                <MDBNavbarLink aria-current='page' href='/addUser'>
                                    Add User
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem className='active'>
                                <MDBNavbarLink aria-current='page' href='/about'>
                                    About
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                        <form className="d-flex input-group w-auto" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search Name..."
                                value={name}
                                onChange={(event) => setName(event.target.value)} />
                            <MDBBtn color='dark' type="submit">Search</MDBBtn>
                            
                        </form>
                        <MDBBtn color='info' style={{marginLeft: "4px"}} onClick={() => dispatch(loadUsersStart({start:0, end: 4, currentPage: 0}))}>Reset</MDBBtn>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
}

export default Header;