import React from 'react';
import '../App.css'
import EditAlbum from './EditAlbum'
import DeleteAlbum from './DeleteAlbum'
import ViewAlbum from './ViewAlbum';

function AnAlbum({singleAlbum, onDelete, onEdit, onView}) {
    if (singleAlbum.notes) {
        return (
            <div>
                <br/>
                <h3>{singleAlbum.title} by {singleAlbum.artists}</h3>
                <p>Producers: {singleAlbum.producers}</p>
                <p>Release Year: {singleAlbum.releaseYear}</p>
                <ViewAlbum albumToView={singleAlbum} onView={onView}></ViewAlbum>
                <EditAlbum albumToEdit={singleAlbum} onEdit={onEdit}></EditAlbum>
                <DeleteAlbum albumToDelete={singleAlbum} onDelete={onDelete}></DeleteAlbum>
            </div>
        )
    }
    else {
        return (
            <div>
                <br/>
                <h3>{singleAlbum.title} by {singleAlbum.artists}</h3>
                <p>Producers: {singleAlbum.producers}</p>
                <p>Release Year: {singleAlbum.releaseYear}</p>
                <EditAlbum albumToEdit={singleAlbum} onEdit={onEdit}></EditAlbum>
                <DeleteAlbum albumToDelete={singleAlbum} onDelete={onDelete}></DeleteAlbum>
            </div>
        )
    }
}

//                <a href="/" onClick={e => {e.preventDefault(), onView(0)}}>View</a>
//<a href="/" onClick={e => {e.preventDefault(), onEdit(0)}}>Edit</a>

export default AnAlbum