import React,{ useState, useEffect } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';


const Banner = () => {
  const [loopNum, setLoopNum] = useState(0); //index of loop that iterates the words
  const toRotate = ['Web Developer', 'React Developer', 'Front-end Developer']; //words that will be written in screen
  const [isDeleting, setIsDeleting] = useState(false); //this will indicate true if the word is getting deleted on screen or false if it's getting written.
  const [text, setText] = useState(''); //This will indicate the current character that is getting written on screen, example: 'w' then 'e' then 'b' for the word 'web'.
  const [delta, setDelta] = useState(300 - Math.random() * 100); //how fast one letter writes after the other.
  const period = 2000; //This indicate the time that passes between each word in the list.

  useEffect(()=>{
    let ticker = setInterval(()=>{
        tick();                          //This will help to make the deletion faster than the typing. because that's how works in real life.
    },delta)

    return () => {clearInterval(ticker)};
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if(isDeleting){
        setDelta(prevDelta => prevDelta /2)
    }
    //checks if the typing is done and starts deleting or if the deleting is done and has to start typing.
    if(!isDeleting && updatedText === fullText){
        setIsDeleting(true);
        setDelta(period);
    } else if(isDeleting && updatedText === ''){
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
    }
  }

  return (
    <section className='banner' id='home'>
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                    <span className='welcome-text'>Welcome to my portfolio!</span>
                    <h1>{`>Hi!, I'm Landry. `}<span className='wrap'>{text}</span><span id='terminalSquare'>.</span></h1>
                    <p>I'm a Front end developer from Argentina. I did projects on my own and for an educational institution. Some of these projects can be seen in the section <a style={{textDecoration:'underline',color:'#fff'}} href='#project'>Projects</a></p>
                    <a href='#connect'><button onClick={() => console.log('connect')}>Let's connect!<ArrowRightCircle size={25}/></button></a>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    {/* <img src={headerImg} alt='Header Img'/> */}
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner