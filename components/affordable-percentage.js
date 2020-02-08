import { round } from 'lodash'

const AffordablePercentage = ({ affordable_units, total_units }) => {
    const affordable = Number(affordable_units)
    const total = Number(total_units)

    if (affordable && total) {
        return `${round((affordable / total) * 100, 2)}%`
    } else {
        return 'N/A'
    }
}

export default AffordablePercentage
