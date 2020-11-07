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
        query:'(min-width:576px) and (max-width:767px)'
    });
    const isTablet = useMediaQuery({
        query: '(min-width:768px) and (max-width:992px)'
    });


  return (
    <div className="App">
      <Header isExtraSmall={isExtraSmall} isPhone={isPhone} isTablet={isTablet}/>
      <Main/>
      <Footer isExtraSmall={isExtraSmall} isPhone={isPhone}/>
    </div>
  );
}

export default App;
