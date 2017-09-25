import React from "react";
import classNames from "classnames";
import styles from "./Footer.sass";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const footerStyle = classNames("page-footer", styles.footer);
    return (
      <footer className={footerStyle}>
        <div className="container">
          <div className="row">
            <div className="col l12 s12">
              <h5 className="text">
                筋肉の成長に喜びを
                <em>- 薫陶 -</em>
              </h5>
            </div>
          </div>
        </div>
        <div className="footer-copy-right">
          <div className="container">
            <p className="text">© 2017 SLP-GuHoo</p>
          </div>
        </div>
      </footer>
    );
  }
}
