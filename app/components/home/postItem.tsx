'use client'
import { PostDetailProps } from '@/app/types/types'

import styles from './home.module.scss'
import { generateDate } from '@/app/helper/functions'

function PostItem({ post }: PostDetailProps) {
    const truncatedBody = post.body.length > 50 ? `${post.body.substring(0, 50)}...` : post.body
    const date = generateDate(post.id)

    return (
        <article className={styles['post-item']}>
            <h2 className={styles['post-title']}>{post.title}</h2>
            <p className={styles['post-date']}>{date}</p>
            <p className={styles['post-body']}>{truncatedBody}</p>
        </article>
    )
}

export default PostItem
