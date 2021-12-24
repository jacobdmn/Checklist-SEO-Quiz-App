import "./style/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import UpdateCRO from "./admin/updateCRO";

import Header from "./components/Header";

import Content from "./components/Content";
import SendEmailQuiz from "./components/test_quiz_email";

import checklists from "./data";

// function App() {
//   return <UpdateCRO checklists={checklists} />;
// }
function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<Content checklist={checklists[0]} />} />
          <Route
            path='/home-pages'
            element={<Content checklist={checklists[1]} />}
          />
          <Route
            path='/product-pages'
            element={<Content checklist={checklists[2]} />}
          />
          <Route
            path='/cart-pages'
            element={<Content checklist={checklists[3]} />}
          />
        </Routes>
      </div>

      <SendEmailQuiz />
    </Router>
  );
}

export default App;
