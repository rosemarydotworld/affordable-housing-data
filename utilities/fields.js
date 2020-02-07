import React from 'react'
import { round } from 'lodash'

const getAddressUrl = query => {
    return `https://www.google.com/maps/search/?api=1&query=${query}, San Francisco`
}

const addressIsConfidential = street_name =>
    street_name.toLowerCase() === 'confidential'

export const getAddress = ({ street_number, street_name, street_type }) => {
    if (addressIsConfidential(street_name)) {
        return 'Confidential'
    }

    let addressString = `${street_number} ${street_name}`
    addressString = street_type
        ? `${addressString} ${street_type}`
        : addressString

    return <a href={getAddressUrl(addressString)}>{addressString}</a>
}

export const getAffordablePercentage = ({ affordable_units, total_units }) => {
    const affordable = Number(affordable_units)
    const total = Number(total_units)

    if (affordable && total) {
        return `${round((affordable / total) * 100, 2)}%`
    } else {
        return 'N/A'
    }
}
