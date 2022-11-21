import Navbar from './components/Navbar/Navbar';
import Topbar from './components/Topbar/Topbar';
import './App.css'
import LoginForm from './components/LoginForm/LoginForm';
import LatestRegistered from './components/LatestRegistered/LatestRegistered';
function App() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <LoginForm />
      <LatestRegistered />
    </div>
  );
}

export default App;
