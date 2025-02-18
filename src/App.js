// import logo from './logo.svg';
import './output.css';
import './components/Head';
import Head from './components/Head';
import Body from './components/Body';
import store from './utils/store';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/", 
        element:<MainContainer/>,
      },
      {
        path:"watch",
        element:<WatchPage/>,
      },
    ]
  }
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
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
