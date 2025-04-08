import { useEffect, useState } from 'react';
import AlbumList from '../components/AlbumList'
import { useNavigate } from 'react-router-dom';

function MyAlbumsPage({setAlbumToEdit, setAlbumToView}) {
    const [albums, setAlbums] = useState([])
    const Navigate = useNavigate();

    const loadAlbums = async() => {
        const response = await fetch('/albums')
        const albums = await response.json()
        setAlbums(albums)
    }

    useEffect(() => {
        loadAlbums();
    }, []);


    const onView = async(albumToView) => {
        setAlbumToView(albumToView)
        Navigate("/view")
    }

    const onEdit = async(album) => {
        setAlbumToEdit(album)
        Navigate("/edit")
    }

    const onDelete = async(_id) => {
        const response = await fetch(`/albums/${_id}`, {method: 'DELETE'})
        if(response.status === 204) 
        {
            setAlbums(albums.filter(e => e._id !== _id))
        }
        else 
        {
            alert(`Failed to delete exercise with the id #${_id}, status code is ${response.status}`)
        }
    }

    return(
        <div><h1>My Albums</h1>
        <p>To view your notes on an album, click on the notes icon in the description of the album you would like to view.</p>
        <p>To edit an album, click on the pencil icon in the description of the album you would like to edit.</p>
        <p>To delete an album, click on the trash can icon in the description of the album you would like to edit.</p>
        <AlbumList myAlbums={albums} onDelete={onDelete} onEdit={onEdit} onView={onView}></AlbumList>
        </div>
    )
}

export default MyAlbumsPage