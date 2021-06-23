import './App.css';
import Rate from './Components/rateMaterial';
import Upload from './Components/uploadMaterial';
import Delete from './Components/deleteMaterial';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path='/'>
              <Upload />
            </Route>
            <Route path='/rate'>
              <Rate />
            </Route>
            <Route path='/delete'>
              <Delete />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
