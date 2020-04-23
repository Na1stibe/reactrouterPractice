import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import './App.css';

import Github from './Components/github';
import Notion from './Components/notion';
import Main from './Components/main';

class App extends Component {
  render(){
    return( 
    <div className="App">
      <div>
        <ul className= "link-list">
          <li>
            <Link className="link" to="/">
              메인 페이지 이동 
            </Link>
          </li>
          <li>
            <Link className="link" to="/notion">
              노션 
            </Link>
          </li>
          <li>
            <Link className="link" to="/github">
              github 주소
            </Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/notion"  component={Notion} />
        <Route path="/github"  component={Github} />
      </Switch>
    </div>
    
    );
  }
}


export default App;
