import corpus from '../corpus.json'

import Link from 'next/link'

import Table from '../components/table'

import useViewOfData from '../hooks/use-view-of-data'

function Index() {
    const [data] = useViewOfData(corpus)

    return (
        <Table rows={data} />
    )
}

export default Index
