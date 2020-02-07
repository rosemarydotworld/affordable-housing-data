import React from 'react'

import { map, values } from 'lodash'

const TableRow = ({ row }) => {
    const columns = values(row)

    return (
        <tr>
            {map(columns, column => (
                <td>{column}</td>
            ))}
        </tr>
    )
}

const Table = ({ schema, rows }) => (
    <table>
        <thead>
            <tr>
                {map(schema, column => (
                    <td>{column}</td>
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
