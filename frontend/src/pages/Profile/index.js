import  React, {useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom'
import {FiPower, FiTrash2} from 'react-icons/fi'

import api from '../../serices/api'

import './style.css';
import '../../global.css';

import logoImg from '../../assests/logo.svg';
import { useState } from 'react';

export default function Profile(props){
    const history = useHistory();

    const [incidents,SetIncidents] = useState([]);
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');

    useEffect(()=> {
        api.get('profile',{
            headers:{
                Authorization: ongId,
            }
        }).then(response =>{
            SetIncidents(response.data)
        })
    },[ongId]);

    async function handleDeleteIncident(id){
        try {
            await api.delete(`incidents/${id}`,{
                headers:{
                    Authorization: ongId,
                }
            });

            SetIncidents(incidents.filter(incidents => incidents.id !== id));
        } catch (error) {
            alert('Erro ao excluit registro');
        }
    }

    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }

    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>Bem vinda, {ongName}</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#e02041"/>
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
               {incidents.map(incident => (
                <li key={incident.id}>
                <strong>CASO:</strong>
                <p>{incident.title}</p>

                <strong>DESCRIÇÃO:</strong>
                <p>{incident.description}</p>

                <strong>VALOR:</strong>
                <p>{Intl.NumberFormat('pt-BR', {style:'currency',currency:'BRL'}).format(incident.value)}</p>

                <button onClick={()=> handleDeleteIncident(incident.id)} type="button">
                    <FiTrash2 size={20} color="#a8a8b3"/>
                </button>
                </li>
               ))}
            </ul>

           
        </div>
    );
}