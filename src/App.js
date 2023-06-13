import { Component } from "react";
import Header from "./components/header"
import Footer from "./components/footer";
import Main from "./components/main"

class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <>
        <Header title="CV Generator"></Header>
        <Main></Main>
        <Footer gitName="@quirogak"></Footer>
      </>
    )
  }
}

export default App;
