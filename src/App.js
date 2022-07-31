import Timer from './components/Timer' 
import Footer from './components/Footer';

function App() {

  return (
    <div className="text-center bg-gradient-to-t from-[#F23345] to-[#FB5042] flex flex-col content-center items-center justify-center justify-items-center self-center h-screen w-screen">
      <Timer/>
      <Footer/>
    </div>
  );
}

export default App;
