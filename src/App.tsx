import './App.css';
import {Home} from "./Home";

const App: React.FC = () => {
  return (
    <div className="home">
      <header className="header">
       Typescript 
       <a className="link" href="https://typescriptbook.jp/">参考サイト</a>
      </header>
       <main>
        <Home />
       </main>
    </div>
  );
}

export default App;
