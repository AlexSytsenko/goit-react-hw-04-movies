// import { Route, Switch, NavLink } from 'react-router-dom';
import Header from './components/Header';
import Content from './components/Content';

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <div className="body">
          <Content />
        </div>
      </div>
    </>
  );
}

export default App;
