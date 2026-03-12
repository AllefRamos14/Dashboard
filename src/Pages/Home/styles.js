import styled from "styled-components";

const CardBase = styled.div`
  background-color: var(--bg-card);
  padding: 16px;
  border-radius: 24px;
  margin-top: 17px;
  box-shadow: var(--shadow-main);
  cursor: pointer;
  min-height: 140px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  color: var(--text-main);

  transition:
    background-color 0.4s ease,
    color 0.35s ease,
    box-shadow 0.35s ease,
    transform 0.25s ease,
    border-color 0.35s ease;

  &:hover {
    box-shadow: none;
    transform: translateY(-2px);
  }

  @media (max-width: 576px) {
    padding: 14px;
    border-radius: 18px;
    min-height: 120px;
  }
`;

export const Container = styled.div`
  --bg-main: #f8f7f7;
  --bg-card: #ffffff;
  --bg-soft: #e6e6fa;
  --text-main: #363949;
  --text-soft: #7d8da1;
  --text-strong: #1c1c1c;
  --shadow-main: 0 32px 48px rgba(132, 139, 200, 0.18);
  --hover-soft: rgba(132, 139, 200, 0.18);
  --accent: #6c9bcf;
  --danger: #ff0060;
  --dark-card: #202528;
  --dark-bg: #181a1e;
  --dark-text-soft: #a3bdcc;

  display: grid;
  grid-template-columns: 220px minmax(0, 1fr) 320px;
  grid-template-areas: "aside main section";
  gap: 24px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 20px;
  min-height: 100vh;
  background-color: var(--bg-main);
  color: var(--text-main);

  transition:
    background-color 0.4s ease,
    color 0.35s ease;

  aside {
    grid-area: aside;
    min-height: 100%;
  }

  main {
    grid-area: main;
    margin-top: 22px;
    width: 100%;
    min-width: 0;

    h1 {
      color: var(--text-main);
      font-size: 30px;
      font-weight: 900;
      margin-bottom: 8px;
      transition: color 0.35s ease;
    }
  }

  .ContainerDivisor {
    width: 100%;
    min-width: 0;
  }

  &.dark-theme {
    --bg-main: #181a1e;
    --bg-card: #202528;
    --bg-soft: #2b3138;
    --text-main: #f5f5f5;
    --text-soft: #b0b8c1;
    --text-strong: #ffffff;
    --shadow-main: 0 12px 24px rgba(0, 0, 0, 0.2);
    --hover-soft: rgba(255, 255, 255, 0.06);
  }

  h1,
  h2,
  h3,
  p,
  b,
  small,
  span,
  a {
    transition:
      color 0.35s ease,
      background-color 0.35s ease,
      border-color 0.35s ease,
      box-shadow 0.35s ease;
  }

  &.dark-theme .paragrafcard {
    color: #000;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 200px minmax(0, 1fr);
    grid-template-areas:
      "aside main"
      "aside section";
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "aside"
      "section"
      "main";
    padding: 16px;
  }

  @media (max-width: 576px) {
    gap: 16px;
    padding: 12px;

    main {
      margin-top: 0;
    }

    main h1 {
      font-size: 24px;
    }
  }
`;

