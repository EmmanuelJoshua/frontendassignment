import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { ArrowLeftCircle } from 'react-feather'
import { Link } from 'react-router-dom'
import './Detail.css'

class Detail extends Component {

    render() {
        // const { params } = this.props.match
        const { dataProps } = this.props.location
        console.log(dataProps)
        return (
            <div>
                <Container fluid='true' className='App-Header d-flex align-items-center'>
                    <div className='d-inline-flex mr-auto pl-3 pt-3'>
                        <Link to='/users' ><ArrowLeftCircle className=' mr-2 Icon' size='30px' /></Link>
                        <p>Details :  {dataProps.first_name} {dataProps.last_name}</p>
                    </div>
                    <div>
                    </div>
                </Container>
                <Container className='mt-3'>
                    <div className='d-flex align-items-center'>
                        <p>First Name:</p><p className='ml-auto font-weight-bold'>{dataProps.first_name}</p>
                    </div>
                    <hr />
                    <div className='d-flex align-items-center mt-3'>
                        <p>Last Name:</p><p className='ml-auto font-weight-bold'>{dataProps.last_name}</p>
                    </div>
                    <hr />
                    <div className='d-flex align-items-center mt-3'>
                        <p>Company Name:</p><p className='ml-auto font-weight-bold'>{dataProps.company_name}</p>
                    </div>
                    <hr />
                    <div className='d-flex align-items-center mt-3'>
                        <p>City:</p><p className='ml-auto font-weight-bold'>{dataProps.city}</p>
                    </div>
                    <hr />
                    <div className='d-flex align-items-center mt-3'>
                        <p>State:</p><p className='ml-auto font-weight-bold'>{dataProps.state}</p>
                    </div>
                    <hr />
                    <div className='d-flex align-items-center mt-3'>
                        <p>Zip Code:</p><p className='ml-auto font-weight-bold'>{dataProps.zip}</p>
                    </div>
                    <hr />
                    <div className='d-flex align-items-center mt-3'>
                        <p>Email:</p><p className='ml-auto font-weight-bold'>{dataProps.email}</p>
                    </div>
                    <hr />
                    <div className='d-flex align-items-center mt-3'>
                        <p>Web:</p><p className='ml-auto font-weight-bold'>{dataProps.web}</p>
                    </div>
                    <hr />
                    <div className='d-flex align-items-center mt-3'>
                        <p>Age:</p><p className='ml-auto font-weight-bold'>{dataProps.age}</p>
                    </div>
                    <hr />
                </Container>
            </div>
        );
    }
}

export default Detail;