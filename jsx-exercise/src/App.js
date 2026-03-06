import './App.css';
import Controls from './Controls.js'
import UserList from './UserList.js'
import Footer from './Footer.js'

const currentYear = new Date().getFullYear();
var isLoggedIn = true;

function App() {
  if (isLoggedIn) {
    var element = <div>
      <section><Controls /></section>
      <section>
        <h3>User List</h3>
        <UserList />
      </section>
      <Footer />
    </div>
  }

  return (
    <div>
      <h1>ENSF-381: Full Stack Web Development</h1>
      <p>React Components</p>
      <p>{currentYear}</p>
      <p>{isLoggedIn ? 'Welcome Back!' : 'Please log in.'}</p>
      {element} 
    </div>
  );
}

export default App;
