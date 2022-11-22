import Navbar from './components/Navbar/Navbar';
import Topbar from './components/Topbar/Topbar';
import './App.css'
import LoginForm from './components/LoginForm/LoginForm';
import LatestRegistered from './components/LatestRegistered/LatestRegistered';
import SearchArea from './components/SearchArea/SearchArea';
import Grid from './components/Grid/Grid';
function App() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Grid />
    </div>
  );
}

export default App;
