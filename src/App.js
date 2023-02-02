
import './App.css';
import { useEffect, useState } from 'react';

const quotes = [
  {
    "quote":"Life isn’t about getting and having, it’s about giving and being.","author":"Kevin Kruse"},
  {
    "quote":"Whatever the mind of man can conceive and believe, it can achieve.","author":"Napoleon Hill"},
  {
    "quote":"Strive not to be a success, but rather to be of value.","author":"Albert Einstein"},
  {
    "quote":"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.","author":"Robert Frost"},
  {
    "quote":"I attribute my success to this: I never gave or took any excuse.","author":"Florence Nightingale"},
  {
    "quote":"You miss 100% of the shots you don’t take.","author":"Wayne Gretzky"},
  {
    "quote":"I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.","author":"Michael Jordan"},
  {
    "quote":"The most difficult thing is the decision to act, the rest is merely tenacity.","author":"Amelia Earhart"},
  {
    "quote":"Every strike brings me closer to the next home run.","author":"Babe Ruth"},
  {
    "quote":"Definiteness of purpose is the starting point of all achievement.","author":"W. Clement Stone"},
  {
    "quote":"We must balance conspicuous consumption with conscious capitalism.","author":"Kevin Kruse"},
  {
    "quote":"Life is what happens to you while you’re busy making other plans.","author":"John Lennon"},
  {
    "quote":"We become what we think about.","author":"Earl Nightingale"},
  {
    "quote":"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.","author":"Mark Twain"},
  {
    "quote":"Life is 10% what happens to me and 90% of how I react to it.","author":"Charles Swindoll"},
  {
    "quote":"The most common way people give up their power is by thinking they don’t have any.","author":"Alice Walker"},
  {
    "quote":"The mind is everything. What you think you become.","author":"Buddha"}
  ]

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
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [color, setColor] = useState('#333')

  useEffect(()=>{
    
    const randIndex = Math.floor(Math.random() * quotes.length);
    const randColorIdx = Math.floor(Math.random() * colors.length);
    setQuote(quotes[randIndex].quote);
    setAuthor(quotes[randIndex].author);
    setColor(colors[randColorIdx]);

  },[])

  const changeQuote = () =>{

    const randIndex = Math.floor(Math.random() * quotes.length);
    const randColorIdx = Math.floor(Math.random() * colors.length);
    setQuote(quotes[randIndex].quote);
    setAuthor(quotes[randIndex].author);
    setColor(colors[randColorIdx]);

  };
  
  return (
    <div className='App' style={{backgroundColor:color, color:color}}>
      <div id="quote-box">
        <h5 id="text"><i className='fa fa-quote-left'></i> {quote}</h5>
        <h5 id="author">- {author}</h5>
        <div className='buttons'>
          <a id="tweet-quote" 
          href={'https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent('"' + quote + '" ' + author)} target="_blank" rel="noreferrer">
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
