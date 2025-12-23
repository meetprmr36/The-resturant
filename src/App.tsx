import './App.css';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import TheMainComp from './component/TheMainComp';
import Footer from "./component/Footer"
import Navbar from "./component/Navbar";
import About from "./Pages/About"
import Auth from "./Pages/Auth"
import Account from "./Pages/Account"

// function App() {

//   return (
//     <>
//       <Navbar />
//       <TheMainComp />
//       <Footer />
//     </>
//   )
// }

// export default App

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <TheMainComp />
          </motion.div>
        } />
        <Route path="/About" element={
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <About />
          </motion.div>
        } />
        <Route path="/Auth" element={
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Auth />
          </motion.div>
        } />
        <Route path="/Account" element={
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Account />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
