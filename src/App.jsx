import './App.css'
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState} from 'react'; 
import MyAlbumsPage from './pages/MyAlbumsPage'
import MyRankingsPage from './pages/MyRankingsPage'
import AddAlbumManually from './pages/AddAlbumManuallyPage'
import AddRankingManually from './pages/AddRankingManuallyPage'
import EditAlbumPage from './pages/EditAlbumPage'
import EditRankingPage from './pages/EditRankingPage'
import ViewAlbumPage from './pages/ViewAlbumPage'
import ViewRankingPage from './pages/ViewRankingPage'
import AlbumBotPage from './pages/AlbumBotPage'
import Top100Page from './pages/Top100Page'
import FAQPage from './pages/FAQPage'

function App() {
  
  const [albumToEdit, setAlbumToEdit] = useState([]);
  const [albumToView, setAlbumToView] = useState([]);
  const [rankingToEdit, setRankingToEdit] = useState([]);
  const [rankingToView, setRankingToView] = useState([]);

  return (
    <div>
        <header>
        <h1>Music Review App</h1>
        <h3>This app allows you to add, retrieve, update, and delete to a list of your favorite albums.</h3>
        <p>To view your albums, use the navigation bar below to go to "My Albums".</p>
        <p>To add an album, use the navigation bar below to go to "Add Album".</p>
        <p>To view your rankings, use the navigation bar below to go to "My Rankings".</p>
        <p>To add a ranking, use the navigation bar below to go to "Add Ranking".</p>
        <p>To chat with AlbumBot, use the navigation bar below to go to "AlbumBot".</p>
        <p>To find out what album is at a ranking on the Billboard Top 100 go to "Top 100 Albums Of The 21st Century".</p>
        <p>Got questions on how to use the app? Check the "FAQ Page"!</p>
        <br/>
        </header>
        <Router>
            <Navigation/>
            <br/>
            <Routes>
              <Route path="/" element={<MyAlbumsPage setAlbumToEdit={setAlbumToEdit} setAlbumToView={setAlbumToView}/>}></Route>
              <Route path="/addmanually" element={<AddAlbumManually/>}></Route>
              <Route path="/edit" element={<EditAlbumPage albumToEdit={albumToEdit}/>}></Route>
              <Route path="/view" element={<ViewAlbumPage albumToView={albumToView}/>}></Route>
              <Route path="/rankingslist" element={<MyRankingsPage setRankingToEdit={setRankingToEdit} setRankingToView={setRankingToView}/>}></Route>
              <Route path="/addrankingmanually" element={<AddRankingManually/>}></Route>
              <Route path="/editranking" element={<EditRankingPage rankingToEdit={rankingToEdit}/>}></Route>
              <Route path="/viewranking" element={<ViewRankingPage rankingToView={rankingToView}/>}></Route>
              <Route path="/albumbotpage" element={<AlbumBotPage/>}></Route>
              <Route path="/top100" element={<Top100Page/>}></Route>
              <Route path="/faq" element={<FAQPage/>}></Route>
            </Routes>
        </Router>
    </div>
  )
}

export default App