import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./pages/Feed";
import Results from "./pages/Results";
import Header from "./components/Header";
import VideoDetail from "./pages/VideoDetail";

function App() {
  

  return (
  <BrowserRouter>
  {/* //*header tüm sayfalarda görmek istiyorsak en üste tanımlıcaz
   */}
    <Header/>
  {/*
  //*sayfaladandırmalarımızı yapıyoruz routeslar ile
   */}
  <Routes>
    <Route path="/" element={<Feed/>} />
    <Route path="/results" element={<Results/>} />
    <Route path="/watch" element={<VideoDetail/>} />
  </Routes>

  </BrowserRouter>
  )
}

export default App
