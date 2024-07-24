import { Link } from 'react-router-dom';
import './App.css';
import Image from 'react-bootstrap/Image';
import { CiLinkedin } from "react-icons/ci";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import  { useEffect, useState } from 'react';

const texts = ['Albert Mossakowski'];
function App() {
    const [text, setText] = useState('');//text to aktualny renderowany text
    const [index, setIndex] = useState(0);// index to aktualny indeks tablicy

    useEffect(() => {//cel to renderowanie tekstu z tablicy
        const intervalId = setInterval(() => {//uruchamia funkcje ktora jest wykonywana co 150 milisekund
            if (text !== texts[index]) {
                setText(prevText => texts[index].slice(0, prevText.length + 1));
            } else {
                clearInterval(intervalId);//zatrzymuje interwal gdy juz wygenerujemy tekst
                setTimeout(() => {
                    setIndex((prevIndex) => (prevIndex + 1) % texts.length);
                    setText('');//resetuje tekst
                }, 2000); 
            }
        }, 150);

        return () => clearInterval(intervalId);
    }, [index, text]);

    return (
        <Container className="przylec d-flex flex-column align-items-center justify-content-center " style={{ height: '88vh' }}>
            
            <div>
                <Image src="../Public/NewFolder/obraz.jpg" style={{ width: '15vh', height: '15vh', objectFit: 'cover', border: '1px solid black' }} roundedCircle />

            </div>
            <div className="mt-2">
                <div className="text-center" >
                    <h1 className="typewriter textColor text-uppercase display-4  " >
                        {text}
                    </h1>
                    <footer className="blockquote-footer pt-2">Junior IT Specialist </footer>

                </div>
            </div>
            <div className="">
                <Button variant="info" as={Link} to="https://www.linkedin.com/in/albert-m-3a9111253/" ><Link className="navColor " to="https://www.linkedin.com/in/albert-m-3a9111253/"><CiLinkedin /></Link>More</Button>
                <Button variant="success" className="m-2"><Link className="navColor " to="/contact">Hire</Link></Button> 
            </div>
        
        </Container>
 
    );
   
}

export default App;