import LoginForm from "../components/LoginForm";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LoginPage = () => (
  <div>
    <Header />
    <main>
      <h1>Login</h1>
      <LoginForm />
    </main>
    <Footer />
  </div>
);

export default LoginPage;
