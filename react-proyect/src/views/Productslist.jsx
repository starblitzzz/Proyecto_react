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

export default function Productslist() {
  return (
    <div className="product-cont-all">
        <Container clas="cont-filter-list">
            <Container clas="cont-nav">
                <Title text="El Rincon del Libro" clas="title"/>
                <Button clas="b-cancel" text="cancelar compra"/>
                <Button clas="b-complet" text="completar compra"/>
            </Container>
            <Container clas="cont-filter">
              <Container clas="filters">
               <Label text="Filtrar por"/>
               <Label text="Nombre :"/>
               <Field clas="field-filter"/>
               <Label text="Precio :"/>
               <Field clas="field-filter"/>
               <Button text="Limpiar filtros" clas="b-clean-filters"/>
               <Button text="Aplicar filtros" clas="b-apply-filters"/>
              </Container>
            </Container>
            <Container clas="cont-list">
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
            </Container>
        </Container>
        <Container clas="cont-detail">
          <Container clas="detail">
            <Button  text="Agregar al carrito" clas="b-car"/>
            <Text text="Nombre:"/>
            <Image clas="i-detail"/>
            <Text text="Stock:"/>
            <Text text="Precio:"/>
            <Text text="Autor:"/>
            <Text text="Idioma:"/>
            <Text text="Encuadernacion:"/>
          </Container>
        </Container>
    </div>
  )
}
