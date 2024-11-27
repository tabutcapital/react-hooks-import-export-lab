// import React from "react";
// import { userName, myCity } from "./data/user";

// function Home() {
//   return (
//     <div id="home">
//       <h1>
//         {username} is a Web Developer from {city}
//       </h1>
//     </div>
//   );
// }

// export default Home;

import React from "react";
import { username, city } from "../data/user"; // Relative path

function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home; // Default export