export const Toggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 22px;
  gap: 12px;

  h2 {
    color: var(--text-strong);
    font-weight: 800;
    font-size: 28px;
    transition: color 0.35s ease;
  }

  .danger {
    color: var(--danger);
  }

  @media (max-width: 576px) {
    margin-top: 10px;

    h2 {
      font-size: 24px;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;

  img {
    width: 32px;
    height: 32px;
    object-fit: contain;
    flex-shrink: 0;
  }

  @media (max-width: 576px) {
    img {
      width: 28px;
      height: 28px;
    }
  }
`;

export const Close = styled.div`
  padding-right: 16px;
  display: none;

  a,
  button {
    color: var(--text-main);
    background: transparent;
    border: none;
    cursor: pointer;
    transition: color 0.35s ease;
  }

  @media (max-width: 992px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 0;
  }
`;

export const MenuLateral = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--bg-card);
  box-shadow: var(--shadow-main);
  border-radius: 15px;
  min-height: calc(100vh - 80px);
  position: relative;
  top: 24px;
  padding: 10px 0;

  transition:
    background-color 0.4s ease,
    box-shadow 0.35s ease;

  &:hover {
    box-shadow: none;
  }

  a {
    display: flex;
    align-items: center;
    color: var(--text-soft);
    min-height: 58px;
    gap: 14px;
    position: relative;
    margin: 0 12px;
    padding: 0 16px;
    border-radius: 12px;
    text-decoration: none;
    min-width: 0;

    transition:
      background-color 0.3s ease,
      color 0.3s ease,
      transform 0.25s ease;
  }

  a span {
    flex-shrink: 0;
    transition:
      color 0.3s ease,
      transform 0.25s ease;
  }

  a h3 {
    flex: 1;
    min-width: 0;
    font-size: 18px;
    font-weight: 600;
    color: inherit;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    letter-spacing: normal;
    word-spacing: normal;

    transition:
      color 0.3s ease,
      transform 0.25s ease;
  }

  .Sair {
    margin-top: auto;
    padding-bottom: 16px;
  }

  a:hover {
    background-color: var(--hover-soft);
  }

  a:hover::before {
    content: "";
    position: absolute;
    left: 0;
    width: 5px;
    height: 60%;
    background-color: var(--accent);
    border-radius: 0 8px 8px 0;
  }

  a:hover span,
  a:hover h3 {
    color: var(--accent);
    transform: translateX(4px);
  }

  .message-count {
    margin-left: auto;
    background-color: var(--danger);
    padding: 4px 8px;
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    border-radius: 6px;
    flex-shrink: 0;
    white-space: nowrap;
  }

  a.active {
    background-color: var(--hover-soft);
    color: var(--accent);
  }

  a.active::before {
    content: "";
    position: absolute;
    left: 0;
    width: 5px;
    height: 60%;
    background-color: var(--accent);
    border-radius: 0 8px 8px 0;
  }

  a.active span,
  a.active h3 {
    color: var(--accent);
  }

  @media (max-width: 1200px) {
    a {
      gap: 12px;
      padding: 0 12px;
    }

    a h3 {
      font-size: 16px;
    }
  }

  @media (max-width: 992px) {
    min-height: auto;
    top: 0;
    margin-top: 16px;
  }

  @media (max-width: 576px) {
    border-radius: 12px;
    padding: 8px 0;

    a {
      min-height: 50px;
      margin: 0 8px;
      padding: 0 10px;
      gap: 10px;
    }

    a h3 {
      font-size: 15px;
    }

    .message-count {
      font-size: 11px;
      padding: 3px 6px;
    }
  }
`;

export const Analyse = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  width: 100%;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const Sales = styled(CardBase)`
  circle {
    stroke: #1b9c85;
    stroke-dashoffset: -38;
    stroke-dasharray: 200;
  }
`;

export const Searches = styled(CardBase)`
  circle {
    stroke: #6c9bcf;
    stroke-dashoffset: -38;
    stroke-dasharray: 200;
  }
`;

export const Visits = styled(CardBase)`
  circle {
    stroke: #ff0060;
    stroke-dashoffset: -38;
    stroke-dasharray: 200;
  }
`;

export const NewUsers = styled.div`
  margin-top: 35px;

  h2 {
    color: var(--text-main);
    margin-bottom: 17px;
    transition: color 0.35s ease;
  }

  @media (max-width: 576px) {
    margin-top: 24px;

    h2 {
      font-size: 22px;
      margin-bottom: 14px;
    }
  }
`;

export const ConteudoUsers = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  align-items: center;
  text-align: center;
  gap: 20px;
  min-height: 191px;
  width: 100%;
  border-radius: 20px;
  background-color: var(--bg-card);
  box-shadow: var(--shadow-main);
  cursor: pointer;
  padding: 20px;

  transition:
    background-color 0.4s ease,
    box-shadow 0.35s ease,
    color 0.35s ease;

  &:hover {
    box-shadow: none;
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    padding: 16px;
    gap: 16px;
    border-radius: 16px;
  }
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 0;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
  }

  h2 {
    margin-top: 8px;
    font-size: 18px;
    color: var(--text-main);
    transition: color 0.35s ease;
  }

  p {
    margin-top: 2px;
    color: var(--text-soft);
    font-size: 14px;
    transition: color 0.35s ease;
  }

  @media (max-width: 576px) {
    img {
      width: 54px;
      height: 54px;
    }

    h2 {
      font-size: 16px;
    }

    p {
      font-size: 13px;
    }
  }
`;

export const Section = styled.section`
  grid-area: section;
  width: 100%;
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-width: 0;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    color: var(--text-main);
    transition: color 0.35s ease;
  }

  .dark-mode {
    display: flex;
    align-items: center;
    background: var(--bg-soft);
    border-radius: 10px;
    overflow: hidden;
    transition: background-color 0.35s ease;
  }

  .dark-mode span {
    font-size: 19px;
    padding: 8px 12px;
    cursor: pointer;
    color: var(--text-main);
    transition:
      background-color 0.35s ease,
      color 0.35s ease,
      transform 0.25s ease;
  }

  .dark-mode .active {
    background: var(--accent);
    color: #fff;
    border-radius: 7px;
  }

  @media (max-width: 992px) {
    margin-top: 0;

    nav {
      justify-content: flex-start;
    }
  }

  @media (max-width: 576px) {
    gap: 16px;

    nav {
      flex-direction: column;
      align-items: flex-start;
      gap: 14px;
    }

    .dark-mode span {
      font-size: 17px;
      padding: 7px 10px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 576px) {
    gap: 10px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  gap: 4px;
  color: var(--text-soft);
  font-size: 16px;
  font-style: italic;

  b {
    color: var(--text-strong);
    transition: color 0.35s ease;
  }

  .text-muted {
    margin-left: 0;
    font-size: 13px;
    color: var(--text-soft);
  }

  @media (max-width: 576px) {
    font-size: 14px;
    text-align: left;

    .text-muted {
      font-size: 12px;
    }
  }
`;

export const Imagem = styled.div`
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }

  @media (max-width: 576px) {
    img {
      width: 44px;
      height: 44px;
    }
  }
`;

export const LogoArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 300px;
  border-radius: 28px;
  background-color: var(--bg-card);
  box-shadow: var(--shadow-main);
  padding: 24px;
  text-align: center;

  transition:
    background-color 0.4s ease,
    color 0.35s ease,
    box-shadow 0.35s ease;

  &:hover {
    box-shadow: none;
  }

  img {
    width: 180px;
    height: 180px;
    object-fit: cover;
  }

  h2 {
    padding: 10px 0;
    color: var(--text-main);
    transition: color 0.35s ease;
  }

  p {
    color: var(--text-soft);
    font-weight: 500;
    transition: color 0.35s ease;
  }

  @media (max-width: 576px) {
    min-height: 240px;
    padding: 18px;
    border-radius: 22px;

    img {
      width: 130px;
      height: 130px;
    }

    h2 {
      font-size: 22px;
    }

    p {
      font-size: 14px;
    }
  }
`;

export const Reminder = styled.div`
  .logo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
    gap: 12px;

    h2 {
      color: var(--text-main);
      font-size: 22px;
      transition: color 0.35s ease;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--bg-card);
      width: 48px;
      height: 48px;
      border-radius: 50%;
      box-shadow: var(--shadow-main);
      color: var(--text-main);
      flex-shrink: 0;

      transition:
        background-color 0.35s ease,
        color 0.35s ease,
        box-shadow 0.35s ease;
    }
  }

  .Notificacoes {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .Icons {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 20px;
    background-color: var(--bg-card);
    border-radius: 19px;
    box-shadow: var(--shadow-main);

    transition:
      background-color 0.4s ease,
      box-shadow 0.35s ease,
      color 0.35s ease;

    &:hover {
      box-shadow: none;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    #icone,
    #icone-laps {
      padding: 14px;
      color: #fff;
      border-radius: 13px;
      font-size: 19px;
      flex-shrink: 0;
    }

    #icone {
      background-color: #1b9c85;
    }

    #icone-laps {
      background-color: #bc2e2e;
    }
  }

  .info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 16px;
    min-width: 0;
  }

  .Title {
    display: flex;
    flex-direction: column;
    gap: 5px;
    min-width: 0;

    p {
      margin: 0;
      color: var(--text-main);
      font-weight: 600;
      font-size: 15px;
      transition: color 0.35s ease;
    }

    small {
      color: var(--text-soft);
      font-size: 13px;
      transition: color 0.35s ease;
    }
  }

  .info span:last-child {
    cursor: pointer;
    color: var(--text-soft);
    font-size: 19px;
    flex-shrink: 0;
    transition: color 0.35s ease;
  }

  .notification-add-reminder {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--bg-card);
    border-radius: 16px;
    border: dashed 3px var(--accent);
    padding: 20px;
    margin-top: 20px;
    box-shadow: var(--shadow-main);
    cursor: pointer;

    transition:
      background-color 0.4s ease,
      box-shadow 0.35s ease,
      border-color 0.35s ease;

    &:hover {
      box-shadow: none;
    }
  }

  .Titlo-add-reminder {
    display: flex;
    align-items: center;
    gap: 10px;

    h3 {
      color: var(--accent);
      font-size: 15px;
      font-weight: 500;
    }

    span {
      color: var(--accent);
    }
  }

  @media (max-width: 576px) {
    .logo h2 {
      font-size: 20px;
    }

    .Icons {
      padding: 16px;
      gap: 12px;
    }

    .Title p {
      font-size: 14px;
    }

    .Title small {
      font-size: 12px;
    }
  }
`;