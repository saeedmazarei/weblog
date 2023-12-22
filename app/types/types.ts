export interface Posts {
    userId: number
    id: number
    title: string
    body: string
}

export interface PostDetailProps {
    post: Posts;
  }

export interface DarkModeState {
    value: boolean;
  }