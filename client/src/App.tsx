import React from 'react'
import User from './components/User'
import { Route, Routes } from 'react-router-dom'
import ListPost from './components/BT/ListPost'
import AddPost from './components/BT/AddPost'

export default function App() {
  return (
    <div>
      <Routes>
          
          <Route path='/' element={<ListPost/>}>
          <Route path='/addPost' element={<AddPost/>}/>
          </Route>
      </Routes>
    </div>
  )
}
