import React from 'react';
import {MDBTypography} from 'mdb-react-ui-kit';

const About = () => {
    return (
        <div style={{marginTop: "100px"}}>
            <MDBTypography note noteColor="primary">
                This is a full CRUD React Application, using Redux-Saga to perform. 
            </MDBTypography>
        </div>
    );
}

export default About;