import "./ContentMain.css";

import Budget from "../Budget/Budget.jsx";
import Cards from "../Cards/Cards.jsx";
import Report from "../Report/Report.jsx";
import Transactions from "../Transactions/Transactions.jsx";
import Savings from "../Savings/Savings.jsx";
import Loans from "../Loans/Loans.jsx";
import Financial from "../Financial/Financial.jsx";
import Subcriptions from "../Subscriptions/Subcriptions.jsx";

export default function ContentMain() {
  return (
    <div className="main-content-holder">
      <div className="content-grid-one">
        <Cards />
        <Transactions />
        <Report />
      </div>
      <div className="content-grid-two">
        <Budget />
        <div className="grid-two-item">
          <div className="subgrid-two">
            <Subcriptions />
            <Savings />
          </div>
        </div>
        <div className="grid-two-item">
          <div className="subgrid-two">
            <Loans />
            <Financial />
          </div>
        </div>
      </div>
    </div>
  );
}
