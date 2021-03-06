import React from 'react';
import PriceInfo from '../../../data/PriceInfo.json';

const PriceCard = () => {
  return (
    <>
      <div className="price__content flex">
        {
          PriceInfo.map((item, index) => {
            return (
              <div className="price__card" key={index}>
                <div className="topbtn">
                  <button className='btn3'>{item.best}</button>
                </div>
                <h3>{item.plan}</h3>
                <h1>
                  <span>$</span>{item.price}
                </h1>
                <p>{item.ptext}</p>

                <ul>
                  {
                    item.list.map((val, index) => {
                      const { icon, text, change } = val;
                      return (
                        <li key={index}>
                          <label style={{
                            background: change === "color" ? "#dc35451d" : "#27ae601f",
                            color: change === "color" ? "#dc3848" : "#27ae60"
                          }}>
                            <i className={icon}></i>
                          </label>
                          {text}
                        </li>
                      )
                    })
                  }
                </ul>

                <button className='btn5'
                  style={{
                    background: item.plan === "Standard" ? "#27ae60" : "#fff",
                    color: item.plan === "Standard" ? "#fff" : "#27ae60"
                  }}
                >
                  Start {item.plan}
                </button>

              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default PriceCard