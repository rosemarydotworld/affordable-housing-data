import { filter, map } from 'lodash'
import AffordablePercentage from '../components/affordable-percentage'
import Address from '../components/address'

// Fields to pick out of raw JSON
const PICKED_FIELDS = [
    { key: 'project_id', name: 'Project ID', visible: false },
    { key: 'project_name', name: 'Project Name', visible: true },
    { key: 'street_number', name: 'Street Number', visible: false },
    { key: 'street_name', name: 'Street Name', visible: false },
    { key: 'street_type', name: 'Street Type', visible: false },
    { key: 'neighborhood', name: 'Neighborhood', visible: true },
    { key: 'total_units', name: 'Total Units', visible: true },
    { key: 'affordable_units', name: 'Affordable Units', visible: true },
]
export const PICKED_FIELD_KEYS = map(PICKED_FIELDS, field => field.key)

// Fields from that raw JSON to show...
const VISIBLE_FIELDS = filter(PICKED_FIELDS, 'visible')

// Extra fields computed from JSON row values
export const COMPUTED_FIELDS = [
    ...VISIBLE_FIELDS,
    {
        key: 'address',
        name: 'Address',
        value: Address,
    },
    {
        key: 'percentage_afforable',
        name: 'Affordable Units %',
        value: AffordablePercentage,
    },
]
