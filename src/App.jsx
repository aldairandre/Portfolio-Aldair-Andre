import Header from './components/header';
import Main from './components/main';

function App(){
  return(
    <div className='Container-app'>
      <Header/>
      <Main/>
      <footer>
        <div className="footer">
          <p className="footer-paragraph">Desenvolvido por <span>Aldair André</span></p>
        </div>
      </footer>
    </div>
  )
}

export default App;