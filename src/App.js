import React from 'react';
import {useMediaQuery} from "react-responsive";

import Header from "./components/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

function App() {
    const isExtraSmall = useMediaQuery({
        query:'(max-width:575px)'
    });
    const isPhone = useMediaQuery({
        query:'(min-width:576px) and (max-width:768px)'
    });
    const isTablet = useMediaQuery({
        query: '(min-width:769px) and (max-width:992px)'
    });
    // const isDesktop = useMediaQuery({
    //     query: '(min-width:993px) and (max-width:1300px)'
    // });
    // const isBigDesktop = useMediaQuery({
    //     query:'(min-width:1301px) and (max-width:1600px)'
    // });
    // const isHdScreen = useMediaQuery({
    //     query:'(min-width:1601px)'
    // });



  return (
    <div className="App">
      <Header isExtraSmall={isExtraSmall} isPhone={isPhone} isTablet={isTablet}/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
