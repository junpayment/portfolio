import * as React from 'react'
import { Link } from 'react-router-dom'

type Props = {}
type Func = React.FunctionComponent<Props>

export const Navbar: Func = (props) => {
  return (
    <>
      <div>
        header
      </div>
      <Link to="/">Home</Link><br/>
      <Link to="/works">WORKS</Link><br/>
      <Link to="/profile">PROFILE</Link><br/>
      <Link to="/skills">SKILLS</Link>
      <hr/>
    </>
  )
}
