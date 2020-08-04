import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/26381390?s=460&u=6775009db62c92d76aa003a9df45450ee7017219&v=4" alt="Michel de Melo" />
                <div>
                    <strong>Michel de Melo</strong>
                    <span>WEB</span>
                </div>
            </header>
            <p>
                Estusiata das melhores tecnologias WEB.
                        <br /><br />

            </p>
            <footer>
                <p>
                    Preco/hora
                            <strong>R$ 30:00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="WhatsApp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    );
}

export default TeacherItem;