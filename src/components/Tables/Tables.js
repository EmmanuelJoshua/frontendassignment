import React, { Component } from 'react'
import { Table, Container } from 'react-bootstrap'
import SortItem from '../SortItem/SortItem'
import TableRows from '../TableRows/TableRows'
import './Tables.css'

class Tables extends Component {

    constructor() {
        super()
        this.state = {
            contents: [],
            currentContents: 1,
            contentPerPage: 15
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.data !== this.props.data) {
            this.setState({
                contents: this.props.data
            });

        } else {
            console.log('nothing')
        }
    }

    handleClick(event) {
        this.setState({
            currentContents: Number(event.target.id)
        })
    }

    sortField = (val, isAscending) => {
        switch (val) {
            case 'firstname':
                this.setState(prevState => {
                    return {
                        contents: (isAscending) ? prevState.contents.sort((a, b) => a.first_name.localeCompare(b.first_name)) : prevState.contents.sort((a, b) => b.first_name.localeCompare(a.first_name))
                    };
                })
                break;
            case 'lastname':
                this.setState(prevState => {
                    return {
                        contents: (isAscending) ? prevState.contents.sort((a, b) => a.last_name.localeCompare(b.last_name)) : prevState.contents.sort((a, b) => b.last_name.localeCompare(a.last_name))
                    };
                })
                break;
            case 'age':
                this.setState(prevState => {
                    return {
                        contents: (isAscending) ? prevState.contents.sort((a, b) => a.age - b.age) : prevState.contents.sort((a, b) => b.age - a.age)
                    };
                })
                break;
            case 'email':
                this.setState(prevState => {
                    return {
                        contents: (isAscending) ? prevState.contents.sort((a, b) => a.email.localeCompare(b.email)) : prevState.contents.sort((a, b) => b.email.localeCompare(a.email))
                    };
                })
                break;
            case 'website':
                this.setState(prevState => {
                    return {
                        contents: (isAscending) ? prevState.contents.sort((a, b) => a.web.localeCompare(b.web)) : prevState.contents.sort((a, b) => b.web.localeCompare(a.web))
                    };
                })
                break;
            default:
                console.log('Not found')
        }
        console.log(val, 'is ascending: ', isAscending)
    }

    render() {
        const { contents, currentContents, contentPerPage } = this.state;

        const indexOfLastItem = currentContents * contentPerPage;
        const indexOfFirstItem = indexOfLastItem - contentPerPage;
        const currentItem = contents.slice(indexOfFirstItem, indexOfLastItem);

        const renderData = currentItem.map(element => {
            return <TableRows key={element.id} element={element} />
        });

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(contents.length / contentPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                (this.state.currentContents === number) ?
                    <li
                        key={number}
                        id={number}
                        onClick={this.handleClick}
                    >
                        <p className='Active text-center'> {number}  </p>
                    </li> : <li
                        key={number}
                        id={number}
                        onClick={this.handleClick}
                    >
                        {number}
                    </li>
            );
        })

        return (
            <Container className='Table-Container'>
                <Table responsive>
                    <thead>
                        <tr>
                            <th> First Name <SortItem fieldName={'firstname'} sortField={this.sortField} /> </th>
                            <th> Last Name <SortItem fieldName={'lastname'} sortField={this.sortField} /> </th>
                            <th> Age <SortItem fieldName={'age'} sortField={this.sortField} /> </th>
                            <th> Email <SortItem fieldName={'email'} sortField={this.sortField} /> </th>
                            <th> Website <SortItem fieldName={'website'} sortField={this.sortField} /> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderData}
                    </tbody>
                </Table>
                <div className='bg-dark rounded pt-3 mt-3 mb-3 Main-Num'>
                    <ul className='Page-Numbers'>
                        {renderPageNumbers}
                    </ul>
                </div>

            </Container>

        );
    }
}

export default Tables;