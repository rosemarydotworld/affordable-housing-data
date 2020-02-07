import React from 'react'

import { kebabCase, map, values } from 'lodash'

import { COMPUTED_FIELDS } from '../constants/fields'

const getFieldValue = (row, field) => {
    if (typeof field.value === 'function') {
        return field.value(row)
    } else {
        return row[field.key]
    }
}

const TableRow = ({ keyStub, row }) => {
    return (
        <tr className="table-row">
            {map(COMPUTED_FIELDS, field => (
                <td
                    className={`table-cell table-cell-${kebabCase(
                        field.key
                    )}`}
                    key={`${keyStub}-${field.key}`}
                >
                    {getFieldValue(row, field)}
                </td>
            ))}
        </tr>
    )
}

export default TableRow
