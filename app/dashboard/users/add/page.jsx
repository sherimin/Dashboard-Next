import addUser from "@/app/lib/actions"
import styles from "@/app/ui/dashboard/Users/addUser/addUser.module.css"

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form} action={addUser}>
        <input type="text" placeholder='Username' name='username' required />
        <input type='email' placeholder='Email' name='email' required />
        <input type='password' placeholder='Password' name='password' required />
        <input type='phone' placeholder='Phone' name='phone' />

        <select name="isAdmin" id="isAdmin">
          <option value={false} selected>Is Admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={false} selected>Is Active?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <textarea name="address" id="desc" rows="7" placeholder="Address"  />


        <button type="submit">Submit</button>

      </form>
    </div>
  )
}

export default AddUserPage
