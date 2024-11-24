import './App.css';
import { ThemeProvider } from './ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';

function App() {
  return (
    <div className="App full-height">
      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>
    </div>
  );
}

export default App;
