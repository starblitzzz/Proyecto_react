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

export default function Card({img,name,stock,price,click}) {
  return (
    <div className="cont-product">
      <Image clas="i-product" src={img}/>
      <Container clas="d-product">
      <Text text="Nombre:" />
      <Text text={name}/>
      <Text text="Stock:"/><Text text={stock}/>
      <Text text="Precio:"/><Text text={price}/>
      <Button click={click} text="Ver detalle" clas="b-detail" />
      </Container>
    </div>
  )
}
