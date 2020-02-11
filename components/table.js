import React from 'react'

import { map } from 'lodash'

import { SHOWN_FIELDS } from '../constants/fields'

import TableRow from './table-row'

const Table = ({ rows }) => (
    <div className="table-wrapper">
        <table role="table" className="table">
            <thead role="rowgroup" className="table-header">
                <tr role="row" className="table-row">
                    {map(SHOWN_FIELDS, field => (
                        <th
                            role="columnheader"
                            className="table-cell"
                            key={`rowhead-${field.key}`}
                        >
                            {field.name}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody role="rowgroup" className="table-body">
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
