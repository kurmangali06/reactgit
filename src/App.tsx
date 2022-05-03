import React, { FC, useState } from 'react';
import { Provider } from 'react-redux';
import { AppRouter } from './Components/AppRouter';
import { store } from './store';
import { defaultContext, ThemeContext } from "./utils/ThemeContext";
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store';

export const App: FC = () => {
  const [theme, setTheme] = useState(defaultContext.theme);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (

    <ThemeContext.Provider value={
      {
        theme,
        toggleTheme,
      }
    }> <Provider store={store} >
        <PersistGate persistor={persistor}>
          <AppRouter />
        </PersistGate>
      </Provider>
    </ThemeContext.Provider>
  )
};

