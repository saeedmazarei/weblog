import Link from 'next/link'

import { Posts } from '@/app/types/types'
import { getAllPosts } from '@/app/services/apis'
import PostItem from './postItem'
import styles from './home.module.scss'

async function AllPosts() {
    const res = await getAllPosts()
    const posts: Posts[] = res.data
    return (
        <div className={styles['all-posts-container']}>
            {posts.map((post) => (
                <Link href={`${post.id}`} key={post.id}>
                    <PostItem post={post} />
                </Link>
            ))}
        </div>
    )
}

export default AllPosts
