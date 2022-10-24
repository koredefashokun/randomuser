import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <p>This route does not exist.</p>
      <Link to='/users'>Return to /users</Link>
    </div>
  )
}

export default NotFound