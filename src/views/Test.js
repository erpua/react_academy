import React from "react";
import { useHistory, 
         useLocation, 
         useParams, 
         useRouteMatch } 
from "react-router-dom";

const Test = () => {

  const history = useHistory();
  console.log('history from Test cComponent =>', history);

  const location = useLocation();
  console.log('location from Test cComponent =>', location);

  const params = useParams();
  console.log('params from Test cComponent =>', params);

  /*  const match = useRouteMatch('/test/:testId'); */
  const match = useRouteMatch();
  console.log('match from Test cComponent =>', match);


  return <h1>Test</h1>;
}

export default Test;