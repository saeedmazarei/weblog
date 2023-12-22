'use client'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDarkMode } from '@/app/store/slices/darkModeSlice'
import { selectDarkMode } from '@/app/store/slices/darkModeSlice'

export interface DarkModeState {
    darkMode: boolean
}

export default function DarkModeSwitch() {
    const dispatch = useDispatch()

    const darkMode = useSelector(selectDarkMode)
    console.log(darkMode)

    const handleToggle = () => {
        dispatch(toggleDarkMode())
    }

    return (
        <div>
            <label>
                Dark Mode
                <input type="checkbox" checked={darkMode} onChange={handleToggle} />
            </label>
        </div>
    )
}
