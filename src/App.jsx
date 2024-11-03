import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Starter from "./screens/starter";
import SignIn from "./screens/Signin";
import SignUp from "./screens/Signup";
import StudentHero from "./components/StudentHero";
import StudentHome from "./screens/StudentHome";
import VideoPage from "./screens/VideoPage";
import TeacherDashboard from "./screens/TeacherDashBoard";

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Starter />} />
          <Route path="/video" element={<VideoPage/>}></Route>
          <Route path='/student' element={<StudentHome/>} ></Route>
          <Route path="/signin" element={< SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Dashboard" element={<TeacherDashboard/>} ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
