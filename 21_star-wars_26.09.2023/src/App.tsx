import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/header/Main';
import Footer from './components/footer/Footer';
import { navItem } from './components/utils';

export const PageContext = createContext((currentPage: string) => {});

function App() {
  const [currentPage, setCurrentPage] = useState<string>(navItem[0]);
  console.log(currentPage);

  const changePage = (currentPage: string) => {
    setCurrentPage(currentPage);
  }

  return (
   <>
   <PageContext.Provider value={changePage}>
   <Header changePage={changePage} />
   <Main />
   <Footer />
   </PageContext.Provider>
   </>
  );
}

export default App;
