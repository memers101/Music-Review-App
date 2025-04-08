import { Link } from 'react-router-dom';

function Navigation() {
    return(
        <nav>
            <Link to ="/" class = "link">  My Albums</Link>
            <Link to ="/addmanually" class = "link">  | Add Album </Link>
            <Link to ="/rankingslist" class = "link"> | My Rankings</Link>
            <Link to ="/addrankingmanually" class = "link">  | Add Ranking </Link>
            <Link to ="/albumbotpage" class = "link">  | AlbumBot</Link>
            <Link to ="/top100" class = "link">  | Top 100 Albums Of The 21st Century</Link>
            <Link to ="/FAQ" class = "link">  | FAQ </Link>
        </nav>
    )
}
export default Navigation