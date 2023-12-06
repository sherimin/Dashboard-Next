"use client"

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { MdSearch } from 'react-icons/md'
import styles from './search.module.css'

const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = (e) => {

    const params = new URLSearchParams(searchParams);

    params.set("q", e.target.value);

    replace(`${pathname}?${params}`)
  }

  console.log('searchParams: ', searchParams);
  console.log('pathname: ', pathname);

  return (
    <div className={styles.container}>
        <MdSearch />
        <input type="text" placeholder={placeholder} className={styles.input} onChange={handleSearch} />
    </div>
  )
}

export default Search