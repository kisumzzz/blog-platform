import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/setting/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import SinglePost from "./components/singlePost/SinglePost";


function App() {
  const user = false;
  return (
    <Router>
      <TopBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/login" element={user ? <Home/> : <Login/>}></Route>
        <Route path="/register" element={user ? <Home/> : <Register/>}></Route>
        <Route path="/write" element={user ? <Write/> : <Login/>}></Route>
        <Route path="/setting" element={user ? <Setting/> : <Login/>}></Route>
      </Routes>
    </Router>
  );
}  

export default App;
