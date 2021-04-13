import { Route, Switch, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';

function App() {
  return (
    <>
      <ul>
        <li>
          <NavLink exact to="/" className="nav-link" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" className="nav-link" activeClassName="active">
            Movies
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={MoviesPage} />
        {/* <Route path="/movies/:movieId" component={MovieDetailsPage} /> */}

        {/* <Route component={NotFoundView} /> */}
      </Switch>
    </>
  );
}

export default App;
