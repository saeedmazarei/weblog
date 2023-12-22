'use client'
import Link from 'next/link'

import styles from './header.module.scss'
import { MyComponentProps } from '@/app/types/types'

export default function Header({ style }: MyComponentProps) {
    return (
        <>
            <header className={styles['header-container']}>
                <Link href="/" style={style}>
                    overreacted
                </Link>
                <div>
                    <span>by </span>
                    {/* <Image src="/assets/images/writer.jpeg" alt="Avatar" width={50} height={50} /> */}
                    <span>Dan Abramov</span>
                </div>
            </header>
        </>
    )
}
