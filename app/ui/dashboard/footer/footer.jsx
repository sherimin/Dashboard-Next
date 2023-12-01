import Link from 'next/link'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>Built by <Link href="mailto:sherisherilu@gmail.com"> &#x1F4E7; Sheri Lu &#x1F58B; </Link> </div>
        <div className={styles.text}> {new Date().getFullYear()} &copy; All Rights Reserved</div>
    </div>
  )
}

export default Footer