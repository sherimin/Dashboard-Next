import Image from 'next/image'
import styles from './rightbar.module.css'

const RightBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          {/* <Image src="/astronaut.png" alt="background" fill /> */}
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default RightBar