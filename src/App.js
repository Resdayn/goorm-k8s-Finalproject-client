import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ProfilePage from "./pages/ProfilePage";
import ChartPage from "./pages/ChartPage";
import ListPage from "./pages/ListPage";

const App = () => {
  return(
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chart' element={<ChartPage />} />
        <Route path='/list' element={<ListPage />} />
        <Route path='/:id' element={<ProfilePage />} />
      </Routes>
    </Layout>
  );
};

export default App;