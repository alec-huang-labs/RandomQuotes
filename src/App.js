import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button'

const inputStyle = {
  width: 235,
  margin: 5
 }

 class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomIndex: '',
      inputColors:'',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie cursus tortor, non fringilla nisi porttitor sit amet.',
      author: '-Richard McClintock'
    }
    this.next = this.next.bind(this);
  }
  next(){
    this.setState({
      randomIndex: Math.floor(Math.random() * 10),//pretending theres 100 quotes
    })
  }
  componentDidMount() {
    document.getElementById('new-quote').onclick = () =>{
      fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
        .then(response => response.json())
        .then(data => {
          const randomQuoteNum = Math.floor(Math.random() * data.quotes.length);
          this.setState(
            {message: data.quotes[randomQuoteNum].quote,
            author: data.quotes[randomQuoteNum].author
            })
        })
    }
  }
  render() {
    const colorPalette = ["DarkAquaMarine", "LightSlateGray", "IndianRed", 
                          "Tan", "SteelBlue", "CadetBlue","rosybrown", 
                          "thistle","seagreen","olivedrap"];
    const chosenColor =colorPalette[this.state.randomIndex];
    const bgColor = {
      backgroundColor: chosenColor
    }
    const textColor = {
      color: chosenColor
    }
    return (
      <div id="backdrop" style = {bgColor}>
      <div id="quote-box">
        <p id = "text" style = {textColor}>
          {this.state.message}
        
        </p>
        <p id = "author" style = {textColor}>
          {this.state.author}
        </p>
        <div id = "buttons">
          <button style = {bgColor}><a id = "tweet-quote" href = "https://twitter.com/share?ref_src=twsrc%5Etfw" target = "_blank"><i id="birdie" class="fa fa-twitter"></i></a></button>
          <button onClick = {this.next} style = {bgColor}><a id = "new-quote">New Quote</a></button>
        </div>
      </div>
      <a id = "github" href = "https://github.com/alec-huang-labs" target = "_blank"><i class="fa fa-github"></i></a>
      </div>
    );
    }
 };
 export default App;
