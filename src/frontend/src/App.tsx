import { HomePage } from './pages/HomePage';
import { Toaster } from './components/ui/sonner';
import { ThemeProvider } from 'next-themes';

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <HomePage />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
