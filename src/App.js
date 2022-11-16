// import ReactDom from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Page from './layouts/Page'
import Archive from './layouts/Archive'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import Gallery from './pages/Gallery'
import Blog from './pages/Blog'
import Post from './pages/Post';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
Amplify.configure(awsExports);


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page/>}>
          <Route index element={<Home/>}></Route>
          <Route path="blogs" element={<Blogs/>}>Blogs</Route>
          <Route path="gallery" element={<Gallery/>}>Gallery</Route>
        </Route>

        <Route path="/category" element={<Archive/>}>
            <Route index element={<Blog/>}></Route>
            <Route path="post" element={<Post/>}></Route>
        </Route>
        
      </Routes>
     
    </BrowserRouter>

    
  );
}

export default App;
