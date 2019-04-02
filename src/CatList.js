import React from 'react'

const CatList = ({catPics}) => {
  function renderListCats() {

    return catPics.map((catPic, idx) => {
      return (
        <div key={idx} >

            <img src={catPic.url} className="thumbnail responsive" style={{height: '220px', width: '221px', margin: 'auto'}} alt="catpic"/>
          
        </div>
      )
    })
  }
  return (
    <div>
      {renderListCats()}
    </div>
  )
}

export default CatList