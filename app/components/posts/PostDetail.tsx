'use client'
import { useQuery } from 'react-query'
import { useQueryClient } from 'react-query'

import { Posts } from '@/app/types/types'
import { generateDate } from '@/app/helper/functions'
import Header from '../header/header'
import styles from './PostDetail.module.scss'
import DarkModeSwitch from '../darkModeSwitch/darkMode'

function PostDetail({ id }: { id: number }) {
    const queryClient = useQueryClient();
    const data: Array<Posts> | undefined = queryClient.getQueryData('posts')
    const date = generateDate(data?.[id-1].id)

    return (
        <>
            <DarkModeSwitch />
            <Header style={{ color: '#D9B6FA' }} />
            <article className={styles['post-container']}>
                <h1>{data?.[id-1].title}</h1>
                <p>{date}</p>
                <p style={{ marginTop: '2.5rem', fontSize: '18px' }}>{data?.[id-1].body}</p>
            </article>
        </>
    )
}

export default PostDetail
