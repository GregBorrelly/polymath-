import React, {Component} from 'react';
import './App.css';

const Book = ({title, volume, pages}) => {
  let _pages = ``
  pages.forEach((page, index) => {
    if(index === 0){
      _pages = `${_pages}${page}`
    } else {

      _pages = `${_pages}, ${page}`
    }
  });
  return (
  <div className="book">        
    <h2>- {title} -</h2>
  <p className="page-message">Today's reading is based on </p>
  {
    volume ? <p className="volume">Volume: {volume}</p> : ''
  }
  <p className="pages">page(s) { `${_pages}`}</p>
  </div>)
}

export default class App extends Component {
  state = {
    books: [
      {
        title: 'Guide to Essential Knowledge',
        pages: this.RandomSelection(2,1302,3)
      },
      {
        title: 'Encyclopedia Britannica',
        volume: this.volumeSelection([22,23,24,16,17,13,21,20,19]),
        pages: this.RandomSelection(1,1035,3)
      },
      {
        title: 'The Best American Essays of the Century',
        pages: this.RandomSelection(1,590,1)
      },
      {
        title: 'Classic Poetry',
        pages: this.RandomSelection(1,10,1)
      },
      {
        title: `The World's Famous Orations`,
        pages: this.RandomSelection(1,10,1),
        volume: this.volumeSelection([1,2,3,4,5,6,7,8,9,10]),
      }
    ]
  }

  RandomSelection(min, max, reps){
    const random = (min, max) => Math.floor(Math.random() * max) + min;
    let randomlyGeneratedPages = [];

    for (let index = 0; index < reps; index++) {
      const page = random(min,max);
      randomlyGeneratedPages.push(page);
    }
    debugger;
    return randomlyGeneratedPages
  }

  volumeSelection(volume){
    const random =  Math.floor(Math.random() * volume.length) + 1;
    return volume[random]
  

  }

  render() {
    const { books } = this.state
    return (
      <div className="App page">
        <h1>- Polymath - </h1>
        <span>Building the modern philosophe</span>

        {
          books.map(book => <Book {...book}/>)
        }

      </div>
    );
  }
}