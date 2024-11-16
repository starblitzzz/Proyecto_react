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
import Text from "../components/Text"
import Card from '../views/Card'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useTable } from 'react-table';

export default function Cart() {

  const {cart}=useCart()

 console.log(cart)
  return (
    <div className="cont-cart">
      <Container clas="cont-header">
        <Title text="El Rincon Literario"/>
      </Container>
      <Link to={"/list"}>
      <Button text="Regresar" clas="b-cart-return"/>
      </Link>
      <Title text="Carrito de compras"/>
     <Container clas="cont-table-summary">
      <Container clas="cont-table">

      </Container>
      <Container clas="cont-summary">
      <Container clas="summary">
        <Title text="Resumen de compra"/>
        <Text text="Productos seleccionados:"/>
        <Text text="Monto de compra:"/>
        <Text text="Cargo de domicilio:"/>
      </Container>
      </Container>
     </Container>
     <Form clas="cont-pay">
     <Title text="Informacion metodo de pago"/>
     <Label text="Nombre del titular"/>
     <Field/> 
     <Label text="Numero de Tarjeta"/>
     <Field/>
     <Label text="Fecha de caducidad"/>
     <Field/>
     <Label text="Codigo de seguridad"/>
     <Field/> 
     <Container clas="bs-cart">
     <Button text="Limpiar campos" clas="b-cancel-cart"/>
     <Button text="Completar compra" clas="b-pay"/>
     </Container>
     </Form>
    </div>
  )
}