import React from 'react';
import './App.css';

 class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomColorIndex: '',
      inputColors:'',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie cursus tortor, non fringilla nisi porttitor sit amet.',
      author: 'Richard McClintock',
      apiText: ''
    }
    this.onClick = this.onClick.bind(this);
    this.nextColor = this.nextColor.bind(this);
    this.nextQuote = this.nextQuote.bind(this);
  }
  componentDidMount() {
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
        .then(response => response.json())
        .then(data => {
          this.setState({
            apiText: data
            })
        })
  }
  onClick() {
    this.nextColor();
    this.nextQuote();
  }

  nextColor() {
    let num =  Math.floor(Math.random() * 10);
    if (this.state.randomColorIndex === num){
      this.setState({
        randomColorIndex: num + 1
      })
    } else {
      this.setState({
        randomColorIndex: num
      })
    }
  }
  nextQuote() {
    const randomQuoteNum = Math.floor(Math.random() * this.state.apiText.quotes.length);
    this.setState(
      {message: this.state.apiText.quotes[randomQuoteNum].quote,
       author: this.state.apiText.quotes[randomQuoteNum].author
      })
  }
  render() {
    const colorPalette = ["DarkAquaMarine", "LightSlateGray", "IndianRed", 
                          "Tan", "SteelBlue", "CadetBlue","rosybrown", 
                          "thistle","seagreen","olivedrap","CadetBlue"];
    const chosenColor =colorPalette[this.state.randomColorIndex];
    const bgColor = {
      backgroundColor: chosenColor
    }
    const textColor = {
      color: chosenColor
    }
    let messageArr = this.state.message.split(" ");
    let htmlTweet = messageArr.join("%20");
    let tweetContent = "https://twitter.com/intent/tweet?text=".concat("\""+htmlTweet+"\"").concat("%20-%20" + this.state.author)
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
          <button style = {bgColor}><a id = "tweet-quote" href= {tweetContent} target = "_blank"><i id="birdie" class="fa fa-twitter"></i></a></button>
          <button onClick = {this.onClick} style = {bgColor}><a id = "new-quote">New Quote</a></button>
        </div>
      </div>
      <a id = "github" href = "https://github.com/alec-huang-labs" target = "_blank"><i class="fa fa-github"></i></a>
      </div>
    );
    }
 };
 export default App;
