import React from 'react';

const propTypes = {
};

function Root() {
  return <div>Hello world!</div>;
}
// class Root extends Component {
//   render() {
//     const { router, routes } = this.props;
//     return (
//       <div>Hello world</div>
//     );
//   }
// }

Root.propTypes = propTypes;

export default Root;
