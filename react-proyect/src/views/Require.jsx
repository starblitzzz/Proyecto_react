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
import { useForm } from "react-hook-form";
import Option from "../components/Option";

export default function Require() {
  const { register, reset, handleSubmit, formState: { errors }, getValues } = useForm({
    defaultValues: {
      name: '',
      budget: "",
      address: '',
      delivery: '0'
    }
  });

  // El handler de submit
  const onSubmit = (data) => {
    console.log("Formulario enviado:", data);
  };

  return (
    <div className="require">
      <Container clas="cont-all">
        <Container clas="cont-f">
          <Form clas="Form" submit={handleSubmit(onSubmit)}>
            <Title text="El Rincon Literario" />
            <Label clas="label-require" text="Nombre del comprador" />
            <Field clas="field-require"
              name="name"
              placeholder="Ingrese un nombre"
              type="text"
              {...register("name", { required: true, maxLength: 20, minLength: 10 })}
            />
            {errors.name?.type === "required" && <span className="f-error">Este campo es obligatorio</span>}
            {errors.name?.type === "maxLength" && <span className="f-error">Este campo no puede superar los 20 caracteres</span>}
            {errors.name?.type === "minLength" && <span className="f-error">Este campo no puede tener menos de 10 caracteres</span>}

            <Label clas="label-require" text="Presupuesto" />
            <Field clas="field-require"
              name="budget"
              placeholder="Ingrese un valor"
              type="number"
              {...register("budget", { required: true, min: 10000 })}
            />
            {errors.budget?.type === "required" && <span className="f-error">Este campo es obligatorio</span>}
            {errors.budget?.type === "min" && <span className="f-error">El valor mínimo permitido es $10000</span>}

            <Label clas="label-require" text="Direccion" />
            <Field clas="field-require"
              name="address"
              placeholder="Ingrese el lugar de destino"
              type="text"
              {...register("address", { required: true, minLength: 1 })}
            />
            {errors.address?.type === "required" && <span className="f-error">Este campo es obligatorio</span>}

            <Label clas="label-require" text="Tipo de entrega" />
            <Selector clas="select-require" disable="Escoja una opcion" {...register("delivery", {
              required: true,
            })}>
              <Option value="0" text="Selecciona un tipo de entrega" />
              <Option value="1" text="con domicilio" />
              <Option value="2" text="sin domicilio" />
            </Selector>
            {errors.delivery?.type === "requires" && <p className="f-error">Este campo es obligatorio</p>}
            {errors.delivery?.validate === "requires" && <p className="f-error">Este campo es obligatorio</p>}
            <Button text="Iniciar compra" clas="b-buy" type="submit" />
            <Button text="Limpiar campos" clas="b-clean" type="button" click={() => reset()} />
          </Form>
        </Container>

        <Container clas="cont-image">
          <Image src={libreria} clas="img-f" />
        </Container>
      </Container>
    </div>
  );
}
