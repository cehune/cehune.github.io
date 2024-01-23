import { gridfive } from "../../../data"

export const GridFive = () => {
    return (
      <div className='gridcontainer' id='gallery'>
          <div className='gridfive'>
          <a  href={gridfive[0].insta}  className = 'gridfivelitem1'
              rel="noreferrer"target="_blank">
              <img src={gridfive[0].image} alt='' /></a>
  
          <a  href={gridfive[1].insta}  className = 'gridfiveitem2'
              rel="noreferrer"target="_blank">
              <img src={gridfive[1].image} alt='' /></a>

      </div>
      </div>
    )
  }