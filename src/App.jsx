import Header from './Components/header/index'
import Footer from './Components/footer/index'
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