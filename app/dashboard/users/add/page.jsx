import styles from "@/app/ui/dashboard/Users/addUser/addUser.module.css"

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input type="text" placeholder='Username' name='Username' required />
        <input type='email' placeholder='Email' name='Email' required />
        <input type='password' placeholder='Password' name='Password' required />
        <input type='phone' placeholder='Phone' name='Phone' />

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

        <textarea name="desc" id="desc" rows="7" placeholder="Address"  />


        <button type="submit">Submit</button>

      </form>
    </div>
  )
}

export default AddUserPage
