'use client'
import { useQuery } from 'react-query'

import { getPostDetail } from '@/app/services/apis'
import { Posts } from '@/app/types/types'
import { generateDate } from '@/app/helper/functions'
import Header from '../header/header'
import styles from './PostDetail.module.scss'
import Loading from '../shared/Loading'

function PostDetail({ id }: { id: number }) {
    const { data, isLoading } = useQuery<Posts>({
        queryKey: ['postDetail'],
        queryFn: async () => {
            const res = await getPostDetail(id)
            return res.data as Posts
        },
    })
    const date = generateDate(data?.id)

    return (
        <>
            {isLoading && <Loading />}
            <Header style={{ color: '#D9B6FA' }} />
            <article className={styles['post-container']}>
                <h1>{data?.title}</h1>
                <p>{date}</p>
                <p style={{ marginTop: '2.5rem', fontSize: '18px' }}>{data?.body}</p>
            </article>
        </>
    )
}

export default PostDetail
