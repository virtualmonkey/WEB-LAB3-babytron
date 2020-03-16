import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

import BabyStatus from '../BabyStatus';


const Dashboard = () => {
  let {babyId} = useParams();
  return (
    <div>
      <h3>{babyId}</h3>
      <BabyStatus />
    </div>

  );
};

export default Dashboard;