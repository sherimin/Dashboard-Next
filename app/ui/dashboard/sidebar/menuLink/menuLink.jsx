import Link from 'next/link'
import styles from './MenuLink.module.css'

const MenuLink = ({ item }) => {
  return (
    <Link href={item.path} className={styles.container}>
        {item.icon}
        {item.title}
    </Link>
  )
}

export default MenuLink