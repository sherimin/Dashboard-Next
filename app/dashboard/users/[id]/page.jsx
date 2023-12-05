import styles from '@/app/ui/dashboard/Users/singleUser/singleUser.module.css'
import Image from 'next/image'

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
                <Image src="/noavatar.png" alt="profilepic" fill />
            </div>
            Sheri Lu
        </div>
        <div className={styles.formContainer}>
            <div className={styles.form}>
              <label>Username</label>
              <input type="text" name="username" placeholder='Sheri Lu' />

              <label>Email</label>
              <input type="email" name="email" placeholder='example@example.com' />

              <label>Password</label>
              <input type="password" name="password" placeholder='********' />

              <label>Phone</label>
              <input type="text" name="phone" placeholder='000-000-0000' />

              <label>Address</label>
              <textarea type="text" name="address" placeholder='/' />

              <label>Is Admin?</label>
              <select name="isAdmin" id="isAdmin">
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
           
              <label>Is Active</label>
              <select name="isActive" id="isActive">
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>

              <button>
                Update
              </button>

            </div>
        </div>
    </div>
  )
}

export default SingleUserPage