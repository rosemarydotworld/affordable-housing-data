import { useMemo } from 'react'
import { filter, map, pick } from 'lodash'

import { PICKED_FIELD_KEYS } from '../constants/fields'

const useViewOfData = (corpus, neighborhoodFilter) => {
    // Winnow data to relevant fields and memoize aggressively
    const onlyRelevantFields = useMemo(
        () => map(corpus, row => pick(row, PICKED_FIELD_KEYS)),
        [corpus]
    )

    return useMemo(() => {
        let data = onlyRelevantFields
        if (neighborhoodFilter) {
            data = filter(data, row => row.neighborhood === neighborhoodFilter)
        }

        return [data]
    }, [onlyRelevantFields, neighborhoodFilter])
}

export default useViewOfData
