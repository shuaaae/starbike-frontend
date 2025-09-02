import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Header from './components/Header'
import Home from './pages/Home'
import Services from './pages/Services'
import Login from './pages/Login'
import RouteGuard from './components/RouteGuard'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen">
          <Routes>
            <Route path="/login" element={
              <RouteGuard requireAuth={false}>
                <Login />
              </RouteGuard>
            } />
            <Route path="/" element={
              <RouteGuard requireAuth={true}>
                <>
                  <Header />
                  <Home />
                </>
              </RouteGuard>
            } />
            <Route path="/services" element={
              <RouteGuard requireAuth={true}>
                <>
                  <Header />
                  <Services />
                </>
              </RouteGuard>
            } />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
