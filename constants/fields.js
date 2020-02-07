import { filter, map, round } from 'lodash'

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
export const PICKED_FIELD_NAMES = map(PICKED_FIELDS, field => field.name)
export const PICKED_FIELD_KEYS = map(PICKED_FIELDS, field => field.key)

// Fields from that raw JSON to show...
const VISIBLE_FIELDS = filter(PICKED_FIELDS, 'visible')

// Extra fields computed from JSON values
export const COMPUTED_FIELDS = [
    ...VISIBLE_FIELDS,
    {
        key: 'address',
        name: 'Address',
        value: ({ street_number, street_name, street_type }) =>
            `${street_number} ${street_name} ${street_type}`,
    },
    {
        key: 'percentage_afforable',
        name: 'Percentage Affordable',
        value: ({ affordable_units, total_units }) =>
            round(affordable_units / total_units * 100, 2),
    },
]
