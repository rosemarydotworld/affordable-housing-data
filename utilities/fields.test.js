import { getFieldValue } from './fields'

describe('getFieldValue', () => {
    const fakeRow = {
        project_id: '1',
        project_name: '101 49th Ave',
    }

    const fakePrimitiveField = {
        key: 'project_id',
        name: 'Project ID',
    }

    const fakeComputedField = {
        key: 'id_and_name',
        name: 'ID and Name',
        component: ({ project_id, project_name }) => `${project_id} ${project_name}`,
    }

    describe('with a primitive value', () => {
        it('gets the value from the field key on the row', () => {
            const expected = '1'
            const result = getFieldValue(fakeRow, fakePrimitiveField)

            expect(result).toEqual(expected)
        })
    })

    describe('with a computed value', () => {
        it("computes the value with the field's function or component", () => {
            const expected = '1 101 49th Ave'
            const result = getFieldValue(fakeRow, fakeComputedField)

            expect(result).toEqual(expected)
        })
    })
})
