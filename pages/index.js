import corpus from '../corpus.json'

import Link from 'next/link'

import Table from '../components/table'

import useViewOfData from '../hooks/use-view-of-data'

function Index() {
    const [data] = useViewOfData(corpus)

    return (
        <>
            <header className="page-header">
                <h1>Affordable Housing Portfolio</h1>
            </header>
            <Table rows={data} />
        </>
    )
}

export default Index
