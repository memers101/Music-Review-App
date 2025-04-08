import mongoose from 'mongoose';
import 'dotenv/config';

let connection = undefined;

let Albums = undefined;

async function connect() {
    try{
        await mongoose.connect(process.env.MONGODB_CONNECT_STRING)
        connection = mongoose.connection;
        Albums = createModel();
    } catch(err) {
        throw Error(`Error detected: ${err.message}`)
    }
}

function createModel() {
    const albumSchema = mongoose.Schema({
        title: {type: String, required: true},
        artists: {type: String, required: true},
        producers: {type: String, required: true},
        releaseYear: {type: Number, required: true},
        notes: {type: String, required: false}
    }, {collection: 'myAlbumList'});
    return  mongoose.model('Album', albumSchema)
}

//create
async function createAlbum(title, artists, producers, releaseYear, notes) {
    let album = new Albums({title: title, artists: artists, producers: producers, releaseYear: releaseYear, notes: notes});
    return album.save();
}

//get all
const getAlbums = async (filter) => {
    const albums = Albums.find(filter).exec();
    return albums;
}

const getAlbum = async (id) => {
    const albums = await Albums.findById(id).exec();
    return albums;
}
//update
async function updateAlbum(id, updateValues) {
    const updatedAlbum = await Albums.updateOne({_id: id}, updateValues);
    return updatedAlbum.modifiedCount;
}

//remove
const deleteAlbum = async (id) => {
    const updatedAlbums = await Albums.deleteOne({_id: id});
    return updatedAlbums.deletedCount;
}

export {connect, createAlbum, getAlbum, getAlbums, updateAlbum, deleteAlbum}