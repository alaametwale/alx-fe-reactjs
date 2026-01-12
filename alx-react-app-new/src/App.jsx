import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter';

function App() {
  return (
    <>
      <Header />

      <MainContent />

      <UserProfile
        name="Alaa Meto"
        age={28}
        bio="Frontend React Developer in progress 🚀"
      />

      <Counter />

      <Footer />
    </>
  );
}

export default App;
