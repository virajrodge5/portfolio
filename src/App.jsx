import { BrowserRouter } from "react-router-dom";

import { About, Contact, Education, Skills, Hero, Navbar, Works, StarsCanvas, Footer, BackToTopButton } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center mb-0'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Education />
        <Works />
        <Skills />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
        <BackToTopButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
