import { getAllPosts } from '@/app/services/apis'

interface Posts {
    userId: number
    id: number
    title: string
    body: string
}

async function AllPosts() {
    const res = await getAllPosts()
    const post: Posts[] = res.data
    return <h1>{post[0].id}</h1>
}

export default AllPosts
