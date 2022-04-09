import Header from './header'
import Footer from './footer'
import Main from './main-components';

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