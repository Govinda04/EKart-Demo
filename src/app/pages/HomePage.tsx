import React from "react";

//  this tsx file is a component
const HomePage = (props) => {
  return (
    <div>
      <p>Home</p>
    </div>
  ); // always return jsx -  javascript xml ( or typescript xml)
};

export default HomePage; /*we say this because when you export this saying default, out of the multiple exports this will be the default one 
and you are free to choose others for export as well 
Example :  
import HomePage from "./pages/HomePage";  ---  for default exports like above
import {HomePage} from "./pages/HomePage"; ---- if we wrote 
export const HomePage = (props) => {
  return (
    <div>
      <p>Home</p>
    </div>
  ); // always return jsx -  javascript xml ( or typescript xml)
};
*/
