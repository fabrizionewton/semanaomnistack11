import  React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi'

import api from '../../serices/api'

import './style.css';
import '../../global.css';

import heroesImg from '../../assests/heroes.png';
import logoImg from '../../assests/logo.svg';

export default function Logon(props){

    const history = useHistory();
    
    const[id,setId] = useState('');

    async function handleLogon(e){
        e.preventDefault();

        try {
            const response = await api.post('sessions',{id});
            console.log(response);

            localStorage.setItem('ongId',id);
            localStorage.setItem('ongName',response.data.dados.name);
            history.push('/profile');
        } catch (error) {
            alert('Erro no login');
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>

                <form onSubmit={handleLogon}>
                    <h1>Faça seu logon</h1>
                    <input 
                        type="text" 
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                     />
                    <button type="submit" className="button">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tem cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heros"/>
        </div>
    );
}