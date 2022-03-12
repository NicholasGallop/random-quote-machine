import './App.css'
import Tweet from './components/Tweet'
import Tumblr from './components/Tumblr'
import DisplayQuote from './components/DisplayQuote'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col, Container} from 'react-bootstrap'
import {useState} from 'react'
import Data from 'C:/Users/Dan/random-quote-machine/src/db.json'

function App() {
  const random = Math.floor(Math.random()*Data.data.length)
  const [quoteAuth, setQuote] = useState({
    quote: Data.data[random].quote, 
    author: Data.data[random].author
  })
  const newQuote = () => {
      const random = Math.floor(Math.random()*100)
      const quot=Data.data[random].quote
      const auth=Data.data[random].author
      setQuote({quote: quot, author: auth})
  }

  return (
    <div>
      <div id="quote-box">
        <Container fluid='md'>
          <div className="container-fluid">
            <Row>
              <Col md={12}>
                <DisplayQuote quoteAuth={quoteAuth} />
              </Col>
            </Row>
          </div>
          <div className="container-fluid">
            <Row id='set-buttons'>
              <Col md={4} className='d-flex justify-content-center' id='tweet-tumb-col'>
                <Tweet quoteAuth={quoteAuth} />
                <Tumblr quoteAuth={quoteAuth} />
               </Col>
              
              <Col md={8} className='d-flex justify-content-center'> <button style={{ backgroundColor: 'steelblue' }} className=' btn' id='new-quote' onClick={()=>newQuote(setQuote, quoteAuth)} >newww</button> </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );

}

export default App;

/*
CREDIT: https://gist.github.com/nasrulhazim FOR QUOTES IN JSON
*/