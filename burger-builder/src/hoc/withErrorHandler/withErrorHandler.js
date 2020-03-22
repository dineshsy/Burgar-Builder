import React, { Component } from "react";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Auxilary/Auxilary";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    };
    componentDidMount() {
      axios.interceptors.request.use(
        request => {
          return request;
        },
        error => {
          this.setState({ error: `${error}` });
          return error;
        }
      );

      axios.interceptors.response.use(
        res => {
          return res;
        },
        error => this.setState({ error: `${error}` })
      );
    }
    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <Aux>
          <Modal show={this.state.error} popModal={this.errorConfirmedHandler}>
            {this.state.error}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default withErrorHandler;
