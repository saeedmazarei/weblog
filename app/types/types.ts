import { CSSProperties } from "react"

export interface Posts {
  userId: number
  id: number
  title: string
  body: string
}

export interface PostDetailProps {
  post: Posts;
}

export interface MyComponentProps {
  style?: CSSProperties;
}