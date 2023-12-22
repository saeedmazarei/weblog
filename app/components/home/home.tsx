import Link from 'next/link'

import { Posts } from '@/app/types/types'
import { getAllPosts } from '@/app/services/apis'
import PostItem from './postItem'

async function AllPosts() {
    const res = await getAllPosts()
    const posts: Posts[] = res.data
    return (
        <div>
            {posts.map((post) => (
                <Link href={`${post.id}`} key={post.id}>
                    <PostItem post={post} />
                </Link>
            ))}
        </div>
    )
}

export default AllPosts
