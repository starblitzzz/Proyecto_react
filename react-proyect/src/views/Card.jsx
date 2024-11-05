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

export default function Card() {
  return (
    <div className="cont-product">
      <Image clas="i-product"/>
      <Text text="Nombre:"/>
      <Text text="Stock:"/>
      <Text text="Precio:"/>
      <Button text="Ver detalle" clas="b-detail"/>
    </div>
  )
}
