import React from 'react';
import Grid from 'components/Grid';
import { connect } from 'react-redux';
import Layout from 'components/Layout';
import generateColors from 'utils/generateColors';
import ColorSquare from '../components/ColorSquare';

const mapStateToProps = (store)=> ({
  divisor: store.common.divisor
});

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { divisor } = this.props;
    const colors = generateColors(divisor);

    return (
      <Layout>
        <Grid>
          {colors.map((color, index)=> 
            <ColorSquare key={index} 
            color={color}/>)}
          {!(colors.length) &&
          <p>No hay colores generados</p>}
        </Grid>
      </Layout>
    )
  }
}

const ConnectedIndex = connect(
  mapStateToProps, null)(Index); 

export default ConnectedIndex;