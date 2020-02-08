import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Address from './address'

describe('Address', () => {
    it('shows a Google Maps link to the address made up by props', () => {
        const props = {
            street_number: '1',
            street_name: 'Market',
            street_type: 'St',
        }

        render(<Address {...props} />)

        const anchor = screen.getByText('1 Market St')

        expect(anchor).toHaveAttribute(
            'href',
            expect.stringContaining('google.com/maps')
        )
    })
    it('shows "Confidential" if the address has "confidential" as a street_name', () => {
        const props = {
            street_number: undefined,
            street_name: 'confidential',
            street_type: undefined,
        }

        render(<Address {...props} />)

        const text = screen.getByText('Confidential')

        expect(text).toBeDefined()
        expect(text).not.toHaveAttribute('href')
    })
})
