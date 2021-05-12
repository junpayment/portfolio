import * as React from 'react'
import styles from "./root.css"

type Props = {}
type Func = React.FunctionComponent<Props>

export const Root: Func = (props) => {
  return (
    <div className={styles.hoge}>
      root
    </div>
  )
}
