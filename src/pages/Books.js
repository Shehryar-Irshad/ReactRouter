import {Link} from "react-router-dom"

export function Books(){
    return (
        <>
            <h1>Books</h1>
            <Link to="/books/1">Book 1</Link>
            <Link to="/books/2">Book 2</Link>
        </>
    )
}