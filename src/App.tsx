import { useState } from 'react';
// import { configureStore } from '@reduxjs/toolkit';
// import { rootReducer } from './redux/reducers';
import { Provider } from 'react-redux';
import withAuth from './components/withAuth'
import Form from './components/Form'
import CFormBody from './components/ControlledFormBody';
import UFormBody from './components/UncontrolledFormBody';
import Todo from './components/Todo';
import CoinContext from './context/CoinContext';
import ContextTrigger from './components/ContextTrigger';
import store from './redux/sagaStore';
import './App.css';

// const store = configureStore({
//   reducer: rootReducer
// })

function App() {
  const Authform = withAuth(Form);
  const [coin, setCoin] = useState<'heads' | 'tails'>('heads');
  // const { isLogged } = useAuth();

  return (
    <Provider store={store}>
      <CoinContext.Provider value={{ coin, setCoin }}>  
        <Authform>
          <CFormBody />
          <UFormBody />
          {/*  <Form isLogged={isLogged} /> */}
          <ContextTrigger />
          <Todo />
        </Authform>
      </CoinContext.Provider>
    </Provider>
  )
}

export default App
