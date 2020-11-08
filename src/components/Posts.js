import React, { useState, useEffect} from 'react'
import { getData } from '../Api/services';
import Post from './Post';
import Input from './Input';
import { Redirect } from 'react-router-dom';

const Posts = () => {
    if (!localStorage.getItem('user')) return <Redirect to='/login' />
    let [blogs, setblogs] = useState([]);
    let [search, setSearch] = useState('');

    useEffect(() => {
        getData('posts').then((res) => {
            setblogs(res)
        })
    }, [])


    const handleChange = (searchStr) => {
        setSearch(searchStr);
    }
    return (
        <div>
            <h1 className="text-center">Posts</h1>
            <Input onChangeHandle={handleChange} placeholder = "title"></Input>
            {
               blogs.length  > 0 ? blogs.filter((user) => user.title.toLowerCase().includes(search.toLowerCase())).map((blog)=><Post key={blog.id} blog={blog}></Post>) :
               <p>No Blogs Found!</p>
            }
        </div>
    )
}

export default Posts

