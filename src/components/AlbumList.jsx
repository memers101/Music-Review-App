import React from 'react';
import '../App.css'
import AnAlbum from './AnAlbum'

function AlbumList({myAlbums, onDelete, onEdit, onView}) {
    return(
        <div>
            <ul>
                {myAlbums.map((album,i) => <AnAlbum singleAlbum ={album} onDelete={onDelete} onEdit={onEdit} onView={onView} key ={i}/>)}
            </ul>
        </div>
    )
}

export default AlbumList