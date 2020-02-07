import { map } from 'lodash'

const FIELDS = [
    { key: 'project_id', name: 'Project ID', visible: false },
    { key: 'project_name', name: 'Project Name', visible: true },
    { key: 'street_number', name: 'Street Number', visible: false },
    { key: 'street_name', name: 'Street Name', visible: false },
    { key: 'street_type', name: 'Street Type', visible: false },
    { key: 'neighborhood', name: 'Neighborhood', visible: true },
    { key: 'total_units', name: 'Total Units', visible: true },
    { key: 'affordable_units', name: 'Affordable Units', visible: true },
]

export const SHOWN_FIELD_KEYS = map(FIELDS, field => field.key)
