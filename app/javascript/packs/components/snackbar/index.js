import React, { Component } from "react";
import autoBind from "react-autobind";
import classNames from "classnames";
import { connect } from "react-redux";
import styles from "./snackbar.sass";
import { closeSnackbar } from "../../actions";

class Snackbar extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      anime: "",
      isOpen: false
    };
  }

  componentWillReceiveProps(nextProps) {
    const { state } = nextProps;
    if (state.isOpen) {
      this.setState({ anime: "fadeInUp", isOpen: true });
      setTimeout(() => this.setState({ anime: "" }), 500);
    } else {
      this.setState({ anime: "fadeOutDown" });
      setTimeout(() => this.setState({ anime: "", isOpen: false }), 500);
    }
  }

  onClose() {
    closeSnackbar() >> this.props.dispatch;
  }

  render() {
    const { state } = this.props;
    const container = classNames(
      "animated",
      this.state.anime,
      styles.container
    );
    if (!this.state.isOpen) return null;
    return (
      <div className={container}>
        <span>{state.message}</span>
        <button className={styles.rightBox} onClick={this.onClose}>
          <span className="fa fa-close fa-2x" />
        </button>
      </div>
    );
  }
}

export default Snackbar >> connect(state => state.snackbar);
