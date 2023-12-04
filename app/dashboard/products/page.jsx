import styles from "@/app/ui/dashboard/products/products.module.css"
import Search from "@/app/ui/dashboard/search/search"
import Link from "next/link"
import Image from "next/image"
import Pagination from "@/app/ui/dashboard/pagination/pagination"

const ProductsPage = () => {
  return (
      <div className={styles.container}>
        <div className={styles.top}>
          <Search placeholder="Search for a product" />
          <Link href="/dashboard/products/add">
            <button className={styles.addButton}>
              Add new product
            </button>
          </Link>
        </div>
  
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Title</td>
              <td>Description</td>
              <td>Price</td>
              <td>Created At</td>
              <td>Stock</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className={styles.product}>
                  <Image 
                    src="/noproduct.jpg" 
                    alt="Product Pic" 
                    width={40} 
                    height={40} 
                    className={styles.productImage} 
                  />
                  Hand cream
                </div>
              </td>
              <td>L'Occitane Cherry Blossom Hand Cream</td>
              <td>$ 15</td>
              <td>Nov 01, 2023</td>
              <td>79</td>
              <td>
                <div className={styles.buttons}>
                  <Link href="/">
                    <button className={`${styles.button} ${styles.view}`}>View</button>
                  </Link>
                    <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <Pagination />
      </div>
    )
}

export default ProductsPage
