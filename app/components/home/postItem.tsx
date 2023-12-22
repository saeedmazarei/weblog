import { PostDetailProps } from '@/app/types/types'

import styles from './home.module.scss'

function PostItem({ post }: PostDetailProps) {
    const truncatedBody = post.body.length > 50 ? `${post.body.substring(0, 50)}...` : post.body;
    return (
        <article className={styles['post-item']}>
            <h2 className={styles['post-title']}>{post.title}</h2>
            <p className={styles['post-date']}>{post.id}</p>
            <p className={styles['post-body']}>{truncatedBody}</p>
        </article>
    )
}

export default PostItem
