import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import './App.css'
function App(){
    return(
      <div className="App">
        <Header/>
        <Navbar/>
        <main>
          <h2>Welcome to My School</h2>
          <p>This is a simple student management system.</p>
        </main>
        <Footer/>
      </div>
    );
}
export default App;