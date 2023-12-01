import Navbar from "../ui/dashboard/navbar/navbar"
import Sidebar from "../ui/dashboard/sidebar/sidebar"
import styles from "../ui/dashboard/dashboard.module.css"
import RightBar from "../ui/dashboard/rightbar/rightbar"

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
        <div className={styles.menu}>
            <Sidebar />
        </div>
        <div className={styles.contacts}>
            <Navbar />
            {children}
        </div>
        <div>
          <RightBar />
        </div>
    </div>
  )
}

export default Layout