import { useState } from 'react'

const useSort = (initialSort = '') => {
    const [sort, setSort] = useState(initialSort)

    const clearSort = () => setSort('')

    return [sort, setSort, clearSort]
}

export default useSort
