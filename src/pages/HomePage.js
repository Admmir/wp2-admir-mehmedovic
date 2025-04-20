import NewsList from '../components/NewsList';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <h1>Latest News</h1>
        <NewsList />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;