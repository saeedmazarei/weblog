import { Provider } from 'react-redux'
import store from '../store'
import { ReactNode } from 'react'

interface ReduxStoreProviderProps {
    children: ReactNode
}

function ReduxStoreProvider({ children }: ReduxStoreProviderProps) {
    return <Provider store={store}>{children}</Provider>
}

export default ReduxStoreProvider
