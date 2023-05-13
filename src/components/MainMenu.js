import { MainMenuContainer } from "../styles/MainMenuContainer";
import { BrowserRouter, Link } from 'react-router-dom';

export const MainMenu = () => {
    return(
        <MainMenuContainer>
          <nav>
            <ul>
              <li>
                <a href="/">Home </a>
              </li>
              <li>
                <a href="/about">Sobre</a>
              </li>
            </ul>
          </nav>
        </MainMenuContainer>
    )
};