import React from 'react'
import { gridtwo } from '../../../data'

export const GridTwo = () => {
  return (
    <div className='gridcontainer'>
        <div className='gridtwo'>
        <a  href={gridtwo[0].insta}  className = 'gridtwoitem1'
            rel="noreferrer"target="_blank">
            <img src={gridtwo[0].image} alt='' /></a>

        <a  href={gridtwo[1].insta}  className = 'gridtwoitem2'
            rel="noreferrer"target="_blank">
            <img src={gridtwo[1].image} alt='' /></a>
        <a  href={gridtwo[2].insta}  className = 'gridtwoitem3'
        rel="noreferrer"target="_blank">
        <img src={gridtwo[2].image} alt='' /></a>

        
    </div>
    </div>
  )
}
