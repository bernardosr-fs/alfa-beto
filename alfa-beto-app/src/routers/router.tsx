import { Route, Routes, BrowserRouter } from "react-router-dom"
import { PATHS } from "../constants"
import {
  ResponsibleHome,
  InitialSelection,
  Login,
  NotFound,
  ResponsibleGroups,
  ResponsibleRegistration,
  ResponsibleGroupDetails,
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
                <ResponsibleHome />
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
        <Route
          path={PATHS.groupDetails}
          element={
            <ProtectedRoute>
              <>
                {renderToastContainer()}
                <ResponsibleGroupDetails />
              </>
            </ProtectedRoute>
          }
        />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
