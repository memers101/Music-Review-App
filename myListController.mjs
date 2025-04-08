import 'dotenv/config';
import express from 'express';
import asyncHandler from 'express-async-handler';
import * as albums from './myListModel.mjs';

const app = express()
app.use(express.json())

const PORT = process.env.PORT;

app.listen(PORT, async () => {
    await albums.connect(false);
    console.log(`Server listening on port ${PORT}...`);
})

app.post('/albums', asyncHandler(async(req,res) => {
    console.log("Recieved a POST request")
    console.log("Responded with JSON for new album")
    const title = req.body.title
    const artists = req.body.artists
    const producers = req.body.producers
    const releaseYear = req.body.releaseYear
    const notes = req.body.notes
    
    if(notes)
    {
        const addedAlbum = await albums.createAlbum(title, artists, producers, releaseYear, notes)
        res.status(201).json(addedAlbum)
    }
    else 
    {
        const addedAlbum = await albums.createAlbum(title, artists, producers, releaseYear)
        res.status(201).json(addedAlbum)
    }
}))

app.get('/albums', asyncHandler(async(req,res) => {
    console.log("Recieved a GET request")
    console.log("Responded with JSON for all albums")
    const filter = req.query
    const albumList = await albums.getAlbums(filter)
    res.status(200).json(albumList)
}))

app.get('/albums/:_id', asyncHandler(async(req,res) => {
    console.log("Recieved a GET request")
    console.log("Responded with JSON for the searched for album")
    const searchId = req.params['_id']
    const albumList = await albums.getAlbum(searchId)
    if (albumList) 
    {
        res.status(200).json(albumList)
    }
    else 
    {
        res.status(404).json({"Error": "Not Found"})
    }
}))

app.put('/albums/:_id', asyncHandler(async(req,res) => {
    console.log("Recieved a PUT request")
    console.log("Responded with JSON for updated album")
    const valuesToChange = req.body
    const searchId = req.params['_id']
    const albumToUpdate = await albums.getAlbum(searchId)
    const modifiedCount = await albums.updateAlbum(searchId, valuesToChange)
    const updatedAlbum  = await albums.getAlbum(searchId)

    if (!albumToUpdate && modifiedCount === 0) 
    {
        res.status(404).json({"Error": "Not Found"})
    }
    else 
    {
        res.status(200).json(updatedAlbum)
    }
}))

app.delete('/albums/:_id', asyncHandler(async(req,res) => {
    console.log("Recieved a DELETE request")
    console.log("Deleted entry. Responded with empty JSON body")
    const searchId = req.params['_id']
    const modifiedCount = await albums.deleteAlbum(searchId)
    if (modifiedCount === 0) 
    {
        res.status(404).json({"Error": "Not Found"})
    }
    else 
    {
        res.status(204).json()
    }
}))