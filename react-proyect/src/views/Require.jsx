import React, { useState } from 'react';
import Form from "../components/Form";
import Title from "../components/Title";
import Label from "../components/Label";
import Field from "../components/Field";
import Selector from "../components/Selector";
import Button from "../components/Button";
import Container from "../components/Container";
import Image from "../components/Image";
import libreria from "../images/libreria.jpg";
import App from "../App.css";
import { useForm, FormProvider } from "react-hook-form";
import Option from "../components/Option";
import { useFormData } from '../context/context';
import { FaAccessibleIcon, FaUser } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaSearchLocation } from "react-icons/fa"
import { FaShare } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

export default function Require() {
  const methods = useForm({
    defaultValues: {
      name: '',
      budget: "",
      address: '',
      delivery: ''
    }
  });

  const { register, reset, handleSubmit, formState: { errors }, getValues } = methods;


  const [require, setRequire]= useState({
    name: "",
      budget: "",
      address: '',
      delivery: '0'
  })

  const navigate=useNavigate()

  const { updateFormData } = useFormData(); 

  const onSubmit = (data) => {
    console.log("Formulario enviado:", data);
    updateFormData(data); 
    navigate("/list")
  };


  return (
    <div className="require">
      <Container clas="cont-all">
        <Container clas="cont-f">
        <FormProvider {...methods}>
          <Form clas="Form" submit={handleSubmit(onSubmit)}>
            <Title text="El Rincon Literario" logo={<FaBookReader color='#5d2728'/>}/>
            <Label logo={<FaUser color='#5d2728'/>} clas="label-require" text="Nombre del comprador" />
            <Field clas="field-require"
              name="name"
              placeholder="Ingrese un nombre"
              type="text"
              {...register("name", { required: true, maxLength: 20, minLength: 10 })}
            />
            {errors.name?.type === "required" && <span className="f-error">Este campo es obligatorio</span>}
            {errors.name?.type === "maxLength" && <span className="f-error">Este campo no puede superar los 20 caracteres</span>}
            {errors.name?.type === "minLength" && <span className="f-error">Este campo no puede tener menos de 10 caracteres</span>}

            <Label logo={<FaMoneyBillWave color='#5d2728'/> } clas="label-require" text="Presupuesto" />
            <Field clas="field-require"
              name="budget"
              placeholder="Ingrese un valor"
              type="number"
              {...register("budget", { required: true, min: 10000 })}
            />
            {errors.budget?.type === "required" && <span className="f-error">Este campo es obligatorio</span>}
            {errors.budget?.type === "min" && <span className="f-error">El valor mínimo permitido es $10000</span>}

            <Label logo={<FaSearchLocation color='#5d2728'/>} clas="label-require" text="Direccion" />
            <Field clas="field-require"
              name="address"
              placeholder="Ingrese el lugar de destino"
              type="text"
              {...register("address", { required: true, minLength: 1 })}
            />
            {errors.address?.type === "required" && <span className="f-error">Este campo es obligatorio</span>}

            <Label logo={<FaShare color='5d2728'/>} clas="label-require" text="Tipo de entrega" />
            <Selector clas="select-require"  {...register("delivery", {
              required: true,
            })}>
              <Option value="" text="Selecciona un tipo de entrega" />
              <Option value="1" text="con domicilio" />
              <Option value="2" text="sin domicilio" />
            </Selector>
            {errors.delivery?.type === "required" && <p className="f-error">Este campo es obligatorio</p>}
            <Button text="Iniciar compra" clas="b-buy" type="submit" />
            <Button text="Limpiar campos" clas="b-clean" type="button" click={() => reset()} />
          </Form>
          </FormProvider>
        </Container>

        <Container clas="cont-image">
          <Image src={libreria} clas="img-f" />
        </Container>
      </Container>
    </div>
  );
}
