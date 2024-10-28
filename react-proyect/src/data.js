const productos = [
    {
      nombre: "La melancolía de los feos",
      stock: 25,
      precio: 70000,
      imagen: "url_de_imagen_1.jpg",
      autor: "Mario Mendoza",
      idioma: "español",
      encuadernacion: "tapa dura"
    },
    {
      nombre: "Cien años de soledad",
      stock: 15,
      precio: 80000,
      imagen: "url_de_imagen_2.jpg",
      autor: "Gabriel García Márquez",
      idioma: "español",
      encuadernacion: "tapa blanda"
    },
    {
      nombre: "El amor en los tiempos del cólera",
      stock: 10,
      precio: 75000,
      imagen: "url_de_imagen_3.jpg",
      autor: "Gabriel García Márquez",
      idioma: "español",
      encuadernacion: "tapa dura"
    },
    {
      nombre: "La sombra del viento",
      stock: 20,
      precio: 65000,
      imagen: "url_de_imagen_4.jpg",
      autor: "Carlos Ruiz Zafón",
      idioma: "español",
      encuadernacion: "tapa blanda"
    },
    {
      nombre: "1984",
      stock: 30,
      precio: 60000,
      imagen: "url_de_imagen_5.jpg",
      autor: "George Orwell",
      idioma: "español",
      encuadernacion: "tapa dura"
    },
    {
      nombre: "El túnel",
      stock: 22,
      precio: 70000,
      imagen: "url_de_imagen_6.jpg",
      autor: "Ernesto Sabato",
      idioma: "español",
      encuadernacion: "tapa blanda"
    },
    {
      nombre: "Rayuela",
      stock: 18,
      precio: 72000,
      imagen: "url_de_imagen_7.jpg",
      autor: "Julio Cortázar",
      idioma: "español",
      encuadernacion: "tapa dura"
    },
    {
      nombre: "Los detectives salvajes",
      stock: 12,
      precio: 82000,
      imagen: "url_de_imagen_8.jpg",
      autor: "Roberto Bolaño",
      idioma: "español",
      encuadernacion: "tapa blanda"
    },
    {
      nombre: "El aleph",
      stock: 8,
      precio: 75000,
      imagen: "url_de_imagen_9.jpg",
      autor: "Jorge Luis Borges",
      idioma: "español",
      encuadernacion: "tapa dura"
    },
    {
      nombre: "Ficciones",
      stock: 14,
      precio: 78000,
      imagen: "url_de_imagen_10.jpg",
      autor: "Jorge Luis Borges",
      idioma: "español",
      encuadernacion: "tapa blanda"
    },
    {
      nombre: "Crónica de una muerte anunciada",
      stock: 16,
      precio: 68000,
      imagen: "url_de_imagen_11.jpg",
      autor: "Gabriel García Márquez",
      idioma: "español",
      encuadernacion: "tapa dura"
    },
    {
      nombre: "Los miserables",
      stock: 5,
      precio: 90000,
      imagen: "url_de_imagen_12.jpg",
      autor: "Victor Hugo",
      idioma: "español",
      encuadernacion: "tapa blanda"
    },
    {
      nombre: "Orgullo y prejuicio",
      stock: 9,
      precio: 62000,
      imagen: "url_de_imagen_13.jpg",
      autor: "Jane Austen",
      idioma: "español",
      encuadernacion: "tapa dura"
    },
    {
      nombre: "Don Quijote de la Mancha",
      stock: 7,
      precio: 95000,
      imagen: "url_de_imagen_14.jpg",
      autor: "Miguel de Cervantes",
      idioma: "español",
      encuadernacion: "tapa blanda"
    },
    {
      nombre: "La casa de los espíritus",
      stock: 13,
      precio: 74000,
      imagen: "url_de_imagen_15.jpg",
      autor: "Isabel Allende",
      idioma: "español",
      encuadernacion: "tapa dura"
    },
    {
      nombre: "El principito",
      stock: 30,
      precio: 50000,
      imagen: "url_de_imagen_16.jpg",
      autor: "Antoine de Saint-Exupéry",
      idioma: "español",
      encuadernacion: "tapa blanda"
    },
    {
      nombre: "Moby Dick",
      stock: 11,
      precio: 82000,
      imagen: "url_de_imagen_17.jpg",
      autor: "Herman Melville",
      idioma: "español",
      encuadernacion: "tapa dura"
    },
    {
      nombre: "El gran Gatsby",
      stock: 17,
      precio: 55000,
      imagen: "url_de_imagen_18.jpg",
      autor: "F. Scott Fitzgerald",
      idioma: "español",
      encuadernacion: "tapa blanda"
    },
    {
      nombre: "Los cuatro acuerdos",
      stock: 26,
      precio: 40000,
      imagen: "url_de_imagen_19.jpg",
      autor: "Don Miguel Ruiz",
      idioma: "español",
      encuadernacion: "tapa dura"
    },
    {
      nombre: "El arte de la guerra",
      stock: 24,
      precio: 30000,
      imagen: "url_de_imagen_20.jpg",
      autor: "Sun Tzu",
      idioma: "español",
      encuadernacion: "tapa blanda"
    },
    {
      nombre: "Sapiens: De animales a dioses",
      stock: 19,
      precio: 85000,
      imagen: "url_de_imagen_21.jpg",
      autor: "Yuval Noah Harari",
      idioma: "español",
      encuadernacion: "tapa dura"
    },
    {
      nombre: "Cien años de soledad",
      stock: 10,
      precio: 80000,
      imagen: "url_de_imagen_22.jpg",
      autor: "Gabriel García Márquez",
      idioma: "español",
      encuadernacion: "tapa blanda"
    },
    {
      nombre: "Mujer que sabe",
      stock: 12,
      precio: 45000,
      imagen: "url_de_imagen_23.jpg",
      autor: "Miriam Fernández",
      idioma: "español",
      encuadernacion: "tapa dura"
    },
    {
      nombre: "El monje que vendió su Ferrari",
      stock: 28,
      precio: 47000,
      imagen: "url_de_imagen_24.jpg",
      autor: "Robin Sharma",
      idioma: "español",
      encuadernacion: "tapa blanda"
    },
    {
      nombre: "El caballero de la armadura oxidada",
      stock: 16,
      precio: 32000,
      imagen: "url_de_imagen_25.jpg",
      autor: "Robert Fisher",
      idioma: "español",
      encuadernacion: "tapa dura"
    },
    {
      nombre: "Cazadores de sombras: Ciudad de hueso",
      stock: 22,
      precio: 55000,
      imagen: "url_de_imagen_26.jpg",
      autor: "Cassandra Clare",
      idioma: "español",
      encuadernacion: "tapa blanda"
    },
    {
      nombre: "Harry Potter y la piedra filosofal",
      stock: 18,
      precio: 60000,
      imagen: "url_de_imagen_27.jpg",
      autor: "J.K. Rowling",
      idioma: "español",
      encuadernacion: "tapa dura"
    },
    {
      nombre: "El hobbit",
      stock: 15,
      precio: 58000,
      imagen: "url_de_imagen_28.jpg",
      autor: "J.R.R. Tolkien",
      idioma: "español",
      encuadernacion: "tapa blanda"
    },
    {
      nombre: "La chica del tren",
      stock: 9,
      precio: 75000,
      imagen: "url_de_imagen_29.jpg",
      autor: "Paula Hawkins",
      idioma: "español",
      encuadernacion: "tapa dura"
    },
    {
      nombre: "El código Da Vinci",
      stock: 20,
      precio: 72000,
      imagen: "url_de_imagen_30.jpg",
      autor: "Dan Brown",
      idioma: "español",
      encuadernacion: "tapa blanda"
    },
    {
      nombre: "El hombre en busca de sentido",
      stock: 14,
      precio: 45000,
      imagen: "url_de_imagen_31.jpg",
      autor: "Viktor Frankl",
      idioma: "español",
      encuadernacion: "tapa dura"
    },
    {
      nombre: "La guerra de los mundos",
      stock: 11,
      precio: 62000,
      imagen: "url_de_imagen_32.jpg",
      autor: "H.G. Wells",
      idioma: "español",
      encuadernacion: "tapa blanda"
    },
    {
      nombre: "El guardián entre el centeno",
      stock: 8,
      precio: 54000,
      imagen: "url_de_imagen_33.jpg",
      autor: "J.D. Salinger",
      idioma: "español",
      encuadernacion: "tapa dura"
    },
    {
      nombre: "Pájaro en la mano",
      stock: 17,
      precio: 68000,
      imagen: "url_de_imagen_34.jpg",
      autor: "Julio Cortázar",
      idioma: "español",
      encuadernacion: "tapa blanda"
    },
    {
      nombre: "El juego del ángel",
      stock: 13,
      precio: 70000,
      imagen: "url_de_imagen_35.jpg",
      autor: "Carlos Ruiz Zafón",
      idioma: "español",
      encuadernacion: "tapa dura"
    },
    {
      nombre: "A sangre fría",
      stock: 6,
      precio: 85000,
      imagen: "url_de_imagen_36.jpg",
      autor: "Truman Capote",
      idioma: "español",
      encuadernacion: "tapa blanda"
    },
    {
      nombre: "Crónicas de una muerte anunciada",
      stock: 19,
      precio: 75000,
      imagen: "url_de_imagen_37.jpg",
      autor: "Gabriel García Márquez",
      idioma: "español",
      encuadernacion: "tapa dura"
    },
    {
      nombre: "Los secretos de la mente millonaria",
      stock: 29,
      precio: 60000,
      imagen: "url_de_imagen_38.jpg",
      autor: "T. Harv Eker",
      idioma: "español",
      encuadernacion: "tapa blanda"
    },
    {
      nombre: "¿Quién se ha llevado mi queso?",
      stock: 33,
      precio: 39000,
      imagen: "url_de_imagen_39.jpg",
      autor: "Spencer Johnson",
      idioma: "español",
      encuadernacion: "tapa dura"
    },
    {
      nombre: "El hombre más rico de Babilonia",
      stock: 21,
      precio: 43000,
      imagen: "url_de_imagen_40.jpg",
      autor: "George S. Clason",
      idioma: "español",
      encuadernacion: "tapa blanda"
    }
  ];
  