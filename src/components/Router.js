import React from 'react'
import {
  Routes,
  Route,
  Navigate} from "react-router-dom";
import Results from './Results';
const Router = () => {
  return (
    <div className="">
      <Routes>
        <Route path={'/'}>
          <Route index element={<Navigate to={'search'} replace />} />
          <Route path={'search'} element={<Results />} />
          <Route path={'image'} element={<Results />} />
          <Route path={'news'} element={<Results />} />
          <Route path={'video'} element={<Results />} />
        </Route>
      </Routes>
    </div>
  )
}

export default Router