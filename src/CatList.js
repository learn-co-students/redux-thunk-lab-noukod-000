import React,{ Component } from 'react';

const CatList=({ catPics })=>{
    
    return(
        <div>
            {catPics.map((catPic,idx)=><img key={idx} src={catPic.url}/>)}
        </div>
    )
}

export default CatList;