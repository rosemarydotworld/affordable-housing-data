import { filter, map } from 'lodash'
import AffordablePercentage from '../components/affordable-percentage'
import Address from '../components/address'

/**
 * A field in the table, either containing a primitive value or a component for more complex display
 * @typedef {Object} Field
 * @property {string} key - unique id, identifies fields in raw JSON
 * @property {string} name - human-readable name labelling field
 * @property {boolean} visible - whether the field should display as a raw value
 * @property {function} component - React component that displays a computed field
 */

/**
 * Fields to pick out of raw JSON
 * @type {Array.Field}
 */
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

/**
 * Fields computed from other raw JSON values
 * @type {Array.Field}
 */
const COMPUTED_FIELDS = [
    {
        key: 'address',
        name: 'Address',
        component: Address,
    },
    {
        key: 'percentage_afforable',
        name: 'Affordable Units %',
        component: AffordablePercentage,
    },
]

/**
 * Fields (both raw and computed) shown to the user
 * @type {Array.Field}
 */
export const SHOWN_FIELDS = [
    ...VISIBLE_FIELDS,
    ...COMPUTED_FIELDS,
]
