import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';

// - import the array of data from data.js
//   - map over the array to create < Card /> components
//     - display the array of card components under the navbar
//       (in place of the current < Card /> component)

// Note: We haven't styled the group of components yet, so they'll
// still be block elements, stacked vertically.We'll add styling later.
//

function App() {
  const cardData = data.map(card => {
    return (
      <Card
        key={card.id}
        {...card}
      />
    )
  }
  )

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className='flex p-10 mx-auto overflow-x-scroll hide-scroll-bar'>
        {cardData}
      </section>
    </div>
  );
}

export default App;
