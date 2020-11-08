import React, { useState, useEffect } from "react";
import { getData } from '../Api/services';
import User from './User';
import Input from './Input';
import { Redirect } from 'react-router-dom';

const Users = () => {
    if (!localStorage.getItem('user')) return <Redirect to='/login' />
    let [users, setUsers] = useState([]);
    let [search, setSearch] = useState('');

    useEffect(() => {
        getData('users').then((res) => {
            setUsers(res)
        })
    }, [])

    const handleChange = (searchStr) => {
        setSearch(searchStr);
    }
    return (
        <div className="container">
            <h1 className="text-center">Users</h1>
            <Input onChangeHandle={handleChange} placeholder = "user name"></Input>
            {
               users.length  > 0 ? users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase())).map((user)=><User key={user.id} user={user}></User>) :
               <p>No Users Found!</p>
            }
            
        </div>
    )
}

export default Users;
