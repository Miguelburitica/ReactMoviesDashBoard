import '../assets/css/app.css';
import SideBar from './ContentWrapper/SideBar/SideBar'
import Head from './ContentWrapper/Head/Head'
import ContentWrapper from './ContentWrapper/ContentWrapper'

function App() {
  return (
    <div className="App">
    	<div id="wrapper">
        <Head />
        <SideBar />
        <ContentWrapper />
      </div>
    </div>
  );
}

export default App;
