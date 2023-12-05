import styles from '@/app/ui/dashboard/Users/singleUser/singleUser.module.css'
import Image from 'next/image'

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
                <Image src="/noproduct.jpg" alt="productpic" fill />
            </div>
            Cherry Blossom Hand Cream
        </div>
        <div className={styles.formContainer}>
            <div className={styles.form}>
              <label>Title</label>
              <input type="text" name="title" placeholder='title' />
              
              <label>Category</label>
                <select name="Category" id="category">
                  <option value="general">Choose a category</option>
                  <option value="books">Books</option>
                  <option value="cosmetics">Cosmetics</option>
                  <option value="electronics">Electronics</option>
                  <option value="fashion">Fashion</option>
                  <option value="home">Home</option>
                </select>

              <label>Price</label>
              <input type="number" name="password" placeholder='$' />

              <label>Stock</label>
              <input type="number" name="phone" placeholder='0' />

              <label>Color</label>
              <input type="text" name="color" placeholder='default' />

              <label>Size</label>
              <input type="text" name="size" placeholder='default' />
              

              <label>Description</label>
              <textarea type="text" id="desc" name="desc" placeholder='Description' rows="8" />

              <button>
                Update
              </button>

            </div>
        </div>
    </div>
  )
}

export default SingleUserPage