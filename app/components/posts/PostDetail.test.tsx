import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux' 
import { createStore } from 'redux'

import PostDetail from './PostDetail'

// Mock data
const mockPosts = [
  { 
    userId: 1, 
    id: 1,
    title: 'Test Post 1',
    body: 'Body of test post 1'
  },
  {
    userId: 2, 
    id: 2,
    title: 'Test Post 2', 
    body: 'Body of test post 2'
  }
]

// Mock Redux store
const mockReducer = () => ({
  darkMode: {
    darkMode: false
  }
})

const store = createStore(mockReducer)

// React Query client
const queryClient = new QueryClient()
queryClient.setQueryData('posts', mockPosts)

describe('PostDetail', () => {

  beforeEach(() => {
    jest.resetModules() 
  })

  it('renders post details', () => {
   
    render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PostDetail id={1} />
        </Provider>
      </QueryClientProvider>
    )
    
    expect(screen.getByText('Test Post 1')).toBeInTheDocument()
    expect(screen.getByText('Body of test post 1')).toBeInTheDocument()
  })

  it('renders in light mode', () => {

    render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PostDetail id={1} />
        </Provider>
      </QueryClientProvider>  
    )

    // Assert light mode 
  })

  it('renders in dark mode', () => {

    store.dispatch({type: 'TOGGLE_DARK_MODE'})
    
    render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
           <PostDetail id={1} />
        </Provider>
      </QueryClientProvider>
    )

    // Assert dark mode
  })

})