import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Experience from './components/Experience';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        
        <Route path='/experience' element={<Experience/>}/>
        {/* <Route path="/projects_description" component={<ProjectDetail/>} /> Dynamic route */}
         <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;