import React from 'react';
import Barside from 'components/Barside';
import styles from './Layout.module.scss';
import Container from 'components/Container';
import Navigation from 'components/Navigation';
import { useViewport } from 'hooks/ViewportContext';

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { children, viewport } = this.props;

    return (
      <div className={styles.layout}>
        {!(viewport.isDesktop) &&
        <div className={styles.navigation}>
          <Navigation/>
        </div>}
        <div className={styles.row}>
          {viewport.isDesktop &&
          <Barside/>}
          <div className={styles.main}>
            <Container 
              title="Colores generados">
              {children}
            </Container>
          </div>
        </div>
      </div>
    )
  }
}

export default (props)=> {
  const viewport = useViewport();

  return <Layout {...props}
    viewport={viewport}/>;
}