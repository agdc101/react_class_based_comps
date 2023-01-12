import classes from './User.module.css';
import { Component } from 'react'; // adds functionality in order for class to work. - eg allows props to work!

class User extends Component {
  componentWillUnmount() {
    console.log('runs when user is removed');
  }

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
