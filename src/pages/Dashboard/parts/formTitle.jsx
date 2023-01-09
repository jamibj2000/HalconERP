import React from 'react'
import { Link } from 'react-router-dom'

const FormTitle = () => {
  return (
    <div className="col-md-12 d-flex form-title-component" style={{backgroundColor: "#1d3660"}}>
        <ul className="breadcrumb p-2">
            <li className="breadcrumb-item ">
            <Link to={"index.html"} className="text-light"> Dashboard </Link>
            </li>
            <li className="breadcrumb-item active" style={{color: "#00a3cc"}}> Account </li>
        </ul>
    </div>
  )
}

export default FormTitle