import React from 'react'
import PropTypes from "prop-types";

function NavBar(props) {
  return (
    <div>
      <h6>User function App</h6>
      <h3>{props.title}</h3>
    </div>
  )
}
NavBar.propTypes = {
  title : PropTypes.string.isRequired
}

NavBar.defaultProps = {
  title : "Default App"
}
export default NavBar;