import { Route, Routes } from "react-router-dom";
import MainContent from "./website/MainContent";
import SignIn from "./website/Auth/SignIn";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
};

export default App;
