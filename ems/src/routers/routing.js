import { Link, Route, Switch } from "react-router-dom";
 import Ems from "../components/Ems";
 import ShowAccounts from "../components/ShowAccounts";
 import CreateAccount from "../components/CreateAccount";



export const routing = (
  <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          TechnoElevate
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/ems">
                EMS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/createaccount">
                CreateAccount
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/showaccounts">
                ShowAccounts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <Switch>
      <Route exact  path="/" component={Ems} />
      <Route path="/ems" component={Ems} />
      <Route path="/createaccount" component={CreateAccount} />
      {/* <Route path="/showaccounts" component={ShowAccounts} /> */}
    </Switch>
    
  </>
);