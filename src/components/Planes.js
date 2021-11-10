import React, { useState } from 'react'
import axios from 'axios'

const Post = ({ data }) => {
  console.log(data)
  const { title, body } = data;
  return (
    <article>
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  );
};

export default function Planes() {
  const [selectedData, setSelectedData] = useState([]);
  const [selectedValue, setSelectedValue] = useState([]);

  const handleChange = async (evt,id) => {
    console.log('evt', evt.currentTarget)
    const { value } = evt.currentTarget;
    setSelectedValue(value);
    const response = await axios.get(`https://dn8mlk7hdujby.cloudfront.net/interview/insurance/${id}/`)
    console.log('response', response)
    setSelectedData(response.data);
  }
  return (
    <div className="">
       <select onChange={handleChange}>
        <option id="58" value="">Seguro vida Activa</option>
        <option id="59" value="">Seguro viaje Protegido</option>
      </select>
      {selectedData.length > 0 && <Post data={selectedData[selectedValue]} />}
    </div>
  )
  
}
