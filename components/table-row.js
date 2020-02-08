import React from 'react'

import { kebabCase, map, values } from 'lodash'

import { COMPUTED_FIELDS } from '../constants/fields'
import { getFieldValue } from '../utilities/fields'

const TableRow = ({ keyStub, row }) => (
    <tr role="row" className="table-row">
        {map(COMPUTED_FIELDS, field => {
            const cellClass = `table-cell table-cell-${kebabCase(field.key)}`
            const cellKey = `${keyStub}-${field.key}`
            const cellLabelId = `${cellKey}-label`

            return (
                <td role="cell" className={cellClass} key={cellKey}>
                    <span
                        aria-hidden
                        id={cellLabelId}
                        className="table-cell-label"
                    >
                        {field.name}
                    </span>
                    <span
                        aria-labelledby={cellLabelId}
                        className="table-cell-value"
                    >
                        {getFieldValue(row, field)}
                    </span>
                </td>
            )
        })}
    </tr>
)

export default TableRow
