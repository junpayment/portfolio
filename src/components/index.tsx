import * as React from 'react'
import styles from './index.css'
import { Navbar } from './index/navbar'
import { Profile } from './index/profile'
import { Works } from './index/works'
import { Skills } from './index/skills'
import { BrowserRouter, Switch, Route, useParams, useLocation } from 'react-router-dom'
import { NotFound } from './index/notFound'
import { useEffect } from 'react'

type Props = {}
type Func = React.FunctionComponent<Props>

const Container: Func = (props) => {
  const {type} = useParams<{
    type: string,
  }>()
  const pathname = useLocation()
  useEffect(() => {
    const elem = document.getElementById(type)
    if (!!elem) {
      elem.scrollIntoView({block: "start", inline: "nearest", behavior: 'smooth'})
    }
  }, [pathname])
  return (
    <>
      <Navbar/>
      <Profile id="profile"/>
      <Skills id="skills"/>
      <Works id="works"/>
    </>
  )
}

export const Index: Func = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Container}/>
        <Route exact path="/:type" component={Container}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  )
}
