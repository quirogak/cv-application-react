import "../styles/footer.css";

const Footer = (props) => {
  return (
    <footer>
      <a href="https://github.com/quirogak">{props.gitName}</a>
    </footer>
  );
}

export default Footer;
