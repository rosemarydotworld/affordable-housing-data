import { useMemo, useState } from 'react'
import { includes, reduce } from 'lodash'

const useNeighborhoodFilter = (corpus) => {
    const [neighborhoodFilter, setNeighborhoodFilter] = useState()

    const neighborhoods = useMemo(() => {
        return reduce(
            corpus,
            (list, row) => {
                const { neighborhood } = row

                if (neighborhood && !includes(list, neighborhood)) {
                    return [...list, neighborhood]
                } else {
                    return list
                }
            },
            []
        )
    }, [corpus])

    return [neighborhoodFilter, setNeighborhoodFilter, neighborhoods]
}

export default useNeighborhoodFilter
