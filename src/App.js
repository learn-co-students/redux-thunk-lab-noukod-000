import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap'
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions';
import CatList from './CatList';

class App extends Component {   

  componentDidMount(){
    this.props.fetchCats()
  }
  
  render() {
    
    let whatToRender="Loading...";
    if(!this.props.loading){
      whatToRender=<CatList catPics={this.props.catPics}/>
    }

    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              { whatToRender }
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  console.log("THIS IS THE STATE:"+JSON.stringify(state));
  return {
    loading:state.cats.loading,
    catPics:state.cats.pictures
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    fetchCats:()=>dispatch(fetchCats())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)

