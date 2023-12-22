'use client'
import Link from 'next/link'
import { useQuery } from 'react-query'

import { Posts } from '@/app/types/types'
import { getAllPosts } from '@/app/services/apis'
import PostItem from './postItem'
import styles from './home.module.scss'

function AllPosts() {
    const { data, isLoading } = useQuery<Posts[]>({
        queryKey: ['posts'],
        queryFn: async () => {
            const res = await getAllPosts()
            return res.data as Posts[]
        },
    })

    return (
        <>
            {isLoading && <div>Loading...</div>}
            <div className={styles['all-posts-container']}>
                {data?.map((post) => (
                    <Link href={`${post.id}`} key={post.id}>
                        <PostItem post={post} />
                    </Link>
                ))}
            </div>
        </>
    )
}

export default AllPosts
