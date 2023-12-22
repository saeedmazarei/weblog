import { getPostDetail } from '@/app/services/apis'
import { Posts } from '@/app/types/types'

async function PostDetail({ id }: { id: number }) {
    const res = await getPostDetail(id)
    const detail: Posts = res.data
    return (
        <>
            <h1>{detail.title}</h1>
            <p>{detail.body}</p>
        </>
    )
}

export default PostDetail
