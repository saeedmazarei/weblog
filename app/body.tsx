'use client'

import { useSelector } from 'react-redux'
import { RootState } from '@/app/store'

import AxiosErrorHandler from './services/ErrorHandler'

export default function Body({ children }: { children: React.ReactNode }) {
    const darkMode = useSelector((state: RootState) => state.darkMode.darkMode)

    return (
        <body data-theme={darkMode && "dark"}>
            <AxiosErrorHandler />
            <>{children}</>
        </body>
    )
}
