import Header from './Components/Header';
import MainBody from './Components/MainBody';
import Footer from './Components/Footer';
import NumberParticles from './Components/NumberParticles';

const App = () => {
  return (
    <div className="bg-gray-50 flex flex-col min-h-screen">
      <NumberParticles/>
      <Header />
      <main className="flex-grow px-4 sm:px-6 lg:px-8">
        <MainBody />
      </main>
      <Footer />
    </div>
  );
};

export default App;