import styles from '@/app/ui/login/login.module.css'

const Login = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form} action=''>
        <h1>Please login</h1>
        <input type="text" placeholder='Username' />
        <input type="password" placeholder='Password' />
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login