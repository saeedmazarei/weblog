'use client'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/app/store'
import { toggleDarkMode } from '@/app/store/slices/darkModeSlice'

export interface DarkModeState {
    darkMode: boolean
}

export default function DarkModeSwitch() {
    const darkMode = useSelector((state: RootState) => state.darkMode.darkMode)
    const dispatch = useDispatch()
console.log(darkMode)
    const handleToggle = () => {
        localStorage.setItem('darkMode', JSON.stringify(!darkMode))
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
