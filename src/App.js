import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Navbar} from 'react-bootstrap'
import CatList from './CatList'
import { fetchCats } from './actions/catActions'

class App extends Component {

  componentDidMount() {
    // fetch the cats
    this.props.fetchCats();
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
		<CatList catPics={this.props.catPics} />
      </div>
    );
  }
}


export default connect(({ cats }) => ({ catPics }), { fetchCats })(App)
