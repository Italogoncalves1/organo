import userEvent from "@testing-library/user-event";
import React, { useState } from "react";
import Button from "../Button";
import Dropdown from "../Dropdown";
import TextField from "../TextField";
import "./index.css";

const Form = (props) => {
  const [name, setName] = useState("")
  const [charge, setCharge] = useState("")
  const [img, setImg] = useState("")
  const [team, setTeam] = useState("")

   const handleSave = (e) =>{
    e.preventDefault()
    props.registeredEmployee({
      name,
      charge,
      img,
      team
    })
    setName("")
    setCharge("")
    setImg("")
    setTeam("")
   }
  return (
    <section className="form">

      <form onSubmit={handleSave}>

        <h2>Preencha os dados para criar o card do colaborador</h2>

        <TextField value={name} changed={value => setName(value)} required={true} label="Nome" placeholder="Digite seu nome" />

        <TextField value={charge} changed={value => setCharge(value)} required={true} label="Cargo" placeholder="Digite seu cargo" />

        <TextField value={img} changed={value => setImg(value)} label="Imagem" placeholder="Digite o endereço da imagem" />

        <Dropdown required={true} label='Time' itens={props.teams} value={team} changed={value => setTeam(value)}/>

        <Button>
          Criar Card
        </Button>
        
      </form>
    </section>
  );
};

export default Form;
