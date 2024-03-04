import './App.css';
import CustomerReview from '../components/CustomerReview/CustomerReview';
import Cards from '../components/Cards/Cards';
import { cardsData as diariaCardsData } from "../Data/Data"; 
import { datax } from "../Data/Data"; 



function App() {
  return (
    <>
      <h1> </h1>
      <div style={{
        marginBottom: '20px',
        marginTop: '40px',
      }}> 
      <Cards data={diariaCardsData} uniqueData={datax} />
      </div>
      <CustomerReview />
    </>
  );
}

export default App;

