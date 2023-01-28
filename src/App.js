import React from 'react'
import Restaurant from './component/Basics/Restaurant'
import RecipeCard from './component/Basics/RecipeCard'
import { BrowserRouter, Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Restaurant />}></Route>
        <Route path='recipe' element={<RecipeCard />}>
          <Route path='*' element={<RecipeCard />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App