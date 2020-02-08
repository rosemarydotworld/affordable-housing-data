export const getFieldValue = (row, field) => {
    if (typeof field.value === 'function') {
        return field.value(row)
    } else {
        return row[field.key]
    }
}
