import { Component } from "react";
import Header from "./components/header"
import Footer from "./components/footer";

class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <>
        <Header title="CV Generator"></Header>
        <Footer gitName="@quirogak"></Footer>
      </>
    )
  }
}

export default App;
