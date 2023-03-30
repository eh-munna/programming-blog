import './App.css';
import Blogs from './components/Blogs/Blogs';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <div className="container mx-auto p-2 md:p-3">
        <Header></Header>
        <Blogs></Blogs>
      </div>
    </div>
  );
}

export default App;
