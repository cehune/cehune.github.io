import React from 'react'
import { gridtwo } from '../../../data'
import { gridthree } from '../../../data'
import { gridfour } from '../../../data'

export const GridTwo = () => {
  return (
    <div className='gridcontainer' id='gallery'>
        <div className='grid-threecol'>
        <a  href={gridtwo[0].insta}  className = 'grid-threecolitem1'
            rel="noreferrer"target="_blank">
            <img src={gridtwo[0].image} alt='' /></a>

        <a  href={gridtwo[1].insta}  className = 'grid-threecolitem2'
            rel="noreferrer"target="_blank">
            <img src={gridtwo[1].image} alt='' /></a>
        <a  href={gridtwo[2].insta}  className = 'grid-threecolitem3'
        rel="noreferrer"target="_blank">
        <img src={gridtwo[2].image} alt='' /></a>

        
    </div>
    </div>
  )
}
export const GridThree = () => {
  return (
    <div className='gridcontainer' id='gallery'>
        <div className='grid-threecol'>
        <a  href={gridthree[0].insta}  className = 'grid-threecolitem1'
            rel="noreferrer"target="_blank">
            <img src={gridthree[0].image} alt='' /></a>

        <a  href={gridthree[1].insta}  className = 'grid-threecolitem2'
            rel="noreferrer"target="_blank">
            <img src={gridthree[1].image} alt='' /></a>
        <a  href={gridthree[2].insta}  className = 'grid-threecolitem3'
        rel="noreferrer"target="_blank">
        <img src={gridthree[2].image} alt='' /></a>

        
    </div>
    </div>
  )
}




