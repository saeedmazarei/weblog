import Image from 'next/image'
import DarkModeSwitch from './components/darkModeSwitch/darkMode'
import AllPosts from './components/home/home'
import styles from './page.module.scss'
import Link from 'next/link'
export default function Home() {
    return (
        <>
            <header className={styles['header-container']}>
                <Link href="/">overreacted</Link>
                <div>
                    <span>by </span>
                    {/* <Image src="/assets/images/writer.jpeg" alt="Avatar" width={50} height={50} /> */}
                    <span>Dan Abramov</span>
                </div>
            </header>
            <main>
                {/* <DarkModeSwitch /> */}
                <AllPosts />
            </main>
        </>
    )
}
