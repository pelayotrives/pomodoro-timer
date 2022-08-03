import Timer from './components/Timer' 
import Footer from './components/Footer';
import { useContext } from 'react';
import { UtilityContext } from './context/global.context';

function App() {

  // De-structuring our context object.
  const {styles, toggleButton, isActive, setIsActive} = useContext(UtilityContext);

  return (
    <div style={isActive === false ? styles.styleBackgroundDefault : styles.styleBackgroundToggled} className="text-center flex flex-col content-center items-center justify-center justify-items-center self-center h-screen w-screen">
      <Timer/>
      <Footer/>
    </div>
  );
}

export default App;
