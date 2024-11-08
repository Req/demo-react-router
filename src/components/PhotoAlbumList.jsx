import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

const btnStyle = { flex: "1 1", whiteSpace:"nowrap" }

export default function PhotoAlbumList(props) {
    const [results, setResults] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => {
                if (!response.ok) {
                    alert("Error fetching albums")
                } else {
                    return response.json()
                }
            })
            .then(data => {
                setResults(data)
            })
    }, [])

    const list = results.map(album => {
        return (
            <NavLink
                key={album.id}
                style={btnStyle}
                to={"/album/"+album.id}
            >
                {album.id} {album.title.slice(0, 3)}...
            </NavLink>
        )
    })

    return (
        <div>
            <h1>Periodic table of Photo albums</h1>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "3px" }}>
                {list}
            </div>
        </div>
    )
}