import { useRouter } from 'next/router'

const ProtfolioProjectPage = () => {
    const router = useRouter()

    console.log(router.pathname) //[portfolio/[projectid]
    console.log(router.query)   // /{projectid: "1"}


    return (
        <div>
            <h1>Portfolio Poject Page</h1>
        </div>
    )
}

export default ProtfolioProjectPage