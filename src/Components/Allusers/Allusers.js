import React from 'react';
import { useEffect, useState } from 'react';
import ReadUser from '../ReadUsers/ReadUser';
import './Allusers.css';


const Allusers = () => {
    let [users , setUsers] = useState([]);

    useEffect( () => {
        fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(userData => setUsers(userData.results))
    }, []);

    return(
        <div className='AllUsers'>
            {users.map(user =>  <ReadUser userInfo={user} key={user.login.uuid}></ReadUser> )}
        </div>
    )
};

export default Allusers;