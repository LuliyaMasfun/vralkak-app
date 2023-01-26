import { useRouter } from "next/router"

const Equipment = () => {

    const router = useRouter()
    const { id } = router.query
    console.log(id)

    return (
        <main>
            <h1 className="text-2xl"> This is the page for Item {id}</h1>
        </main>

    )

}
export default Equipment