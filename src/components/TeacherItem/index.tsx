import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/53797821?s=460&u=b98f51f8c959d84d4ef269642a785de61ad2dfc3&v=4"
          alt="Emmanuel Messias"
        />
        <div>
          <strong>Emmanuel Messias</strong>
          <span>Gambiarras</span>
        </div>
      </header>
      <p>
        Amante de gambiarras e códigos sujos sempre tentando piorar.
        <br />
        Apaixonado por quebrar códigos em produção e commitar direto na master.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 50,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
