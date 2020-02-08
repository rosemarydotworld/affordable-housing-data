import React from 'react'
import '@testing-library/jest-dom'
import { render, fireEvent, screen } from '@testing-library/react'
import Index from './pages/index'

describe('App', () => {
    it('renders', () => {
        render(<Index />)

        const pageTitle = screen.getByText('Affordable Housing Portfolio')
        const filter = screen.getByDisplayValue('Select a neighborhood')
        const table = screen.getByRole('table')

        expect(pageTitle).toBeDefined()
        expect(filter).toBeDefined()
        expect(table).toBeDefined()
    })

    it('contains rows of properties', () => {
        render(<Index />)

        const rows = screen.getAllByRole('row')
        const columns = screen.findAllByRole('cell')

        expect(rows.length).toBeGreaterThan(2)
        expect(columns).toBeDefined()
    })

    it('filters properties when select value changes', () => {
        render(<Index />)

        const filter = screen.getByDisplayValue('Select a neighborhood')
        let initialRows = screen.getAllByRole('row').length

        fireEvent.change(filter, { target: { value: 'Japantown' } })

        let newRows = screen.getAllByRole('row').length

        expect(initialRows).not.toEqual(newRows)
    })
})
