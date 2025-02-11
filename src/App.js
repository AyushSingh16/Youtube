// import logo from './logo.svg';
import './output.css';
import './components/Head';
import Head from './components/Head';
import Body from './components/Body';
import store from './utils/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <Body />
      {/**
       * Head
       *  Logo
       *  Search
       * Body
       *  Sidebar
       *    MenuItems
       *  MainContainer
       *    ButtonsList
       *    VideoContainer
       *      VideoCard
       *        
       *      
       * 
       * 
       * 
       */}
      </div>
    </Provider>
  );
}

export default App;
