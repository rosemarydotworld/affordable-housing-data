import React from 'react'

const getAddressUrl = query => {
    return `https://www.google.com/maps/search/?api=1&query=${query}, San Francisco`
}

const addressIsConfidential = street_name =>
    street_name.toLowerCase() === 'confidential'

const buildAddressString = (street_number, street_name, street_type) => {
    let addressString = `${street_number} ${street_name}`
    addressString = street_type
        ? `${addressString} ${street_type}`
        : addressString

    return addressString
}

const Address = ({ street_number, street_name, street_type }) => {
    if (addressIsConfidential(street_name)) {
        return 'Confidential'
    } else {
        const addressString = buildAddressString(
            street_number,
            street_name,
            street_type
        )
        return <a href={getAddressUrl(addressString)}>{addressString}</a>
    }
}

export default Address
