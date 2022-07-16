
import './App.scss';
import { lazy, Suspense,useEffect } from 'react';
import {
  BrowserRouter as Router,
  Navigate,
} from 'react-router-dom';
import { Routes ,Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Loading from './components/shared/Loading/Loading'
import { IntlProvider } from 'react-intl';
import {translate} from './translation/translate';
import { useSelector,  } from 'react-redux';
import Aos from 'aos';
import "aos/dist/aos.css";




const Home = lazy(() => import('./pages/Home'));


function App() {
  useEffect(() => {
    Aos.init({
      duration : 1000
    });
  }, []);

  const language = useSelector((state) => state.language.language);

  return (
    <Router>
     <Suspense fallback={<Loading />}></Suspense>

     <IntlProvider
          locale={language}
          formats={{ number: 'en'}}
          messages={translate[language]}
          >

     <ScrollToTop />
      <Routes>
        <Route exact path='/' element={<Home/>}/>

      </Routes>
      </IntlProvider>
      <Suspense/>
    </Router>
  );
}

export default App;
