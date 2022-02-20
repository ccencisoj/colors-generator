import React from 'react';
import store from 'store';
import { Provider } from 'react-redux';
import { ModalsProvider } from 'hooks/ModalsContext';
import { ViewportProvider } from 'hooks/ViewportContext';

import "../../public/scss/styles.scss";
import "../../public/scss/variables.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <ViewportProvider>
          <ModalsProvider>
            <Component {...pageProps}/>
          </ModalsProvider>
        </ViewportProvider>
      </Provider>
    )
  }
}

export default App;