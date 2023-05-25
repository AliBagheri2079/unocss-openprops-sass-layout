import Home from "@/pages/Home";

import "@unocss/reset/normalize.css";
import "uno.css";
/*
! use just in development mode
import "virtual:unocss-devtools";
*/
import "@/assets/scss/main.scss";

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
