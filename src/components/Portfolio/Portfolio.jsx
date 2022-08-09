import React, {useEffect, useState} from 'react'
import './portfolio.scss'
import PortfolioList from "../PortfolioList/PortfolioList";
import { featuredPortfolio, pythonPortfolio, reactPortfolio } from '../../data';

const Portfolio = () => {
  const [selected, setSelected] = useState('featured');
  const [data, setData] = useState([])

  const list = [
      {
        id: 'featured',
        title: "Featured",
      },
      {
        id: 'python',
        title: "Python",
      },
      {
        id: 'react',
        title: "React",
      }
  ]

  useEffect(() => {

    switch(selected) {
      case "featured":
          setData(featuredPortfolio);
          break;
      case "python":
          setData(pythonPortfolio);
          break;
      case "react":
          setData(reactPortfolio);
          break;
      default:
          setData(featuredPortfolio)
    }

  }, [selected])

  return (
    <div className='portfolio' id='portfolio'>
     
        <div className="upper">
            <h1>Portfolio</h1>
            <p> More projects are in the works! </p>
            <ul>
              {list.map(item => (
                <PortfolioList title = {item.title} active={selected ===item.id} setSelected={setSelected} id={item.id}/>
              ))}
            </ul>
      
        </div>
      

        <div className="container">
            {data.map((d) => (
            
            
          <div className="item">
              <img src={d.image} alt='' />
              <h3>{d.title}</h3>
              <a href={d.github} target="_blank">GitHub</a>
          </div>
          ))}
        
        </div>
   
        
    </div>
  )
}

export default Portfolio