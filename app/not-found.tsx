import Link from "next/link"


function Page404() {
    return (
        <>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '500px',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <h1>404</h1>
                    <h2>NOT FOUND</h2>
                    <Link href="/">
                        <button style={{marginTop: '20px', borderRadius: '16px', padding: '10px', cursor: 'pointer'}}>back to home page</button>
                    </Link>
                </div>
        </>
    )
}

export default Page404
