import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import PostDetail from './PostDetail'
// Mock API response
const mockPost = {
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit...',
}

const mockReducer = () => ({
    darkMode: {
        darkMode: false,
    },
})

// create mock store
const store = createStore(mockReducer)

const queryClient = new QueryClient()
// Mock API call
jest.mock('../../services/apis', () => ({
    getPostDetail: () => Promise.resolve({ data: mockPost }),
}))

describe('PostDetail', () => {
    // omit other tests for brevity

    it('renders post details', async () => {
        const { findByText } = render(
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    <PostDetail id={1} />
                </Provider>
            </QueryClientProvider>,
        )

        expect(await findByText(mockPost.title)).toBeInTheDocument()
        expect(await findByText(mockPost.body)).toBeInTheDocument()
    })
    it('renders in light mode', () => {
        render(
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    <PostDetail id={1} />
                </Provider>
            </QueryClientProvider>,
        )

        // Assert light mode
    })

    it('renders in dark mode', () => {
        store.dispatch({ type: 'TOGGLE_DARK_MODE' })

        render(
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    <PostDetail id={1} />
                </Provider>
            </QueryClientProvider>,
        )

        // Assert dark mode
    })
})
