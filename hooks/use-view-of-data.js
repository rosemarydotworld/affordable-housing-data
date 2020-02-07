import { useMemo } from 'react'
import { map, pick } from 'lodash'

import { PICKED_FIELD_KEYS } from '../constants/fields'

const useViewOfData = corpus =>
    useMemo(() => {
        const data = map(corpus, row => pick(row, PICKED_FIELD_KEYS))

        return [data]
    }, [corpus])

export default useViewOfData
