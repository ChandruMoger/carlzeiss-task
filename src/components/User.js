import React, { Fragment } from "react";

const User = ({ user }) => {
    return (
        <Fragment>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                </div>
            </div>
        </Fragment>
    )
}

export default User;
