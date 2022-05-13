import Header from './Components/header'
import Footer from './Components/footer'
import Main from './Components/main-components';

function App(){
  return(
    <div className='Container-app' style={{position:'relative'}}>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App;