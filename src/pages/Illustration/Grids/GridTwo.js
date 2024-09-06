import React from 'react'
import { gridtwo } from '../../../data'
import { gridthree } from '../../../data'
import { gridfour } from '../../../data'

const imagesColumn1 = ['./assets/kindred2.png','./assets/ganyu2 no bord.jpg','./marcille bw.png', './assets/view.jpg', './assets/winter1.png'];
const imagesColumn2 = ['./assets/miku.png','./assets/layla.png','./assets/study 2 han.png', './assets/lumine.png', './assets/view.jpg'];
const imagesColumn3 = ['./assets/studyu_4.png','./assets/fish_parade.png','./assets/kindred.png','./assets/lucina2.png', './assets/winter_girl.png'];

export const GridThree = () => {
  return (
    <div className='gridcontainer' id='gallery'>
        <div className="grid-threecol">
            <div className="grid-threecolitem1" rel="noreferrer"target="_blank">
                {imagesColumn1.map((image, index) => (
                <img key={index} src={image} alt={`Image 1-${index + 1}`} className="image-item" />
                ))}
            </div>
            <div className="grid-threecolitem2" rel="noreferrer"target="_blank">
                {imagesColumn2.map((image, index) => (
                <img key={index} src={image} alt={`Image 2-${index + 1}`} className="image-item" />
                ))}
            </div>
            <div className="grid-threecolitem3" rel="noreferrer"target="_blank">
                {imagesColumn3.map((image, index) => (
                <img key={index} src={image} alt={`Image 3-${index + 1}`} className="image-item" />
                ))}
        </div>

    </div>
    </div>
  )
}




