import React, { useEffect, useState } from 'react'
import { getData } from '../Api/services';
import { Redirect } from 'react-router-dom';

const BlogDetails = (props) => {
    const [blog, setBlog] = useState({});
    if (!localStorage.getItem('user')) return <Redirect to='/login' />
    useEffect(() => {
        let id = props.match.params.blogId;
        getData(`posts/${id}`).then((res) => {
            setBlog(res)
        })
    }, [])

    return (
        <div className="panel panel-default margin-t border-r-5">
            <div className="panel-heading padding-10 border-t-rl">{blog.title}</div>
            <div className="panel-body padding-10">
                {blog.body}
            </div>
        </div>
    )
}

export default BlogDetails
