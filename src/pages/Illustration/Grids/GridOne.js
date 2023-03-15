import React from 'react'
import { gridone } from '../../../data'

export const GridOne = () => {
  return (
    <div className='gridcontainer'>
        <div className='gridone'>
        <a  href={gridone[0].insta}  className = 'gridoneitem1'
            rel="noreferrer"target="_blank">
            <img src={gridone[0].image} alt='' /></a>

        <a  href={gridone[1].insta}  className = 'gridoneitem2'
            rel="noreferrer"target="_blank">
            <img src={gridone[1].image} alt='' /></a>

        <a  href={gridone[2].insta}  className = 'gridoneitem3'
            rel="noreferrer"target="_blank">
            <img src={gridone[2].image} alt='' /></a>

        <a  href={gridone[3].insta}  className = 'gridoneitem4'
            rel="noreferrer"target="_blank">
            <img src={gridone[3].image} alt='' /></a>

        <a  href={gridone[4].insta}  className = 'gridoneitem5'
            rel="noreferrer"target="_blank">
            <img src={gridone[4].image} alt='' /></a>
    </div>
    </div>
  )
}
