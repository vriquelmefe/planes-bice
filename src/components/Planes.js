import React, { useState} from 'react'
import axios from 'axios'
import Card from './Card'
import './style.css'


const options = [
  { name: "Seguro Vida Activa", id: 58 },
  { name: "Seguro Viaje Protegido", id: 59 },
];

export default function Planes() {
  const [selectedData, setSelectedData] = useState([]);
  const [selectedValue, setSelectedValue] = useState(1);

  const handleChange = (evt) => {
    evt.preventDefault();
    const { value } = evt.currentTarget;
    setSelectedValue(value);
  }
  const handleClick = async () => {
    const response = await axios.get(`https://dn8mlk7hdujby.cloudfront.net/interview/insurance/${selectedValue}`)
    setSelectedData(response.data.insurance);
  }
  
  return (
    <div className="container">
       <select onChange={handleChange}  className="select select-disable" defaultValue={'DEFAULT'}>
       {[ 
         
            <option className="select option" disabled key="DEFAULT" value='DEFAULT'>
              Seleccione una opción
            </option>,
            ...options.map(({ name, id }) => (
              <option  className="select" key={`option-${id}`} value={id}>
                {name}
              </option>
            )),
          ]}
      </select>
      <button onClick={handleClick} className="boton texto-boton"><label className="label">Buscar</label></button>
      <div className="container">
      {selectedData && <Card data={selectedData} />}
      </div>
    </div>
  )
  
}
