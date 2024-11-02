import React from 'react'
import Form from "../components/Form"
import Title from "../components/Title"
import Label from "../components/Label"
import Field from "../components/Field"
import Selector from "../components/Selector"
import Button from "../components/Button"
import Container from "../components/Container"
import Image from "../components/Image"
import libreria from "../images/libreria.jpg"
import App from '../App.css'

export default function Require() {
  return (
    <div className="require">
      <Container clas="cont-all">
      <Container clas="cont-f">
      <Form >
       <Title text="El Rincon Literario" />
       <Label text="Nombre del comprador"/>
       <Field placeholder="Ingrese un nombre" type="text"/>
       <Label text="Presupuesto"/>
       <Field placeholder="Ingrese un valor" type="number"/>
       <Label text="Direccion"/>
       <Field placeholder="Ingrese el lugar de destino" type="text"/>
       <Label text="Tipo de entrega"/>
       <Selector/>
       <Button text="Iniciar compra" clas="b-buy"/> 
       <Button text="Limpiar campos " clas="b-clean"/>
       </Form>
       </Container>
       <Container clas="cont-image">
       <Image src={libreria} clas="img-f" /> 
       </Container>
       </Container>
    </div>
  )
}
