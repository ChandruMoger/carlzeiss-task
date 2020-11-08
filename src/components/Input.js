import React, { Fragment, useState } from 'react'

const Input = (props) => {
    const [search, setSearch] = useState('')
    const handleChange = (e) => {
        setSearch(e.target.value);
        props.onChangeHandle(e.target.value);
    }
    return (
        <Fragment>
            <input type="text" className="text-center margin-b border-n border-r" placeholder={`Search by ${props.placeholder}`} 
            value={search} onChange={(e) =>handleChange(e)}/>
        </Fragment>
    )
}

export default Input
