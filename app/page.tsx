import DarkModeSwitch from './components/darkModeSwitch/darkMode'
import AllPosts from './components/home/home'
import Header from './components/header/header'
export default function Home() {
    return (
        <>
            <Header />
            <main>
                {/* <DarkModeSwitch /> */}
                <AllPosts />
            </main>
        </>
    )
}
