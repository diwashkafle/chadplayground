import Home from "./Home";
import {Routes,Route,Link} from 'react-router-dom';
import Intro
 from "./Intro";
function App() {
  return (
    <div className=" h-[100vh] w-full ">
      <Routes>
<Route path="/" element={<Intro/>}/>
<Route path="/home" element={<Home/>
}
/>
   </Routes>
    </div>
  );
}

export default App;
