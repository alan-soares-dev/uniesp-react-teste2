import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { ThemeProvider } from './ThemeContext';
import DisplayTheme from './DisplayTheme';
import ThemeSwitcher from './ThemeSwitcher';

test('must have button with text "Alternar Tema"', () => {
  render(<App />);
  const button = screen.getByText(/Alternar Tema/i);
  expect(button).toBeInTheDocument();
});

test('exibe o tema inicial corretamente', () => {
  render(
    <ThemeProvider>
      <DisplayTheme />
    </ThemeProvider>
  );

  expect(screen.getByText(/tema atual: light/i)).toBeInTheDocument();
});


test('alterna o tema ao clicar no botão', () => {
  render(
    <ThemeProvider>
      <DisplayTheme />
      <ThemeSwitcher />
    </ThemeProvider>
  );


  // Verifica o tema inicial
  expect(screen.getByText(/tema atual: light/i)).toBeInTheDocument();


  // Alterna o tema
  fireEvent.click(screen.getByText(/alternar tema/i));
  expect(screen.getByText(/tema atual: dark/i)).toBeInTheDocument();


  // Alterna novamente
  fireEvent.click(screen.getByText(/alternar tema/i));
  expect(screen.getByText(/tema atual: light/i)).toBeInTheDocument();
});
