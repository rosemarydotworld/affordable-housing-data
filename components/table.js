import React from 'react'

import { map } from 'lodash'

import { COMPUTED_FIELDS } from '../constants/fields'

import TableRow from './table-row'

const Table = ({ rows }) => (
    <table>
        <thead>
            <tr>
                {map(COMPUTED_FIELDS, field => (
                    <td>{field.name}</td>
                ))}
            </tr>
        </thead>
        <tbody>
            {map(rows, row => (
                <TableRow key={`row-${row.project_id}`} row={row} />
            ))}
        </tbody>
    </table>
)

export default Table
