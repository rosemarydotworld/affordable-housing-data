import { useMemo } from 'react'
import { map, pick } from 'lodash'

import { SHOWN_FIELD_KEYS } from '../constants/fields'

const useViewOfData = corpus =>
    useMemo(() => {
        const schema = SHOWN_FIELD_KEYS
        const data = map(corpus, row => pick(row, SHOWN_FIELD_KEYS))

        return [schema, data]
    }, [corpus])

export default useViewOfData
