import { TeamCatalog } from './components/teamCatalog/TeamCatalog';
import { Loader } from './components/loader/Loader';
import { ErrorSnackbar } from './components/errorSnackbar/ErrorSnackbar';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <ErrorSnackbar />
      <Loader />
      <TeamCatalog />
    </div>
  );
}

export default App;
