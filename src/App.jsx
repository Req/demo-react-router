import { useState } from 'react'
import PhotoAlbumList from './components/PhotoAlbumList'
import { Outlet, Route, Routes, useParams } from 'react-router-dom'

function App() {
  const [selectedPhotoAlbumId, setSelectedPhotoAlbumId] = useState(null)

  /*
    To test, navigate to:
    1. http://localhost:5173/
    2. http://localhost:5173/test
    3. http://localhost:5173/albums
    4. http://localhost:5173/album/1
  */

  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<p>Select album</p>} />
          <Route path="test" element={<p>This is a test</p>} />
          <Route path="albums" element={<PhotoAlbumList setSelectedPhotoAlbumId={setSelectedPhotoAlbumId} />} />
          <Route path="album/:albumid" element={<PhotoAlbum />} />
        </Route>

      </Routes>
    </>
  )
}

function RootLayout() {
  return (
    <div>
      <hr />
      <h1>THIS IS PART OF THE ROOT ROUTES</h1>
      <p>Thanks for using our app!</p>
      <Outlet />
      <hr />
    </div>
  )
}

function PhotoAlbum() {
  const { albumid } = useParams()

  return <p>Album: {albumid}</p>
}

export default App
