import { useEffect, useState } from "react"

export default function PhotoList(props) {
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/photos?albumId=" + props.selectedPhotoAlbumId

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    alert("Photo search fail :(")
                } else {
                    return response.json()
                }
            })
            .then(data => {
                setPhotos(data.slice(0, 5))
            })

    }, [props.selectedPhotoAlbumId])

    return (
        <div style={{ display: "flex", gap: "5px", marginTop: "10px" }}>
            {photos.map(p => (
                <img
                    key={p.id}
                    src={p.thumbnailUrl}
                    style={{ border:"1px solid", width: "150px", height:"150px" }}
                />
            ))}
        </div>
    )
}