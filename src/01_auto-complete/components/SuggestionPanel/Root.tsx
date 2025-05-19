import { PropsWithChildren } from 'react'

import styles from './Root.module.css'

export const Root = ({ children }: PropsWithChildren) => {
  return <div className={styles.container}>{children}</div>
}
