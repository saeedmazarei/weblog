import PostDetail from "../components/posts/PostDetail";

export default function PostDetailPage({ params }: { params: { id: number } }) {
    return <PostDetail id={params.id} />
}
