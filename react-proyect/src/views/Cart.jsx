import React from 'react'
import Form from "../components/Form"
import Title from "../components/Title"
import Label from "../components/Label"
import Field from "../components/Field"
import Button from "../components/Button"
import Container from "../components/Container"
import Text from "../components/Text"
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useFormData } from '../context/context'
import { useForm } from 'react-hook-form'
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'


export default function Cart() {

  const { cart, removeFromCart,clearCart } = useCart()
  const { formData } = useFormData()

  let valueadded = 0;
  const { name, budget, address, delivery } = formData || {};
  const [isPaymentConfirmed, setIsPaymentConfirmed] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [totalpay, setTotalPay] = useState(0);
  const navigate = useNavigate();

  const { setError, register, handleSubmit, formState: { errors }, reset } = useForm();


  const totalAmount = cart.reduce((total, product) => {
    return total + parseFloat(product.price);
  }, 0);

  useEffect(() => {
    if (delivery === "1") {
      setTotalPay(totalAmount + 10000);
    }

    if(delivery != "1"){
      setTotalPay(totalAmount);
    }
  }, [delivery, totalAmount]);

  const onSubmit = (data) => {
    if (totalpay > budget) {
      setError("budget", { type: "manual", message: "El total de la compra excede tu presupuesto." });
      return;
    }

    alert("Pago realizado con éxito");
    console.log(budget)
  console.log(totalpay)
    clearCart()
    navigate("/");
  };


  console.log(budget)
  console.log(totalpay)
  console.log(errors)
  return (
    <div className="cont-cart">
      <Container clas="cont-header">
        <Title text="El Rincon Literario" />
      </Container>

      <Container clas="bs-cart">
        <Link to="/">
          <Button text="Cancelar compra" clas="b-cart-return" click={()=>{{clearCart()}}} />
        </Link>
        <Link to="/list">
          <Button text="Seguir comprando" clas="b-cart-return" />
        </Link>
      </Container>

      <Title text="Carrito de compras" />
      <Container clas="cont-table-summary">
        <Container clas="cont-table">
          <table className="table-cart">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Autor</th>
                <th>Lenguaje</th>
                <th>Encuadernacion</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {cart.length > 0 ? (
                cart.map((product) => (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.author}</td>
                    <td>{product.languaje}</td>
                    <td>{product.binding}</td>
                    <td>{product.stock}</td>
                    <td>${parseFloat(product.price)}</td>
                    <td>
                      <Button text="Eliminar" clas="b-remove" click={() => removeFromCart(product.id)} />
                    </td>
                  </tr>
                ))
              ) : (
                
                <tr>
                  <td colSpan="7">No hay productos en el carrito</td>
                </tr>
              )}
            </tbody>
          </table>
        </Container>

        <Container clas="cont-summary">
          <Container clas="summary">
            <Title text="Resumen de compra" />
            <Text text="Productos seleccionados:" />
            <Text text={cart.length} />
            <Text text="Monto de compra:" />
            <Text text={`$${totalAmount}`} />
            <Text text={delivery === "1" ? `Cargo de domicilio: $10000` : "No hay cargo de domicilio"} />
            <Text text="monto total"/>
            <Text text={totalpay}/>
          </Container>
        </Container>
      </Container>

      <Form clas="cont-pay" submit={handleSubmit(onSubmit)}>
        <Title text="Información del método de pago" />
        {errorMessage && <Text text={`Error: ${errorMessage}`} />}

        <Label text="Nombre del titular" />
        <Field
        type="text"
          name="cardHolder"
          placeholder="Nombre del titular"
          {...register("cardHolder", { required: true, minLength: 10 })}
        />
        {errors.cardHolder?.type === "required" && <span className="f-error">Este campo es obligatorio</span>}
        {errors.cardHolder?.type === "minLength" && <span className="f-error">Este campo no puede tener menos de 10 caracteres</span>}
 
        <Label text="Número de tarjeta" />
        <Field
          name="cardNumber"
          type="number"
          placeholder="Número de tarjeta"
          {...register("cardNumber", {
            required: true,
            pattern: { value: /^[0-9]{16}$/ }
          })}
        />
        {errors.cardNumber?.type === "required" && <span className="f-error">Este campo es obligatorio</span>}
        {errors.cardNumber?.type === "pattern" && <span className="f-error">el numero de tarjeta debe contener 16 digitos</span>}

        <Label text="Fecha de expiración (MM/AA)" />
        <Field
          name="expiryDate"
          type="text"
          placeholder="MM/AA"
          {...register("expiryDate", {
            required: true,
            pattern: { value: /^(0[1-9]|1[0-2])\/(\d{2})$/ }
          })}
        />
        {errors.expiryDate?.type === "required" && <span className="f-error">Este campo es obligatorio</span>}
        {errors.expiryDate?.type === "pattern" && <span className="f-error">Formato de fecha inválido (MM/AA)</span>}

        <Label text="Código de seguridad (CVV)" />
        <Field
          name="securityCode"
          type="password"
          placeholder="CVV"
          {...register("securityCode", {
            required: true,
            pattern: { value: /^[0-9]{3}$/}
          })}
        />
        {errors.securityCode?.type === "required" && <span className="f-error">Este campo es obligatorio</span>}
        {errors.securityCode?.type === "pattern" && <span className="f-error">Código de seguridad inválido</span>}

        <Container clas="bs-cart">
          <Button text="Limpiar campos" clas="b-cancel-cart" click={() => reset()} />
          <Button text="Completar compra" clas="b-pay" type="submit" disabled={isPaymentConfirmed} />
          {errors.budget && <span className="f-error">{errors.budget.message}</span>}
        </Container>
      </Form>
    </div>
  );
}

