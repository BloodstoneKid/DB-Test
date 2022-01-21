import React, { useEffect, useState } from 'react';
import '../Sections.css';

function AgregarInstrumento({idDueno}){
    const [tipo, setTipo] = useState('');
    const [num_tarjeta, setNumTarjeta] = useState('');
    const [fecha_expedicion, setFechaExpedicion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');

    const id = {idDueno};


    const handleSubmit = (e) => {
        e.preventDefault();
        const instrumento = { tipo, num_tarjeta, fecha_expedicion, telefono, email, id } 
    

    fetch('/agregarinstrumento', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(instrumento)
    });
 };

    return(<section>
         <h2>Agregar instrumento</h2>
      <form onSubmit={handleSubmit}>
      <div class="card-body p-1">
      <label>Tipo:</label>
       <select name="tipo" 
       id="tipo" 
       required 
       onChange={(e) => setTipo(e.target.value)}>
        <option value={tipo}>Efectivo</option>
        <option value={tipo}>Transferencia</option>
        <option value={tipo}>Tarjeta</option>
       </select>
        <label>Numero de tarjeta:</label>
        <input 
          type= "number" 
          value={num_tarjeta}
          onChange={(e) => setNumTarjeta(e.target.value)}
        />
        <label>Fecha de vencimiento:</label>
        <input 
          type="date" 
          value={fecha_expedicion}
          onChange={(e) => setFechaExpedicion(e.target.value)}
        />
        <label>Telefono:</label>
        <input 
          type="number" 
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
        <label>Email:</label>
        <input 
          type="text" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Agregar</button>
        </div>
      </form>
    </section>);
}

export default AgregarInstrumento;