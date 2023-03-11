import React from 'react'
import Header from './HeaderBar'


const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout