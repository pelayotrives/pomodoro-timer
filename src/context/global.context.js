//? Using context we can use global variables.
import { createContext, useState } from "react";

//! 1.) First we declare the constant for createContext();
const UtilityContext = createContext();

function ContextWrapper(props) { //! 2.) We create our function with props.

  //! This will help to toggle our colors.
  const [isActive, setIsActive] = useState(false);

  //! 3.) We add our global variables that we want to pass to other components. We will make an object to make it easier to de-structure it.
  const styles = {
    // ********* Background *********
    styleBackgroundDefault: {
        background: "linear-gradient(360deg, rgba(242,51,69,1) 0%, rgba(255,95,84,1) 100%)"
    },
    styleBackgroundToggled: {
        background: "linear-gradient(360deg, rgba(0,0,0,1) 0%, rgba(51,70,116,1) 100%)"
    },
    // ********* Div *********
    styleDivDefault: {
        background: "#FFE4E2"
    },
    styleDivToggled: {
        background: "#e5e2ff"
    },
    // ********* Circle *********
    styleDefault: {
        background: "linear-gradient(360deg, rgba(242,51,69,1) 0%, rgba(255,95,84,1) 100%)",
        boxShadow: "0px 8px 20px 2px rgba(199,22,40,.3)"
    },
    styleToggled: {
        background: "linear-gradient(360deg, rgba(0,0,0,1) 0%, rgba(51,70,116,1) 100%)",
        boxShadow: "0px 8px 20px 2px rgba(0,0,0,.3)"
    },
    styleTextSessionDefault: {
        color: "white"
    },
    // ********* Buttons *********
    styleButtonDefault: {
        background: "linear-gradient(360deg, rgba(242,51,69,1) 0%, rgba(255,95,84,1) 100%)",
        boxShadow: "0px 4px 10px 1px rgba(199,22,40,.3)",
        color: "white"
    },
    styleButtonToggled: {
        background: "linear-gradient(360deg, rgba(0,0,0,1) 0%, rgba(51,70,116,1) 100%)",
        boxShadow: "0px 4px 10px 1px rgba(0,0,0,.3)",
        color: "white"
    },
    // ********* Text *********
    styleTextDefault: {
        color: "rgba(242,51,69,1)"
    },
    styleTextToggled: {
        color: "#141A2C"
    },
  };

  // Change colors when toggle function.
  const toggleButton = () => {
    setIsActive(!isActive);
    console.log("Toggle working.");
  };

  //! 4.) We create our context that will be passed to our children. After that, we will have to de-structure it like, FE: styles.styleToggled
  const passedContext = {
    styles,
    toggleButton,
    isActive,
    setIsActive,
  };

  return (
    //! 5.) We apply this formula to send our context.
    <UtilityContext.Provider value={passedContext}>
      {props.children}
    </UtilityContext.Provider>
  );
}

//! 6.) We export our UtilityContext and ContextWrapper
export { UtilityContext, ContextWrapper };

// ...

//! 7.) We import it (index.js - line 7) ---> import { ContextWrapper } from './context/global.context';
//! 8.) We wrap <App> component with <ContextWrapper> HOC (index.js - line 12)

// ...

//! 9.) We import it (Timer.jsx - line 3) ---> import { UtilityContext } from "../context/global.context";
//! 10.) We de-structure our object (Timer.jsx - line 11) ---> const {styles} = useContext(UtilityContext);
//! 11.) We do the same with any other component we want to apply our context to.

