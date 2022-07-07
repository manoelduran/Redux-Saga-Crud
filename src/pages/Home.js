import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { loadUsersStart } from '../redux/actions';

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadUsersStart());
    },[dispatch])
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

export default Home;