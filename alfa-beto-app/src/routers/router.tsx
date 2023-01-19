import { Route, Routes, BrowserRouter } from "react-router-dom"
import { PATHS } from "../constants"
import {
  ResponsibleHome,
  InitialSelection,
  ResponsibleLogin,
  NotFound,
  ResponsibleGroups,
  ResponsibleRegistration,
  ResponsibleGroupDetails,
  ResponsibleStudents,
  StudentProfile,
  StudentRegistration,
  StudentLogin,
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
        <Route path={PATHS.initialSelection} element={<InitialSelection />} />
        <Route
          path={PATHS.responsibleLogin}
          element={
            <>
              {renderToastContainer()}
              <ResponsibleLogin />
            </>
          }
        />
        <Route
          path={PATHS.studentLogin}
          element={
            <>
              {renderToastContainer()}
              <StudentLogin />
            </>
          }
        />
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
        <Route
          path={PATHS.bondedStudentsFromResponsible}
          element={
            <ProtectedRoute>
              <>
                {renderToastContainer()}
                <ResponsibleStudents />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path={PATHS.studentProfile}
          element={
            <ProtectedRoute>
              <>
                {renderToastContainer()}
                <StudentProfile />
              </>
            </ProtectedRoute>
          }
        />
        <Route path={"*"} element={<NotFound />} />
        <Route
          path={PATHS.studentRegistration}
          element={
            <ProtectedRoute>
              <>
                {renderToastContainer()}
                <StudentRegistration />
              </>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
