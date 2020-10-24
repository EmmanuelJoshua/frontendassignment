import React, { Component } from 'react'
import { Button, InputGroup, FormControl } from 'react-bootstrap'
import './Search.css'

class Search extends Component {
    constructor() {
        super()
        this.searchfield = React.createRef();
    }

    render() {
        return (
            <div className='d-flex justify-content-center align-items-center pl-3 pr-3'>
                <InputGroup>
                    <FormControl
                        className='UrlText'
                        ref={this.searchfield}
                        placeholder='Type in first or last name'
                        aria-label='Type in first or last name'
                        aria-describedby='basic-addon2'
                    />
                    <InputGroup.Append>
                        <Button variant='outline-secondary' className='Search' onClick={() => this.props.onSearch(this.searchfield.current.value)}>
                            Search
                    </Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        );
    }
}

export default Search;