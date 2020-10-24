import React, { Component } from 'react'
import { ChevronDown, ChevronUp } from 'react-feather'

class SortItem extends Component {
    constructor() {
        super()
        this.state = {
            isAscending: true
        }
        this.onSort = this.onSort.bind(this);
    }

    onSort() {
        this.setState(prevState => {
            return {
                isAscending: !prevState.isAscending
            }
        });
        this.props.sortField(this.props.fieldName, this.state.isAscending);
    }

    render() {
        return (
            <span className='Cursor-Pointer' onClick={this.onSort}>
                {
                    this.state.isAscending ? <ChevronDown size='20px' /> : <ChevronUp size='20px' />
                }
            </span>
        )
    }
}

export default SortItem;
