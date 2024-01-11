import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div>
      <h1>
        Page not found
      </h1>
      <p>The page you are looking does not exist.</p>
      <button type='button'><Link to="/">Go to the home page</Link></button>
    </div>
  )
}

export { PageNotFound }