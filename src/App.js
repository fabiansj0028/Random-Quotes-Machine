
import './App.css';
import { useEffect, useState } from 'react';



const colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

function App() {
  const [randQuote, setRandQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [color, setColor] = useState('#333')
  const [quotes, setQuotes] = useState([]);

  useEffect(()=>{

    async function quotesData() {
      const response = await fetch(`https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`)
      const data =  await response.json();
      
      setQuotes(data.quotes);
                      
        const randIndex = Math.floor(Math.random() * data.quotes.length);
        const randColorIdx = Math.floor(Math.random() * colors.length);
                     
        setAuthor(data.quotes[randIndex].author);
        setRandQuote(data.quotes[randIndex].quote);
        setColor(colors[randColorIdx]);

    }

    quotesData();

    
  },[])

  const changeQuote = () =>{

    const randIndex = Math.floor(Math.random() * quotes.length);
    const randColorIdx = Math.floor(Math.random() * colors.length);
    setRandQuote(quotes[randIndex].quote);
    setAuthor(quotes[randIndex].author);
    setColor(colors[randColorIdx]);

  };
  
  return (
    <div className='App' style={{backgroundColor:color, color:color}}>
      <div id="quote-box">
        <h5 id="text"><i className='fa fa-quote-left'></i> {randQuote}</h5>
        <h5 id="author">- {author}</h5>
        <div className='buttons'>
          <a id="tweet-quote" 
          href={'https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent('"' + randQuote + '" ' + author)} target="_blank" rel="noreferrer">
            <button style={{backgroundColor:color}}><i className='fa-brands fa-twitter' ></i></button>
          </a>
          <button id='new-quote' className='new-quote-btn' style={{backgroundColor:color}}
          onClick={() => {changeQuote()}}>New Quote</button>
        </div>
      </div>
    </div>
  );
}

export default App;
