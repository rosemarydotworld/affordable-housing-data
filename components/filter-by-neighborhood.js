import React from 'react'

import { map } from 'lodash'

const FilterByNeighborhood = ({ neighborhoods, onFilterByNeighborhood }) => (
    <select
        id="neighborhood-filter"
        aria-label="Filter by neighorhood"
        onChange={onFilterByNeighborhood}
    >
        <option value="">Select a neighborhood</option>
        {map(neighborhoods, n => {
            return (
                <option key={n} value={n}>
                    {n}
                </option>
            )
        })}
    </select>
)

export default FilterByNeighborhood
