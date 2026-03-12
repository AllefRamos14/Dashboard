import {
    Container,
    Toggle,
    Logo,
    Close,
    MenuLateral,
    Analyse,
    Sales,
    Searches,
    Visits,
    NewUsers,
    ConteudoUsers,
    User,
    Profile,
    Info,
    Imagem,
    Section,
    LogoArea,
    Reminder,
} from "./styles";

import AnalyticsCard from "../../Components/Cards-de-análise";
import RecentOrders from "../../Components/RecentOrders";

import logo from "../../assets/logo (2).png";
import imagem2 from "../../assets/profile-2.jpg";
import imagem3 from "../../assets/profile-3.jpg";
import imagem4 from "../../assets/profile-4.jpg";
import Plus from "../../assets/plus.png";
import { useEffect, useState } from "react";


const menuItems = [
    { id: 1, icon: "dashboard", label: "Dashboard" },
    { id: 2, icon: "person", label: "Users" },
    { id: 3, icon: "receipt_long", label: "History" },
    { id: 4, icon: "insights", label: "Analytics" },
    { id: 5, icon: "mail_outline", label: "Tickets", count: 27 },
    { id: 6, icon: "inventory", label: "Sale List" },
    { id: 7, icon: "report_gmailerrorred", label: "Reports" },
    { id: 8, icon: "settings", label: "Settings" },
    { id: 9, icon: "add", label: "Novo login" },
];

const users = [
    { id: 1, img: imagem2, name: "Jack", time: "54 Min Ago" },
    { id: 2, img: imagem3, name: "Amir", time: "3 Hours Ago" },
    { id: 3, img: imagem4, name: "Ember", time: "6 Hours Ago" },
    { id: 4, img: Plus, name: "More", time: "New User" },
];

const reminders = [
    {
        id: 1,
        icon: "volume_up",
        iconId: "icone",
        title: "Workshop",
        time: "08:00 AM - 12:00 PM",
    },
    {
        id: 2,
        icon: "edit",
        iconId: "icone-laps",
        title: "New Project",
        time: "01:00 PM - 03:00 PM",
    },
];

function Home() {
    const [darkMode, setDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(true);


    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-theme")
        } else {
            document.body.classList.remove("dark-theme")
        }
    }, [darkMode])



    return (
        <Container className={darkMode ? "dark-theme" : ""}>
            {isMenuOpen && (
                <aside >
                    <Toggle>
                        <Logo>
                            <img src={logo} alt="Logo AsmrProg" />
                            <h2>
                                Asmr<span className="danger">Prog</span>
                            </h2>
                        </Logo>

                        <Close>
                            <button type="button" onClick={() => setIsMenuOpen(false)}>
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </Close>
                    </Toggle>

                    <MenuLateral className="menu">
                        {menuItems.map((item) => (
                            <a href="#" key={item.id}>
                                <span className="material-symbols-outlined">{item.icon}</span>
                                <h3>{item.label}</h3>
                                {item.count ? (
                                    <span className="message-count">{item.count}</span>
                                ) : null}
                            </a>
                        ))}

                        <div className="Sair">
                            <a href="#">
                                <span className="material-symbols-outlined">logout</span>
                                <h3>Sair</h3>
                            </a>
                        </div>
                    </MenuLateral>
                </aside>
            )}

            <main>
                <h1 className="Analytics">Analytics</h1>

                <div className="ContainerDivisor">
                    <Analyse>
                        <Sales>
                            <AnalyticsCard
                                title="Total Sales"
                                value="$65,024"
                                percent="+81%"
                            />
                        </Sales>

                        <Visits>
                            <AnalyticsCard
                                title="Site Visit"
                                value="24,981"
                                percent="-48%"
                            />
                        </Visits>

                        <Searches>
                            <AnalyticsCard
                                title="Searches"
                                value="14,147"
                                percent="+21%"
                            />
                        </Searches>
                    </Analyse>
                </div>

                <NewUsers>
                    <h2>New Users</h2>

                    <ConteudoUsers className="Dark-Users">
                        {users.map((user) => (
                            <User key={user.id}>
                                <img src={user.img} alt={user.name} />
                                <h2>{user.name}</h2>
                                <p>{user.time}</p>
                            </User>
                        ))}
                    </ConteudoUsers>
                </NewUsers>

                <RecentOrders />
            </main>

            <Section>
                <nav>
                    {!isMenuOpen && (
                        <button
                            className="Button"
                            onClick={() => setIsMenuOpen(true)}>
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                    )}

                    <div className="dark-mode">
                        <span
                            onClick={() => setDarkMode(false)}
                            className={`material-symbols-outlined ${!darkMode ? "active" : ""
                                }`}
                        >
                            light_mode
                        </span>

                        <span
                            onClick={() => setDarkMode(true)}
                            className={`material-symbols-outlined ${darkMode ? "active" : ""
                                }`}
                        >
                            dark_mode
                        </span>
                    </div>

                    <Profile>
                        <Info>
                            <p>
                                Olá, <b>Reza</b>
                            </p>
                            <small className="text-muted">Admin</small>
                        </Info>

                        <Imagem>
                            <img src={imagem2} alt="Foto do perfil" />
                        </Imagem>
                    </Profile>
                </nav>

                <LogoArea className="Dark-logo">
                    <img src={logo} alt="Logo" />
                    <h2>AsmrProg</h2>
                    <p>Fullstack Web Developer</p>
                </LogoArea>

                <Reminder className="Dark-reminder">
                    <div className="logo">
                        <h2 className="Titlo">Reminders</h2>
                        <span className="material-symbols-outlined">notifications</span>
                    </div>

                    <div className="Notificacoes">
                        {reminders.map((item) => (
                            <div className="Icons" key={item.id}>
                                <span id={item.iconId} className="material-symbols-outlined">
                                    {item.icon}
                                </span>

                                <div className="info">
                                    <div className="Title">
                                        <p>{item.title}</p>
                                        <small className="text-muted">{item.time}</small>
                                    </div>

                                    <span className="material-symbols-outlined">more_vert</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="notification-add-reminder">

                        <div className="Titlo-add-reminder">

                            <span className="material-symbols-outlined">
                                add
                            </span>
                            <h3>Add Reminder</h3>

                        </div>
                    </div>


                </Reminder>
            </Section>
        </Container>
    );
}

export default Home;