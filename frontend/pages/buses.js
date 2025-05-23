import BusList from "../components/BusList";
import Header from "../components/Header";
import Footer from "../components/Footer";

const BusesPage = () => {
  const buses = [
    { id: 1, name: "Luxury Bus", seats: 40, price: 25 },
    { id: 2, name: "Regular Bus", seats: 30, price: 15 },
  ];

  return (
    <div>
      <Header />
      <main>
        <h1>Available Buses</h1>
        <BusList buses={buses} />
      </main>
      <Footer />
    </div>
  );
};

export default BusesPage;

