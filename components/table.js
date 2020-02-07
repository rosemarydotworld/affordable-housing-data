import React from 'react'

import { map } from 'lodash'

import { COMPUTED_FIELDS } from '../constants/fields'

import TableRow from './table-row'

const Table = ({ rows }) => (
    <div className="table-wrapper">
        <table className="table">
            <thead className="table-header">
                <tr className="table-row">
                    {map(COMPUTED_FIELDS, field => (
                        <th className="table-cell" key={`rowhead-${field.key}`}>{field.name}</th>
                    ))}
                </tr>
            </thead>
            <tbody className="table-body">
                {map(rows, row => (
                    <TableRow
                        key={`row-${row.project_id}`}
                        keyStub={row.project_id}
                        row={row}
                    />
                ))}
            </tbody>
        </table>
    </div>
)

export default Table
