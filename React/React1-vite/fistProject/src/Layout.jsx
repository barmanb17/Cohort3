import React from 'react'

const Layout = (props) => {
    const Header = props.Header;
    const Footer = props.Footer;
  return (
    <div>
        <Header/>
        <p>Learning React Props</p>
        <Footer/>
    </div>
  )
}

export default Layout