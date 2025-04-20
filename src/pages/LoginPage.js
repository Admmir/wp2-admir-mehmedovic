import LoginForm from '../components/LoginForm';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LoginPage = () => {
  return (
    <div className="app">
      <Header />
      <main className="main-content auth-page">
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;