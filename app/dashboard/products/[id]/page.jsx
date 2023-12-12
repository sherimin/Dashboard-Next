import { updateProduct } from '@/app/lib/actions';
import { fetchProduct } from '@/app/lib/data';
import styles from '@/app/ui/dashboard/Products/singleProduct/singleProduct.module.css'
import Image from 'next/image'

const SingleProductPage = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);

  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
                <Image src={product.img || "/noproduct.jpg"} alt="productpic" fill />
            </div>
            {product.title}
        </div>
        <div className={styles.formContainer}>
            <form action={updateProduct} className={styles.form}>
              <input type="hidden" name="id" value={product.id} />
              <label>Title</label>
              <input type="text" name="title" placeholder={product.title} />
              
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
              <input type="number" name="price" placeholder={product.price} />

              <label>Stock</label>
              <input type="number" name="stock" placeholder={product.stock} />

              <label>Color</label>
              <input type="text" name="color" placeholder={product.color} />

              <label>Size</label>
              <input type="text" name="size" placeholder={product.size} />
              

              <label>Description</label>
              <textarea type="text" id="desc" name="desc" placeholder={product.desc} rows="8" />

              <button>
                Update
              </button>

            </form>
        </div>
    </div>
  )
}

export default SingleProductPage;