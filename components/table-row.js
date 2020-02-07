import React from 'react'

import { map, values } from 'lodash'

import { COMPUTED_FIELDS } from '../constants/fields'

const getFieldValue = (row, field) => {
    if (typeof field.value === 'function') {
        return field.value(row)
    } else {
        return row[field.key]
    }
}

const TableRow = ({ row }) => {
    return (
        <tr>
            {map(COMPUTED_FIELDS, field => (
                <td>{getFieldValue(row, field)}</td>
            ))}
        </tr>
    )
}

export default TableRow
