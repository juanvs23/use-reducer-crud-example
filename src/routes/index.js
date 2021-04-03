import HomePage from '../pages/homePage';
import ReactCallback from '../pages/reactCallback';
import ReactMemo from '../pages/reactMemo';
import ReactReducer from '../pages/reactReducer';
export const routes=[
    {
        path: "/",
        exact: true,
        component:  HomePage,
        link: 'Home'
      },
      {
        path: "/agregar",
        exact: true,
        component:  ReactReducer,
        link: 'Agregar usuario'
      },
      {
        path: "/listar",
        exact: true,
        component:  ReactMemo,
        link: 'Listar usuario'
      },
      {
        path: "/react-callback",
        exact: true,
        component:  ReactCallback,
        link: null
      },
    
      
] 