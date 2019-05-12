import React from 'react'

export default const CatList = ({catPics}) => {
  function renderCats() {

    return catPics.map(catPic => <img src={catPic.url} alt={catPic.url}/>)
  }
  return (
    <div>
      {renderCats()}
    </div>
  )
}
