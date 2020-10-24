import React from 'react'
import { Link } from 'react-router-dom'

const TableRows = ({ element }) => {
    return (
        <tr>
            <td><Link to={{
                pathname: `/users/${element.id}`,
                dataProps: element
            }}>{element.first_name}</Link></td>
            <td>{element.last_name}</td>
            <td>{element.age}</td>
            <td>{element.email}</td>
            <td><a href={element.web} target='_blank' rel="noopener noreferrer">{element.web}</a></td>
        </tr>
    );
}

export default TableRows;