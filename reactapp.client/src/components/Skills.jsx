import Container from 'react-bootstrap/Container';
import './Skills.css';
import { FaJava } from "react-icons/fa6";
import { FiDatabase } from "react-icons/fi";
import { SiMicrosoftexcel } from "react-icons/si";
import { FcLinux } from "react-icons/fc";
import { FaReact } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import SkillCard from './SkillCard.jsx';

export function Skills() {

    return (
        <Container fluid className="d-flex align-items-center justify-content-center example-element" >\
            
            <section className="przylec py-5 py-xl-6">
               
                <div className="container overflow-hidden">
                    <div className="row justify-content-xl-center gy-3 gy-sm-4">
                        <div className="col-12 col-sm-6 col-xl-5">
                            <SkillCard
                                title="Java"
                                icon={<FaJava style={{ fontSize: '40px' }} />}
                                progressBg="bg-success"
                                progressWidth="85"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-xl-5">
                            <SkillCard
                                title="SQL"
                                icon={<FiDatabase style={{ fontSize: '40px' }} />}
                                progressBg="bg-success"
                                progressWidth="75"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-xl-5">
                            <SkillCard
                                title="Excel"
                                icon={<SiMicrosoftexcel style={{ fontSize: '40px' }} />}
                                progressBg="bg-success"
                                progressWidth="95"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-xl-5">
                            <SkillCard
                                title="Bash"
                                icon={<FcLinux style={{ fontSize: '40px' }} />}
                                progressBg="bg-warning"
                                progressWidth="50"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-xl-5">
                            <SkillCard
                                title="React"
                                icon={<FaReact style={{ fontSize: '40px' }} />}
                                progressBg="bg-danger"
                                progressWidth="30"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-xl-5">
                            <SkillCard
                                title="C++"
                                icon={<SiCplusplus style={{ fontSize: '30px' }} />}
                                progressBg="bg-danger"
                                progressWidth="30"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </Container>


    );
}