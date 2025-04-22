import Header from "../components/Header";
import Footer from "../components/Footer";
import BusList from "../components/BusList";

const Home = () => {
  const buses = [
    { id: 1, name: "Luxury Bus", seats: 40, price: 25 },
    { id: 2, name: "Regular Bus", seats: 30, price: 15 },
  ];

  return (
    <div>
      <Header />
      <main>
        <h1>Welcome to PraveenBus</h1>
        <BusList buses={buses} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
