import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Post from './Post';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/post/:postID/:photos" element={<Post />}></Route>
        </Routes>
      </BrowserRouter>



    </>
  )
}
export default App;
