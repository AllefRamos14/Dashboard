import {
    Container, Toggle, Logo, Close, MenuLateral, Analyse, Sales, Status, Info, Progress, Percentage,
    Searches, Visits, NewUsers, ConteudoUsers, User
} from "./styles"
import logo from "../../assets/logo (2).png"
import imagem2 from "../../assets/profile-2.jpg";
import imagem3 from "../../assets/profile-3.jpg";
import imagem4 from "../../assets/profile-4.jpg";
import Plus from "../../assets/plus.png";

function Sidebar() {
    return (

        <Container>
            <aside>
                <Toggle>
                    <Logo>
                        <img src={logo} alt="logo-marca" />
                        <h2>Asmr<span className="danger">Prog</span></h2>
                    </Logo>
                    <Close>
                        <a href="">
                            <span className="material-symbols-outlined">
                                close
                            </span>
                            {/* <h2>close</h2> */}
                        </a>
                    </Close>
                </Toggle>
                <MenuLateral>
                    <a href="#">
                        <span className="material-symbols-outlined">
                            dashboard
                        </span>
                        <h3>dashboard</h3>
                    </a>


                    <a href="#">
                        <span className="material-symbols-outlined">
                            Person
                        </span>
                        <h3>Users</h3>
                    </a>

                    <a href="#">
                        <span className="material-symbols-outlined">
                            Receipt_Long
                        </span>
                        <h3>History</h3>
                    </a>

                    <a href="#">
                        <span className="material-symbols-outlined">
                            insights
                        </span>
                        <h3>Analytics</h3>
                    </a>

                    <a href="#">
                        <span class="material-symbols-outlined">
                            mail_outline
                        </span>
                        <h3>Tickets</h3>
                        <span class="message-count">27</span>
                    </a>

                    <a href="#">
                        <span className="material-symbols-outlined">
                            inventory
                        </span>
                        <h3>Sale  List</h3>
                    </a>

                    <a href="#">
                        <span className="material-symbols-outlined">
                            report_gmailerrorred
                        </span>
                        <h3>Reports</h3>
                    </a>

                    <a href="#">
                        <span className="material-symbols-outlined">
                            settings
                        </span>
                        <h3>Settings</h3>
                    </a>

                    <a href="#">
                        <span className="material-symbols-outlined">
                            add
                        </span>
                        <h3>Novo login</h3>
                    </a>
                    <div className="Sair">
                        <a href="#">
                            <span className="material-symbols-outlined">
                                logout
                            </span>
                            <h3>Sair</h3>
                        </a>
                    </div>
                </MenuLateral>
            </aside>
            <main>
                <h1>Analytics</h1>

                <div className="ContainerDivisor">
                    <Analyse>
                        <Sales>
                            <Status>
                                <Info>
                                    <h3>Total Sales</h3>
                                    <h1>$65,024</h1>
                                </Info>
                                <Progress>
                                    <svg>
                                        <circle cx="38" cy="38"
                                            r="36"></circle>
                                    </svg>
                                    <Percentage>
                                        <p>+81%</p>
                                    </Percentage>
                                </Progress>
                            </Status>
                        </Sales>
                    </Analyse>

                    <Visits>
                        <Status>
                            <Info>
                                <h3>Site Visit</h3>
                                <h1>24,981</h1>
                            </Info>
                            <Progress>
                                <svg>
                                    <circle cx="38" cy="38"
                                        r="36"></circle>
                                </svg>
                                <Percentage>
                                    <p>-48%</p>
                                </Percentage>
                            </Progress>
                        </Status>
                    </Visits>

                    <Searches>
                        <Status>
                            <Info>
                                <h3>Searches</h3>
                                <h1>14,147</h1>
                            </Info>
                            <Progress>
                                <svg>
                                    <circle cx="38" cy="38"
                                        r="36"></circle>
                                </svg>
                                <Percentage>
                                    <p>+21%</p>
                                </Percentage>
                            </Progress>
                        </Status>
                    </Searches>

                </div>

                <NewUsers>
                    <h2>New Users</h2>

                    <ConteudoUsers>

                        <User>
                            <img src={imagem2} alt="foto-personal" />
                            <h2>Jack</h2>
                            <p>54 Min Ago</p>
                        </User>


                        <User>
                            <img src={imagem3} alt="foto-personal" />
                            <h2>Amir</h2>
                            <p>3 Hours Ago</p>
                        </User>

                        <User>
                            <img src={imagem4} alt="foto-personal" />
                            <h2>Ember</h2>
                            <p>6 Hours Ago</p>
                        </User>

                        <User>
                            <img src={Plus} alt="foto-plus" />
                            <h2>More</h2>
                            <p>New User</p>
                        </User>


                    </ConteudoUsers>
                </NewUsers>

            </main>





        </Container >

    )
}
export default Sidebar