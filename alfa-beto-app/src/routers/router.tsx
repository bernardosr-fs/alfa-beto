import { Route, Routes, BrowserRouter } from "react-router-dom"
import { PATHS } from "../constants"
import {
  InitialSelection,
  Login,
  NotFound,
  ResponsibleRegistration,
} from "../pages"

export const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.login} element={<Login />} />
        <Route path={PATHS.initialSelection} element={<InitialSelection />} />
        <Route
          path={PATHS.responsibleRegistration}
          element={<ResponsibleRegistration />}
        />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
