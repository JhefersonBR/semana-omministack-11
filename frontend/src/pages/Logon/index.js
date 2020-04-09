import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { FiLogIn } from 'react-icons/fi';
import api from '../../services/api';

import './styles.css';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg'
export default function Logon() {
    const [id, setId] = useState('');
    const nav = useHistory();

    async function handleLogin(e) {
        e.preventDefault();
        try {
            const response = await api.post('sessions', { id });
            localStorage.setItem('ongId',id);
            localStorage.setItem('ongName',response.data.name);

            
            nav.push('/profile');


        } catch (erro) {
            alert(erro);
        }
    }
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Logo" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input
                        placeholder="Sua ID"
                        onChange={e => setId(e.target.value)}
                        value={id}
                    />

                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register"><FiLogIn /> Não tenho cadastro</Link>
                </form>
            </section>
            <img src={heroesImg} alt="Herores" />
        </div>
    );
}