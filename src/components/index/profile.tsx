import * as React from 'react'

type Props = {
  id: string
}
type Func = React.FunctionComponent<Props>

export const Profile: Func = (props) => {
  return (
    <>
      <div id={props.id}>
        profile
      </div>
    </>
  )
}
