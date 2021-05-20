import * as React from 'react'
import styles from "./skill.css"

type Props = {
  id: string,
}
type Func = React.FunctionComponent<Props>

export const Works: Func = (props) => {
  return (
    <>
      <div className={styles.test} id={props.id}>
        works
      </div>
    </>
  )
}
