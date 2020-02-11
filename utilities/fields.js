/**
 * @function getFieldValue
 * @param {string} row - the entire row of raw  values from JSON
 * @param {Field} field - the Field
 * @see constants/fields.js
 */
export const getFieldValue = (row, field) => {
    if (typeof field.component === 'function') {
        return field.component(row)
    } else {
        return row[field.key]
    }
}
