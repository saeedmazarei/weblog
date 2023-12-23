import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { getAllPosts } from '@/app/services/apis'
import AllPosts from './home'

jest.mock('../../services/apis')

const queryClient = new QueryClient()

const mockPosts = [
    {
        userId: 1,
        id: 1,
        title: 'Test Post 1',
        body: 'This is the body of test post 1',
    },
    {
        userId: 2,
        id: 2,
        title: 'Test Post 2',
        body: 'This is the body of test post 2',
    },
]

jest.mock('react-query', () => ({
    ...jest.requireActual('react-query'),
    useQueryClient: () => new QueryClient(),
}))

describe('AllPosts', () => {
    beforeEach(() => {
        ;(getAllPosts as jest.Mock).mockResolvedValue({
            data: mockPosts,
        })
    })

    it('renders all posts', async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <AllPosts />
            </QueryClientProvider>,
        )

        expect(getAllPosts).toHaveBeenCalled()

        const post1Title = await screen.findByText('Test Post 1')
        expect(post1Title).toBeInTheDocument()

        const post2Title = screen.getByText('Test Post 2')
        expect(post2Title).toBeInTheDocument()
    })
})
