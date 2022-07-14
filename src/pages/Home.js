import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserStart, filterUserStart, loadUsersStart, sortUserStart } from '../redux/actions';
import {
    MDBTable,
    MDBTableHead,
    MDBTableBody,
    MDBBtn,
    MDBIcon,
    MDBTooltip,
    MDBSpinner,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtnGroup,
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Home = () => {
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector((state) => state.data);
    const [sortValue, setSortValue] = useState("");
    const navigate = useNavigate();
    const sortOption = ["Name", "Email", "Phone", "Address", "Status"];
    const onSortChange = useCallback((event) => {
        event.preventDefault();
        let sortValue = event.target.value.toLowerCase()
            .split(" ")
            .map((sort) => sort.charAt(0).toUpperCase() + sort.substring(1))
            .join(" ");
        console.log('sortValue', sortValue)
        if(sortOption.includes(sortValue)){
            setSortValue(event.target.value);
            dispatch(sortUserStart(event.target.value))
        } else {
            dispatch(loadUsersStart());
            setSortValue("");
        }
    }, [dispatch]);
    const onFilterChange = (value) => {
        dispatch(filterUserStart(value));
    };
    const handleDelete = (id) => {
        if (window.confirm("Are you sure that you wanted to delete that user?")) {
            dispatch(deleteUserStart(id));
            toast.success("User deleted!");
        }
    };
    useEffect(() => {
        dispatch(loadUsersStart());
    }, [dispatch]);
    useEffect(() => {
        error && toast.error(error)
    }, [error]);
    if (loading) {
        return (
            <MDBSpinner style={{ marginTop: "150px" }} role="status">
                <span className="visually-hidden">Loading...</span>
            </MDBSpinner>
        );
    };
    return (
        <MDBContainer>
            < div className="container" style={{ marginTop: "150px" }
            }>
                <MDBTable>
                    <MDBTableHead dark>
                        <tr>
                            <th scope='col'>No.</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Email</th>
                            <th scope='col'>Phone</th>
                            <th scope='col'>Address</th>
                            <th scope='col'>Status</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </MDBTableHead>
                    {users &&
                        users.map((user, index) => (
                            <MDBTableBody key={user.id}>
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.address}</td>
                                    <td>{user.status}</td>
                                    <td>
                                        <MDBBtn className='m-1'
                                            tag="a"
                                            color="none"
                                            onClick={() => handleDelete(user.id)}
                                        >
                                            <MDBTooltip title="Delete" tag="a">
                                                <MDBIcon
                                                    fas
                                                    icon="trash"
                                                    style={{ color: "#dd4b39" }}
                                                    size="lg"
                                                />
                                            </MDBTooltip>
                                        </MDBBtn>
                                        <MDBBtn className='m-1'
                                            tag="a"
                                            color="none"
                                            onClick={() => navigate(`/editUser/${user.id}`)}
                                        >
                                            <MDBTooltip title="Edit" tag="a">
                                                <MDBIcon
                                                    fas
                                                    icon="pen"
                                                    style={{ color: "#55acee", marginLeft: "5px" }}
                                                    size="lg"
                                                />
                                            </MDBTooltip>
                                        </MDBBtn>
                                        <MDBBtn className='m-1'
                                            tag="a"
                                            color="none"
                                            onClick={() => navigate(`/userInfo/${user.id}`)}
                                        >
                                            <MDBTooltip title="View" tag="a">
                                                <MDBIcon
                                                    fas
                                                    icon="eye"
                                                    style={{ color: "#3b5998", marginLeft: "5px" }}
                                                    size="lg"
                                                />
                                            </MDBTooltip>
                                        </MDBBtn>
                                    </td>
                                </tr>
                            </MDBTableBody>
                        ))
                    }
                </MDBTable>
            </div >
            <MDBRow>
                <MDBCol size="8">
                    <h5>Sort By:</h5>
                    <select style={{ width: "50%", borderRadius: "2px", height: "35px" }}
                        value={sortValue}
                        onChange={onSortChange}
                    >
                        <option>Please Select Value</option>
                        {sortOption.map((item, index) => (
                            <option key={index} value={item.toLowerCase()}>{item}</option>
                        ))}
                    </select>
                </MDBCol>
                <MDBCol size="4">
                    <h5>Filter By Status:</h5>
                    <MDBBtnGroup>
                        <MDBBtn color='success' onClick={() => onFilterChange("Active")}>Active</MDBBtn>
                        <MDBBtn color='danger' onClick={() => onFilterChange("Inactive")} style={{ marginLeft: '5px' }}>Inactive</MDBBtn>
                    </MDBBtnGroup>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default Home;