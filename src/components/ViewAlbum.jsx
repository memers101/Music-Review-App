import { MdNotes } from "react-icons/md";

function ViewAlbum({albumToView, onView}){
    return(
        <MdNotes onClick={e => {e.preventDefault(); onView(albumToView)}}/>
    )
}

export default ViewAlbum