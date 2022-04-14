import Link from "next/link";

export default function Error() {
    return(
        <>
            <h1>
                Error 404<br/>
                Page not found
            </h1>
            <Link href='/'>
                <h2><a>Back to main page</a></h2>
            </Link>
        </>
    )
}