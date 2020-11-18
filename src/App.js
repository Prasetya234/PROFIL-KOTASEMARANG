import { BrowserRouter, Switch, Link}from 'react-router-dom';
import Home from './component/Home';
import Pariwisata from './component/Pariwisata';
import Kuliner from './component/Kuliner';
import Sejarah from './component/Sejarah';
import Pemerintah from './component/Pemerintah';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Link path="/" exact component={Home} />
      <Link path="/Pariwisata" exact component={Pariwisata} />
      <Link path="/Kuliner" exact component={Kuliner} />
      <Link path="/Sejarah" exact component={Sejarah} />
      <Link path="/Pemerintah" exact component={Pemerintah} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
