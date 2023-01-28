import React from 'react'
import { Link } from 'react-router-dom'

const MenuCard = ({ menuData}) => {
  return (
    <>
        <section className="main-card--cointainer">
        {menuData.map((curElem) => {

            const { id, name, category, image, description } = curElem

            return (
                <>
                    <div className="card-container" key={id}>
                        
                        <div className="card">
                            <div className="card-body">
                                <span className="card-number card-circle subtle">{id}</span>
                                <span className="card-author subtle">{category}</span>
                                <h2 className="card-title">{name}</h2>
                                <span className="card-description subtle">{description}</span>
                                <Link to={'recipe/' + name}><div className="card-read">Read</div></Link>
                            </div>
                            <img src={image} alt="" />
                        </div>
                    </div> 
                </>
            )
        })}
        </section>
    </>
  )
}

export default MenuCard