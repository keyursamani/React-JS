import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getAndSetValues } from "../actions";
import ProgressBar from "../generic/ProgressBar";
import PageFooter from "../generic/PageFooter";

class InfoPage extends Component {
  render() {
    return (
      <div>
        <div className="page-title">Earnings Setup</div>
        <div className="row m-0 page-container main-container">
          <div style={{ padding: "0px 60px" }}>
            <ProgressBar bar="80%" />
          </div>
          <div className="page-content">
            <h1>Alright, here is what we have so far..</h1>
            <p style={{ fontSize: "17px", padding: "15px 0px" }}>
              Take a look at what we have for your earnings setup. You will have
              more customizable options within Netchex once your company is
              created.
            </p>
            <div className="row info-container">
              <div className="col-lg-4" style={{ fontWeight: "600" }}>
                <div style={{ marginBottom: "10px" }}>
                  Base Earning
                  <i
                    className="fa fa-pencil"
                    style={{ marginLeft: "15px", cursor: "pointer" }}
                    onClick={() => {
                      this.props.history.push("./base-page");
                    }}
                  />
                </div>
                {this.props.data.earning &&
                  this.props.data.earning.selectedBaseEarnings.map(k => {
                    return (
                      <div key={k} style={{ fontWeight: "400" }}>
                        {k}
                      </div>
                    );
                  })}
              </div>
              <div className="col-lg-4" style={{ fontWeight: "600" }}>
                <div style={{ marginBottom: "10px" }}>
                  Accurals Earning
                  <i
                    className="fa fa-pencil"
                    style={{ marginLeft: "15px", cursor: "pointer" }}
                    onClick={() => {
                      this.props.history.push("./accural-page");
                    }}
                  />
                </div>
                {this.props.data.accural &&
                  this.props.data.accural.selectedAccurals.map(k => {
                    return (
                      <div key={k} style={{ fontWeight: "400" }}>
                        {k}
                      </div>
                    );
                  })}
              </div>
              <div className="col-lg-4" style={{ fontWeight: "600" }}>
                <div style={{ marginBottom: "10px" }}>
                  Tips Earning
                  <i
                    className="fa fa-pencil"
                    style={{ marginLeft: "15px", cursor: "pointer" }}
                    onClick={() => {
                      this.props.history.push("./tips-page");
                    }}
                  />
                </div>
                {this.props.data.tips &&
                  this.props.data.tips.selectedTips.map(k => {
                    return (
                      <div key={k} style={{ fontWeight: "400" }}>
                        {k}
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        <div className="page-footer-container">
          <PageFooter
            onBack={() => {
              this.props.history.push("/tips-page");
            }}
            onContinue={() => {
              this.props.history.push("/complete-page");
            }}
            desc="Based on this information we will be able to..."
          />
        </div>
      </div>
    );
  }
}

const stateToProps = state => {
  return {
    data: state.earningSetupData
  };
};
const actionCreators = {
  getAndSetValues: getAndSetValues
};

export default withRouter(connect(stateToProps, actionCreators)(InfoPage));
