import { useDispatch, useSelector } from 'react-redux'
import { toggleDarkMode } from '@/app/store/slices/darkModeSlice'

export interface DarkModeState {
    darkMode: boolean
}

const DarkModeSwitch: React.FC = () => {
    const dispatch = useDispatch()

    const darkMode = useSelector((state: { darkMode: DarkModeState }) => state.darkMode.darkMode)
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

export default DarkModeSwitch
