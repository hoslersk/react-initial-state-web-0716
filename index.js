// const app = "I don't do much.";

class ToggleButton extends React.Component {
  constructor() {
    super();

    this.state = {
      isEnabled: false
    };
  }

  render() {
    return (
      <div className="toggle-button">I am toggled {this.state.isEnabled ? 'on' : 'off'}.</div>
    );
  }
}



// class Address extends React.Component {
//   constructor(props) {
//     super();
//
//     this.state = {
//       fullAddress: `${props.street}, ${props.city}`
//     }
//   }
//
//   render() {
//     return (
//       <div className="address">{this.state.fullAddress}</div> // Don't do this
//     );
//   }
// }

// class Address extends React.Component {
//   render() {
//     return (
//       <div className="address">{this.props.street}, {this.props.city}</div> // Do this
//     );
//   }
// }
