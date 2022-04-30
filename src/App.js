import './App.css';
import data from "./data"
import Nav from "./components/nav"
import Card from './components/card';

function App() {
  const cards = data.map( card=>{
    return(
        <Card
        key = {card.id}
        card = { card }
        />
    )
})
  return(
    <div className='App'>
      <Nav />
      <section className='card-list'>
        {cards}
      </section>
    </div>
  )
}

export default App;
