"use client"

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import styles from './pagination.module.css'

const Pagination = () => {

  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = searchParams.get("page") || 1;

  const params = new URLSearchParams(searchParams);

  const ITEM_PER_PAGE = 2;

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1 > 0);
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < 6;

  return (
    <div className={styles.container}>
        <button className={styles.button}disabled = {!hasPrev}>Previous</button>
        <button className={styles.button}disabled = {!hasNext}>Next</button>
    </div>
  )
}

export default Pagination