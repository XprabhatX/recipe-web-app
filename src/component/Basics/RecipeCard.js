import React from 'react'
import { useState } from 'react'
import { useLocation, link, Link } from 'react-router-dom'
import Menu from './menuApi'

const RecipeCard = () => {
  const foodName = useLocation().pathname.replace('/recipe/', '').replace('%20', ' ')
  const heading = foodName.charAt(0).toUpperCase() + foodName.substring(1)
  console.log(heading)
  const [menuData, setMenuData] = useState(Menu)
  return (
    <>
        <div className="recipe-header">
        <Link to='/'><div className="back-btn"><h3>back to Catalogue</h3></div></Link>
        <div className='recipe-heading'><h1>{heading} Recipe</h1></div>
        </div>

        {menuData.map((curElem) => {

          const { id, name, category, image, description,recipe } = curElem
            if (name === foodName) {return (
              <>
                <div className='recipe-desc'>
                  {description}
                </div>
                <div className='recipe-img'><img src={image} alt="cant find image" /></div>
                <div className="recipe-container" id={name + 'Recipe'}>
                  <pre>{recipe}</pre>
                </div>
              </>
          )}
          })}
    </>
  )
}

export default RecipeCard