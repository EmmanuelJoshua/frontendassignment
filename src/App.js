import React, { Component } from 'react';
import { Container } from 'react-bootstrap'

// import Pagination from './components/Pagination'
import Search from './components/Search/Search'
import './App.css';
import Tables from './components/Tables/Tables';

class App extends Component {

  constructor() {
    super()
    this.state = {
      data: {},
      searchfield: ''
    };
    this.getFact = this.getFact.bind(this);
  }

  componentDidMount() {
    this.getFact();
  }

  getFact() {
    fetch("https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json")
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data,
        })
      })
      .catch(err => { console.log(err); });
  }

  onSearch = (value) => {
    console.log(value)
    this.setState({ searchfield: value })
  }

  render() {
    const { data, searchfield } = this.state;
    var filteredData = [];

    if (data && data[0]) {
      filteredData = data.filter(element => {
        return element.first_name.toLowerCase().includes(searchfield.toLowerCase()) || element.last_name.toLowerCase().includes(searchfield.toLowerCase());
      })
    } else {
      console.log('nothing')
    }


    return (
      <div className="App">
        <Container fluid='true' className='App-Header d-flex align-items-center'>
          <div className='mr-auto pl-3 pt-3'>
            <p>Users</p>
          </div>
          <div>
            <Search onSearch={this.onSearch} />
          </div>
        </Container>
        <Tables data={filteredData} />
        {/* <Pagination totalRecords={30} pageLimit={18} pageNeighbours={1} /> */}
      </div>
    );
  }
}

export default App;
