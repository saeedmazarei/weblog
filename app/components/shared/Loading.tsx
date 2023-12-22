import styles from './Loading.module.scss'
import Image from 'next/image'

function Loading() {
    return (
        <div className={styles['loading-container']}>
            <Image
                src="/assets/images/loading.gif"
                alt="Loading"
                width={100}
                height={100}
                priority={false}
            />
        </div>
    )
}

export default Loading
