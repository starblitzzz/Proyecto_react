import React from 'react'
import { useState, useEffect } from 'react'
import Title from "../components/Title"
import Label from "../components/Label"
import Field from "../components/Field"
import Button from "../components/Button"
import Container from "../components/Container"
import Image from "../components/Image"
import Text from "../components/Text"
import Card from '../views/Card'
import { Link, useNavigate } from "react-router-dom"
import libreria from "../images/libreria.jpg";
import useInfiniteScroll from 'react-infinite-scroll-hook';
import imagen1 from "../images/imagen1.webp"
import imagen2 from "../images/imagen2.webp"
import imagen3 from "../images/imagen3.webp"
import imagen4 from "../images/imagen4.webp"
import imagen5 from "../images/imagen5.webp"
import imagen6 from "../images/imagen6.webp"
import imagen7 from "../images/imagen7.webp"
import imagen8 from "../images/imagen8.webp"
import imagen9 from "../images/imagen9.webp"
import imagen10 from "../images/imagen10.webp"
import Selector from '../components/Selector'
import Option from '../components/Option'
import { useCart } from "../context/CartContext"
import Cart from './Cart'

export default function Productslist() {

  const { addToCart, cart, clearCart } = useCart();
  const [products, setProducts] = useState([
    {
      id: 1,
      nombre: "La melancolía de los feos",
      stock: 25,
      precio: 70000,
      imagen: imagen1,
      autor: "Mario Mendoza",
      idioma: "español",
      encuadernacion: "tapa dura"
    },
    {
      id: 2,
      nombre: "Cien años de soledad",
      stock: 15,
      precio: 80000,
      imagen: imagen2,
      autor: "Gabriel García Márquez",
      idioma: "español",
      encuadernacion: "tapa blanda"
    },
    {
      id: 3,
      nombre: "El amor en los tiempos del cólera",
      stock: 10,
      precio: 75000,
      imagen: imagen3,
      autor: "Gabriel García Márquez",
      idioma: "español",
      encuadernacion: "tapa dura"
    },
    {
      id: 4,
      nombre: "La sombra del viento",
      stock: 20,
      precio: 65000,
      imagen: imagen4,
      autor: "Carlos Ruiz Zafón",
      idioma: "español",
      encuadernacion: "tapa blanda"
    },
    {
      id: 5,
      nombre: "1984",
      stock: 30,
      precio: 60000,
      imagen: imagen5,
      autor: "George Orwell",
      idioma: "español",
      encuadernacion: "tapa dura"
    },
    {
      id: 6,
      nombre: "El túnel",
      stock: 22,
      precio: 70000,
      imagen: imagen6,
      autor: "Ernesto Sabato",
      idioma: "español",
      encuadernacion: "tapa blanda"
    },
    {
      id: 7,
      nombre: "Rayuela",
      stock: 18,
      precio: 72000,
      imagen: imagen7,
      autor: "Julio Cortázar",
      idioma: "español",
      encuadernacion: "tapa dura"
    },
    {
      id: 8,
      nombre: "Los detectives salvajes",
      stock: 12,
      precio: 82000,
      imagen: imagen8,
      autor: "Roberto Bolaño",
      idioma: "español",
      encuadernacion: "tapa blanda"
    },
    {
      id: 9,
      nombre: "El aleph",
      stock: 8,
      precio: 75000,
      imagen: imagen9,
      autor: "Jorge Luis Borges",
      idioma: "español",
      encuadernacion: "tapa dura"
    },
    {
      id: 10,
      nombre: "Ficciones",
      stock: 14,
      precio: 78000,
      imagen: imagen10,
      autor: "Jorge Luis Borges",
      idioma: "español",
      encuadernacion: "tapa blanda"
    },
    {
      id: 11,
      nombre: "Crónica de una muerte anunciada",
      stock: 16,
      precio: 68000,
      imagen: imagen1,
      autor: "Gabriel García Márquez",
      idioma: "español",
      encuadernacion: "tapa dura"
    },
    {
      id: 12,
      nombre: "Los miserables",
      stock: 5,
      precio: 90000,
      imagen: imagen2,
      autor: "Victor Hugo",
      idioma: "español",
      encuadernacion: "tapa blanda"
    },
    {
      id: 13,
      nombre: "Orgullo y prejuicio",
      stock: 9,
      precio: 62000,
      imagen: imagen3,
      autor: "Jane Austen",
      idioma: "español",
      encuadernacion: "tapa dura"
    },
    {
      id: 14,
      nombre: "Don Quijote de la Mancha",
      stock: 7,
      precio: 95000,
      imagen: imagen4,
      autor: "Miguel de Cervantes",
      idioma: "español",
      encuadernacion: "tapa blanda"
    },
    {
      id: 15,
      nombre: "La casa de los espíritus",
      stock: 13,
      precio: 74000,
      imagen: imagen5,
      autor: "Isabel Allende",
      idioma: "español",
      encuadernacion: "tapa dura"
    },
    {
      id: 16,
      nombre: "El principito",
      stock: 30,
      precio: 50000,
      imagen: imagen6,
      autor: "Antoine de Saint-Exupéry",
      idioma: "español",
      encuadernacion: "tapa blanda"
    },
    {
      id: 17,
      nombre: "Moby Dick",
      stock: 11,
      precio: 82000,
      imagen: imagen7,
      autor: "Herman Melville",
      idioma: "español",
      encuadernacion: "tapa dura"
    },
    {
      id: 18,
      nombre: "El gran Gatsby",
      stock: 17,
      precio: 55000,
      imagen: imagen8,
      autor: "F. Scott Fitzgerald",
      idioma: "español",
      encuadernacion: "tapa blanda"
    },
    {
      id: 19,
      nombre: "Los cuatro acuerdos",
      stock: 26,
      precio: 40000,
      imagen: imagen9,
      autor: "Don Miguel Ruiz",
      idioma: "español",
      encuadernacion: "tapa dura"
    },
    {
      id: 20,
      nombre: "El arte de la guerra",
      stock: 24,
      precio: 30000,
      imagen: imagen10,
      autor: "Sun Tzu",
      idioma: "español",
      encuadernacion: "tapa blanda"
    },
    {
      id: 21,
      nombre: "Sapiens: De animales a dioses",
      stock: 19,
      precio: 85000,
      imagen: imagen1,
      autor: "Yuval Noah Harari",
      idioma: "español",
      encuadernacion: "tapa dura"
    },
    {
      id: 22,
      nombre: "Cien años de soledad",
      stock: 10,
      precio: 80000,
      imagen: imagen2,
      autor: "Gabriel García Márquez",
      idioma: "español",
      encuadernacion: "tapa blanda"
    },
    {
      id: 23,
      nombre: "Mujer que sabe",
      stock: 12,
      precio: 45000,
      imagen: imagen3,
      autor: "Miriam Fernández",
      idioma: "español",
      encuadernacion: "tapa dura"
    },
    {
      id: 24,
      nombre: "El monje que vendió su Ferrari",
      stock: 28,
      precio: 47000,
      imagen: imagen4,
      autor: "Robin Sharma",
      idioma: "español",
      encuadernacion: "tapa blanda"
    },
    {
      id: 25,
      nombre: "El caballero de la armadura oxidada",
      stock: 16,
      precio: 32000,
      imagen: imagen5,
      autor: "Robert Fisher",
      idioma: "español",
      encuadernacion: "tapa dura"
    },
    {
      id: 26,
      nombre: "Cazadores de sombras: Ciudad de hueso",
      stock: 22,
      precio: 55000,
      imagen: imagen6,
      autor: "Cassandra Clare",
      idioma: "español",
      encuadernacion: "tapa blanda"
    },
    {
      id: 27,
      nombre: "Harry Potter y la piedra filosofal",
      stock: 18,
      precio: 60000,
      imagen: imagen7,
      autor: "J.K. Rowling",
      idioma: "español",
      encuadernacion: "tapa dura"
    },
    {
      id: 28,
      nombre: "El hobbit",
      stock: 15,
      precio: 58000,
      imagen: imagen8,
      autor: "J.R.R. Tolkien",
      idioma: "español",
      encuadernacion: "tapa blanda"
    },
    {
      id: 29,
      nombre: "La chica del tren",
      stock: 9,
      precio: 75000,
      imagen: imagen9,
      autor: "Paula Hawkins",
      idioma: "español",
      encuadernacion: "tapa dura"
    },
    {
      id: 30,
      nombre: "El código Da Vinci",
      stock: 20,
      precio: 72000,
      imagen: imagen10,
      autor: "Dan Brown",
      idioma: "español",
      encuadernacion: "tapa blanda"
    },
    {
      id: 31,
      nombre: "El hombre en busca de sentido",
      stock: 14,
      precio: 45000,
      imagen: imagen1,
      autor: "Viktor Frankl",
      idioma: "español",
      encuadernacion: "tapa dura"
    },
    {
      id: 32,
      nombre: "La guerra de los mundos",
      stock: 11,
      precio: 62000,
      imagen: imagen2,
      autor: "H.G. Wells",
      idioma: "español",
      encuadernacion: "tapa blanda"
    },
    {
      id: 33,
      nombre: "El guardián entre el centeno",
      stock: 8,
      precio: 54000,
      imagen: imagen3,
      autor: "J.D. Salinger",
      idioma: "español",
      encuadernacion: "tapa dura"
    },
    {
      id: 34,
      nombre: "Pájaro en la mano",
      stock: 17,
      precio: 68000,
      imagen: imagen4,
      autor: "Julio Cortázar",
      idioma: "español",
      encuadernacion: "tapa blanda"
    },
    {
      id: 35,
      nombre: "El juego del ángel",
      stock: 13,
      precio: 70000,
      imagen: imagen5,
      autor: "Carlos Ruiz Zafón",
      idioma: "español",
      encuadernacion: "tapa dura"
    },
    {
      id: 36,
      nombre: "A sangre fría",
      stock: 6,
      precio: 85000,
      imagen: imagen6,
      autor: "Truman Capote",
      idioma: "español",
      encuadernacion: "tapa blanda"
    },
    {
      id: 37,
      nombre: "Crónicas de una muerte anunciada",
      stock: 19,
      precio: 75000,
      imagen: imagen7,
      autor: "Gabriel García Márquez",
      idioma: "español",
      encuadernacion: "tapa dura"
    },
    {
      id: 38,
      nombre: "Los secretos de la mente millonaria",
      stock: 29,
      precio: 60000,
      imagen: imagen8,
      autor: "T. Harv Eker",
      idioma: "español",
      encuadernacion: "tapa blanda"
    },
    {
      id: 39,
      nombre: "¿Quién se ha llevado mi queso?",
      stock: 33,
      precio: 39000,
      imagen: imagen9,
      autor: "Spencer Johnson",
      idioma: "español",
      encuadernacion: "tapa dura"
    },
    {
      id: 40,
      nombre: "El hombre más rico de Babilonia",
      stock: 21,
      precio: 43000,
      imagen: imagen10,
      autor: "George S. Clason",
      idioma: "español",
      encuadernacion: "tapa blanda"
    }]);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const [detail, setDetail] = useState({
    id: null,
    img: "",
    name: "",
    stock: "",
    price: "",
    author: "",
    languaje: "",
    binding: ""
  })

  const [bindingFilter, setBindingFilter] = useState('');
  const [nameFilter, setNameFilter] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [cartEnabled, setCartEnabled] = useState(false);


  const clearFilters = () => {
    setNameFilter("");
    setBindingFilter("");
    setFilteredProducts(products);
  };

  const handleNameFilterChange = (event) => {
    setNameFilter(event.target.value);
  };

  const handleBindingFilterChange = (event) => {
    setBindingFilter(event.target.value);
    console.log(event.target.value)
  };

  const applyFilters = () => {
    let filtered = products;


    if (nameFilter) {
      filtered = filtered.filter(product => product.nombre.toLowerCase().includes(nameFilter.toLowerCase()));
    }

    if (bindingFilter) {
      filtered = filtered.filter(product =>
        product.encuadernacion.toLowerCase() === bindingFilter.toLowerCase()
      );
    }

    setFilteredProducts(filtered);
    console.log(bindingFilter)

  };
  const navigate = useNavigate()

  const returnRequire = () => {
    clearCart()
    navigate("/")
    console.log(cart)
  }


  const renderProducts = () => {
    return filteredProducts.map((product) => (
      <Card
        key={product.id}
        img={product.imagen}
        name={product.nombre}
        stock={product.stock}
        price={product.precio}
        click={() => handleClick(product)}
      />
    ));

  };
  const handleClick = (product) => {
    setDetail({
      id: product.id,
      name: product.nombre,
      price: product.precio,
      img: product.imagen,
      stock: product.stock,
      author: product.autor,
      binding: product.encuadernacion,
      languaje: product.idioma
    });

    setCartEnabled(true);
  };



  return (
    <div className="product-cont-all">
      <Container clas="cont-filter-list">
        <Container clas="cont-nav">
          <Title text="El Rincon Literario" clas="title" />
          <Button clas="b-cancel" text="Cancelar compra" click={() => { returnRequire() }} />
          <Link to={"/cart"}>
            <Button clas="b-complet" text="Completar compra" />
          </Link>
        </Container>
        <Container clas="cont-filter">
          <Container clas="filters">
            <Label text="Filtrar por" />
            <Label text="Nombre:" />
            <Field clas="field-filter" value={nameFilter} change={handleNameFilterChange} />
            <Label text="Encuadernacion:" />
            <Selector clas="field-filter" value={bindingFilter} onChange={handleBindingFilterChange}>
              <Option text="escoja una opcion" value="" />
              <Option text="Tapa dura " value="Tapa dura" />
              <Option text="Tapa blanda " value="Tapa blanda" />
            </Selector>
            <Button text="Limpiar filtros" clas="b-clean-filters" click={clearFilters} />
            <Button text="Aplicar filtros" clas="b-apply-filters" click={applyFilters} />
          </Container>
        </Container>
        <Container clas="cont-list" >

          {renderProducts()}
        </Container>
      </Container>
      <Container clas="cont-detail">
        <Container clas="detail">
          <Button text="Agregar al carrito" clas="b-car" click={() => { addToCart(detail) }} disabled={!cartEnabled} />
          <Text text="Nombre:" value={detail.name} />
          <Image clas="i-detail" src={detail.img} />
          <Text text="Stock:" value={detail.stock} />
          <Text text="Precio:" value={detail.price} />
          <Text text="Autor:" value={detail.author} />
          <Text text="Idioma:" value={detail.languaje} />
          <Text text="Encuadernación:" value={detail.binding} />
        </Container>
      </Container>
    </div>
  );
}