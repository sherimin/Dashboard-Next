import fetchUsers from "@/app/lib/data"
import Pagination from "@/app/ui/dashboard/pagination/pagination"
import Search from "@/app/ui/dashboard/search/search"
import styles from "@/app/ui/dashboard/users/users.module.css"
import Image from "next/image"
import Link from "next/link"

const UsersPage = async () => {

  //test data fetching
  const users = await fetchUsers();

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user" />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>
            Add User
          </button>
        </Link>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
                      <tr key={user.id}>
                      <td>
                        <div className={styles.user}>
                          <Image 
                            src={user.img || "/noavatar.png"}
                            alt="ProfilePic" 
                            width={40} 
                            height={40} 
                            className={styles.userImage} 
                          />
                          {user.username}
                        </div>
                      </td>
                      <td>{user.email}</td>
                      <td>{user.createdAt?.toString()}</td>
                      <td>{user.isAdmin ? "Admin" : "Client"}</td>
                      <td>{user.isActive ? "Active" : "Deleted"}</td>
                      <td>
                        <div className={styles.buttons}>
                          <Link href={`/dashboard/users/${user.id}`}>
                            <button className={`${styles.button} ${styles.view}`}>View</button>
                          </Link>
                            <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                        </div>
                      </td>
                    </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}

export default UsersPage