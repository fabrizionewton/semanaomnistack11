import  React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import logoImg from '../../assests/logo.svg';

import api from '../../serices/api'
import './style.css';
import '../../global.css';

export default function Register(props){
    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[whatsApp,setWhatsApp] = useState('');
    const[city,setCity] = useState('');
    const[uf,setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

        const data ={
            name,
            email,
            whatsApp,
            city,
            uf,
        };

        try {
            const response = await api.post('ongs',data);
            console.log(response);

            alert(`Seu ID de acesso: ${response.data.dados}`);

            history.push('/');
        } catch (error) {
            alert('Erro no cadastro');
        }
    }

    return(
       <div className="register-container">
           <div className="content">
               <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na platadorma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para home
                    </Link>
               </section>

               <form onSubmit={handleRegister}>
                <input 
                    placeholder="Nome da ONG"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input 
                    type="email" 
                    placeholder="E-mail" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input 
                    placeholder="WhatsApp" 
                    value={whatsApp}
                    onChange={e => setWhatsApp(e.target.value)}
                />

                <div className="input-group">
                    <input 
                        placeholder="Cidade"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                    />
                    <input 
                        placeholder="UF" 
                        style={{width:80}}
                        value={uf}
                        onChange={e => setUf(e.target.value)}
                    />
                </div>

                <button type="submit" className="button">Cadastrar</button>

               </form>
           </div>
       </div>
    );
}