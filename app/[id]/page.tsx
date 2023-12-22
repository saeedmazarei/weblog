import PostDetail from "../components/posts/PostDetail";

export default function PostDetailPage({ params }: { params: { id: string } }) {
    return <PostDetail id={params.id} />
}
