import { getPostDetail } from '@/app/services/apis'
import { Posts } from '@/app/types/types'
import Header from '../header/header'
import styles from './PostDetail.module.scss'
import { generateDate } from '@/app/helper/functions'

async function PostDetail({ id }: { id: number }) {
    const res = await getPostDetail(id)
    const detail: Posts = res.data
    const date = generateDate(detail.id);

    return (
        <>
            <Header style={{ color: '#D9B6FA' }} />
            <article className={styles['post-container']}>
                <h1>{detail.title}</h1>
                <p>{date}</p>
                <p style={{marginTop: '2.5rem', fontSize: '18px'}}>{detail.body}</p>
            </article>
        </>
    )
}

export default PostDetail
