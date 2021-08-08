import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from '../footer/footer';
import Routes from '../routes/routes'
import AppHeader from '../app-header/app-header';


const App = () => {

  return (
    <>

<Router>
  <AppHeader />
  <Routes />
</Router>
<Footer />

    </>
  )

}

export default App;
