import React, { Fragment } from "react";
import { Link } from "react-router-dom"
const Post = ({ blog }) => {
    return (
        <div>
            <Fragment>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title"><Link to={`posts/${blog.id}`}>{blog.title}</Link></h5>
                    </div>
                </div>
            </Fragment>
        </div>
    )
}

export default Post;
