import Image from 'next/image'

import styles from './Loading.module.css'

export const Loading = () => {
  return (
    <div className={styles.loading}>
      <Image src="/spinner.gif" alt="loading" width={32} height={32} />
    </div>
  )
}
