import { Component } from "react";
import "../styles/footer.css";

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer>
        <a href="https://github.com/quirogak">{this.props.gitName}</a>
      </footer>
    );
  }
}

export default Footer;
