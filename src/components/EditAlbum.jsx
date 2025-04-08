import { FaPencilAlt } from "react-icons/fa";

function EditAlbum({albumToEdit, onEdit}){
    return(
        <FaPencilAlt onClick={e => {e.preventDefault(); onEdit(albumToEdit)}}/>
    )
}

export default EditAlbum