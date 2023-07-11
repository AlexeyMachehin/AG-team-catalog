import { Toaster } from 'react-hot-toast';
import { TeamCatalog } from './components/teamCatalog/TeamCatalog';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Toaster toastOptions={{ duration: 2000 }} />
      <TeamCatalog />
    </div>
  );
}

export default App;
