import "./styles/App.css";
import Layout from "./layouts/layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense } from "react";

function App() {
  return (
    <Layout>
       <Router>
        <Suspense
          fallback={
            <div sx={{ minHeight: "540px", background: "#f1efeb" }}></div>
          }
        >
          <Routes>
            <Route path="/" element={<></>} />
          </Routes>
        </Suspense>
      </Router>
    </Layout>
  );
}

export default App;
