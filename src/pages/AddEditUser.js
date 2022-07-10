import React, { useEffect, useState } from 'react';
import {
    MDBValidation,
    MDBInput,
    MDBBtn
} from 'mdb-react-ui-kit';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createUserStart, updateUserStart } from '../redux/actions';
import { toast } from 'react-toastify';

const initialState = {
    name: "",
    email: "",
    phone: "",
    address: "",
};

const AddEditUser = () => {
    const { id } = useParams();
    // console.log("id", typeof (id));
    const [formValue, setFormValue] = useState(initialState);
    const [editMode, setEditMode] = useState(false);
    const { name, email, phone, address } = formValue;
    const { users } = useSelector(state => state.data);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (id) {
            setEditMode(true);
            const selectedUser = users.find(user => user.id === Number(id));
            setFormValue({ ...selectedUser });
        }
    }, [users, id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name && email && phone && address && editMode) {
            dispatch(updateUserStart({ id, formValue }));
            toast.success("User Updated Successfully!");
            setEditMode(false);
            setTimeout(() => navigate("/"), 500);
            return;
        };
        dispatch(createUserStart(formValue));
        toast.success("User Added Successfully!");
        setTimeout(() => navigate("/"), 500);
    };
    const onInputChange = (event) => {
        event.preventDefault();
        let { name, value } = event.target;
        setFormValue({ ...formValue, [name]: value });

    };
    return (
        <MDBValidation
            className="row gap-3"
            style={{ marginTop: "100px" }}
            noValidate
            onSubmit={handleSubmit}
        >
            <p className='fs-2 fw-bold'>
                {editMode ? "Update User Detail" : "Add User Detail"}
            </p>
            <div style={{
                margin: "auto",
                padding: "15px",
                maxWidth: "400px",
                alignContent: "center"
            }}>
                <MDBInput
                    value={name || ""}
                    name="name"
                    type="text"
                    onChange={onInputChange}
                    required
                    label="Name"
                    validation="Please provide a name"
                    invalid
                />
                <br />
                <MDBInput
                    value={email || ""}
                    name="email"
                    type="email"
                    onChange={onInputChange}
                    required
                    label="Email"
                    validation="Please provide an email"
                    invalid
                />
                <br />
                <MDBInput
                    value={phone || ""}
                    name="phone"
                    type="number"
                    onChange={onInputChange}
                    required
                    label="Phone"
                    validation="Please provide a phone number"
                    invalid
                />
                <br />
                <MDBInput
                    value={address || ""}
                    name="address"
                    type="text"
                    onChange={onInputChange}
                    required
                    label="Address"
                    validation="Please provide an address"
                    invalid
                />
                <br />
                <div className='col-12'>
                    <MDBBtn style={{ marginRight: "10px" }}
                        type="submit">
                        {editMode ? "Update" : " Add"}
                    </MDBBtn>
                    <MDBBtn onClick={() => navigate("/")} color="danger">
                        Go Back
                    </MDBBtn>
                </div>
            </div>
        </MDBValidation>
    );
}

export default AddEditUser;