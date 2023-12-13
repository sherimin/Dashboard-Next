import styles from '@/app/ui/login/login.module.css'
import { authenticate } from '../lib/actions'

const Login = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form} action={authenticate}>
        <h1>Please login</h1>
        <input type="text" placeholder='Username' name='username' />
        <input type="password" placeholder='Password' name='password' />
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login