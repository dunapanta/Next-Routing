import {useRouter} from 'next/router'

const SelectedClientProjectPage  = () => {
    const router  = useRouter()

    const { pathname, query } = router
    console.log(pathname, query)
    return (
        <div>
            <h1>The Project Page for a Specific Project for a selected Client</h1>
            <p>pathname {pathname}</p>
    <p>query.id: {query.id}   query.clientprojectid: {query.clientprojectid}</p>
        </div>
    )
}

export default SelectedClientProjectPage