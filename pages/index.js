import corpus from '../corpus.json'

import Link from 'next/link'

import { map } from 'lodash'

import Table from '../components/table'
import FilterByNeighborhood from '../components/filter-by-neighborhood'

import useNeighborhoodFilter from '../hooks/use-neighborhood-filter'
import useViewOfData from '../hooks/use-view-of-data'

function Index() {
    const [
        neighborhoodFilter,
        setNeighborhoodFilter,
        neighborhoods,
    ] = useNeighborhoodFilter(corpus)
    const [data] = useViewOfData(corpus, neighborhoodFilter)

    const onFilterByNeighborhood = e => {
        const newNeighborhood = e.target.value
        setNeighborhoodFilter(newNeighborhood)
    }

    return (
        <>
            <header className="page-header">
                <h1>Affordable Housing Portfolio</h1>
                <FilterByNeighborhood
                    onFilterByNeighborhood={onFilterByNeighborhood}
                    neighborhoods={neighborhoods}
                />
            </header>
            <Table rows={data} />
        </>
    )
}

export default Index
