import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";
import { addProduct } from "@/app/lib/actions";

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form} action={addProduct}>
        <input type="text" placeholder="title" name="title" required />
        <select name="Category" id="category">
          <option value="general">Choose a category</option>
          <option value="books">Books</option>
          <option value="cosmetics">Cosmetics</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="home">Home</option>
        </select>

        <input type="number" placeholder="price" name="price" />
        <input type="number" placeholder="stock" name="stock" />
        <input type="text" placeholder="color" name="color" />
        <input type="text" placeholder="size" name="size" />

        <textarea name="desc" id="desc" rows="16" placeholder="Description" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProductPage;
