import React, { useState } from 'react'
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
import {useForm} from "react-hook-form"
import Option from "../components/Option"

export default function Require() {

  

  
  const [require, setRequire]=useState(
    {
      name:"",
      budget:0,
      address:"",
      delivery:null
    }
  )
  const handleClick = () => {
    const {name, budget, address } = getValues();
    setRequire({...require,name: name})
    console.log(require.name)
    console.log(require)
  };

  const onSubmit=(data)=>{
    console.log(data)
  }
 

  const { register, handleSubmit, formState: { errors }, resetField, getValues,reset } = useForm();
  return (

    <div className="require" >
      
      <Container clas="cont-all">
      <Container clas="cont-f">
      <Form clas="Form" submit={handleSubmit(onSubmit)} >
      <button type= "submit" onClick={handleSubmit(onSubmit)}></button>
       <Title text="El Rincon Literario" />
       <Label text="Nombre del comprador"/>
       <Field placeholder="Ingrese un nombre" type="text"  {...register("name" , {
        required: true,
        maxLength:20,
        minLength:10,
       })
       }/>
       {errors.name?.type === "required" && <p className="f-error">Este campo es obligatorio</p>}
       {errors.name?.type === "maxLenght" && <p className="f-error">Este campo no puede superar los 20 caracteres</p>}
       {errors.name?.type === "minLength" && <p className="f-error" >Este campo no puede tener menos de 10 caracteres</p>}

       <Label text="Presupuesto"/>
       <Field placeholder="Ingrese un valor" type="number" {...register("budget",{
        required:true,
        min: 10000
       })
       }/>
       {errors.budget?.type === "required" && <p className="f-error">Este campo es obligatorio</p>}
       {errors.budget?.type === "min" && <p className="f-error">El valor minimo permitido es $10000</p>}
       
       <Label text="Direccion"/>
       <Field placeholder="Ingrese el lugar de destino" type="text" {...register("address",{
        required:true
       })
       }/>
       {errors.address?.type === "required" && <p className="f-error">Este campo es obligatorio</p>}
       <Label text="Tipo de entrega"/>
       <Selector disable="Escoja una opcion" {...register("delivery", {
        required:true
       })}>
       <Option value="0" text="Selecciona un tipo de entrega"/>
       <Option value="1" text="con domicilio"/>
       <Option value="2"text="sin domicilio"/>
        </Selector>
       {errors.delivery?.type === "requires" && <p className="f-error">Este campo es obligatorio</p> }
       <Button text="Iniciar compra" clas="b-buy" type="submit"/> 
       <Button text="Limpiar campos " clas="b-clean" click={()=>{reset()}}/>
       </Form>
       </Container>
       <Container clas="cont-image">
       <Image src={libreria} clas="img-f" /> 
       </Container>
       </Container>
    </div>
  )
}
