import ChangePassword from '../components/ChangePassword';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ChangePasswordPage = () => {
  return (
    <div className="app">
      <Header />
      <main className="main-content auth-page">
        <ChangePassword />
      </main>
      <Footer />
    </div>
  );
};

export default ChangePasswordPage;