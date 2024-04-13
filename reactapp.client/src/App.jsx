import { Link } from 'react-router-dom';
import './App.css';
import Image from 'react-bootstrap/Image';
import { CiLinkedin } from "react-icons/ci";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
function App() {
    

    return (
        <Container className="d-flex flex-column align-items-center justify-content-center " style={{ height: '91vh' }}>
            
            


            
            <div>
                <Image src="../Public/NewFolder/obraz.jpg" style={{ width: '15vh', height: '15vh', objectFit: 'cover', border: '1px solid black' }} roundedCircle />

            </div>
            <div className="mt-2">
                <div className="text-center" >
                    <h1 className=" textColor text-uppercase display-4  " >
                        Albert Mossakowski
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