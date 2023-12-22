import { PostDetailProps } from '@/app/types/types'

function PostItem({ post }: PostDetailProps) {
    const truncatedBody = post.body.length > 50 ? `${post.body.substring(0, 50)}...` : post.body;
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{truncatedBody}</p>
        </div>
    )
}

export default PostItem
