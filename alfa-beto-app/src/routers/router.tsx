import React from "react"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import { PATHS } from "../constants"
import { InitialSelection } from "../pages"

export const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.initialSelection} element={<InitialSelection />} />
      </Routes>
    </BrowserRouter>
  )
}
