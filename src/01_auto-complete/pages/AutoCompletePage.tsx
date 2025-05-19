'use client'

import { AutoCompleteInput } from '../components/AutoCompleteInput'
import styles from './AutoCompletePage.module.css'

export const AutoCompletePage = () => {
  return (
    <div className={styles.page}>
      <AutoCompleteInput />
    </div>
  )
}
