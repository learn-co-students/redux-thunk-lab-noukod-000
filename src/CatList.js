//My Code
import React, { Component } from 'react';

class CatList extends Component {
  render() {
    console.log("CatList", this.props.catPics)
    const cats = this.props.catPics.map(cat => <img src={ cat.url } alt="catPics" key={ cat.id } />)
    return (
      <div>
        {cats}
      </div>
    )
  }
}
export default CatList
