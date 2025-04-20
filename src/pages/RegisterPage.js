import RegisterForm from '../components/RegisterForm';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RegisterPage = () => {
  return (
    <div className="app">
      <Header />
      <main className="main-content auth-page">
        <RegisterForm />
      </main>
      <Footer />
    </div>
  );
};

export default RegisterPage;