import { Route, Routes, BrowserRouter } from "react-router-dom"
import { PATHS } from "../constants"
import {
  Home,
  InitialSelection,
  Login,
  NotFound,
  ResponsibleGroups,
  ResponsibleRegistration,
} from "../pages"
import { ProtectedRoute } from "./protected-route"
import { ToastContainer } from "react-toastify"

const renderToastContainer = () => {
  return (
    <ToastContainer
      rtl={false}
      limit={1}
      position={"top-right"}
      autoClose={5000}
      draggable={false}
      closeOnClick={false}
      newestOnTop
      pauseOnHover
    />
  )
}

export const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={PATHS.login}
          element={
            <>
              {renderToastContainer()}
              <Login />
            </>
          }
        />
        <Route path={PATHS.initialSelection} element={<InitialSelection />} />
        <Route
          path={PATHS.responsibleRegistration}
          element={
            <>
              {renderToastContainer()}
              <ResponsibleRegistration />
            </>
          }
        />
        <Route
          path={PATHS.responsibleHome}
          element={
            <ProtectedRoute>
              <>
                {renderToastContainer()}
                <Home />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path={PATHS.responsibleGroups}
          element={
            <ProtectedRoute>
              <>
                {renderToastContainer()}
                <ResponsibleGroups />
              </>
            </ProtectedRoute>
          }
        />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
