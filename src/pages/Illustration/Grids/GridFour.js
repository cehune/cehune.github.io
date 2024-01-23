import { gridfour } from "../../../data"

export const GridFour = () => {
    return (
      <div className='gridcontainer' id='gallery'>
          <div className='gridfour'>
          <a  href={gridfour[0].insta}  className = 'gridfourlitem1'
              rel="noreferrer"target="_blank">
              <img src={gridfour[0].image} alt='' /></a>
  
          <a  href={gridfour[1].insta}  className = 'gridfourcolitem2'
              rel="noreferrer"target="_blank">
              <img src={gridfour[1].image} alt='' /></a>

      </div>
      </div>
    )
  }