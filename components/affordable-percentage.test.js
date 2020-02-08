import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import AffordablePercentage from './affordable-percentage'

describe('AffordablePercentage', () => {
    it('shows the proportion of affordable_units to total_units as a percentage', () => {
        const props = {
            affordable_units: '3',
            total_units: '4',
        }

        render(<AffordablePercentage {...props} />)

        const text = screen.getByText('75%')

        expect(text).toBeDefined()
    })

    it('shows "N/A" if total_units are zero', () => {
        const props = {
            affordable_units: '0',
            total_units: '0',
        }

        render(<AffordablePercentage {...props} />)

        const text = screen.getByText('N/A')

        expect(text).toBeDefined()
    })

    it('shows "N/A" if unit data is undefined', () => {
        const props = {
            affordable_units: undefined,
            total_units: undefined,
        }

        render(<AffordablePercentage {...props} />)

        const text = screen.getByText('N/A')

        expect(text).toBeDefined()
    })
})
