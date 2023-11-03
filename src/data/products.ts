import { ICategory } from "../interfaces";

export const categoriesList: ICategory[] = [
    {
        code: '0101',
        type: 'Publicidad Impresa',
        name: 'Tarjetas de Presentación',
        shortDescription: 'Las tarjetas de visita o presentación son elementos de papelería corporativa básicos para cualquier empresa o empresario.',
        description: 'dfjsdfsd',
        basicPrice: 80000,
        minQuantity: 1000,
        url: '/servicios/publicidad_impresa/tarjetas_de_presentacion',
        displayImage: '/img/products/tarjetas-de-presentacion.png',
        altDisplay: 'Impresión y diseño de tarjetas de presentación en santiago',
        gallery: [''],
        products: [
            {
                title:'Tarjetas con Brillo UV',
                img: '/img/products/tarjetas-de-presentacion-brillo-uv-01.png',
                altImg:'Tarjetas de Presentación Brillo UV',
                shortDescription:'El brillo UV es el acabado mas sencillo que se le puede dar a las tarjetas, es ideal para repartir en masa por sus bajos costos de impresión.',
                priceConfig: {
                    priceType: 'Precio Fijo',
                    price: 80000,
                    queantity: 1000,
                    quantities: [
                        '1000','2000','3000','6000','10000'
                    ]
                }
            },
            {
               title:'Tarjetas con Laminado Mate',
               img: '/img/products/tarjetas-de-presentacion-laminado-mate-01.png',
               altImg:'Tarjetas de Presentación con laminado mate',
               shortDescription:'El laminado mate le da un toque de elegancia a tus tarjetas volviendolas la mejor opcion para causar impacto en tus clientes y dejar una buena imagen de tu marca.' ,
               priceConfig: {
                priceType: 'Precio Fijo',
                price: 100000,
                queantity: 1000,
                quantities: [
                    '1000','2000','3000','6000','10000'
                ]
            }
            },
            {
               title:'Tarjetas Mate con Reserva UV',
               img: '/img/products/tarjetas-de-presentacion-mate-reserva-01.png',
               altImg:'Tarjetas de Presentación Laminado mate con reserva UV',
               shortDescription:'Adicional al laminado mate el brillo UV localizado genera un acabado premium que no solo genera recordación en los clientes, si no que hace que el producto sea único e inigualable' ,
               priceConfig: {
                priceType: 'Precio Fijo',
                price: 120000,
                queantity: 1000,
                quantities: [
                    '1000','2000','3000','6000','10000'
                ]
            }
            },
            {
               title:'Tarjetas Troqueladas',
               img: '/img/products/tarjetas-de-presentacion-troqueladas-01.png',
               altImg:'Tarjetas de Presentación troqueladas',
               shortDescription:'Esta técnica es realmente creativa e innovadora para tu negocio. De esta manera se ofrece un mensaje único y notable que logre diferenciar esa tarjeta rectangular convencional.' ,
               priceConfig: {
                priceType: 'Precio Fijo',
                price: 190000,
                queantity: 1000,
                quantities: [
                    '1000','2000','3000','6000','10000'
                ]
            }
                
            },
        ],
        FAQs: [
            {
             ask:'¿Donde puedo imprimir mis Tarjetas de Presentación?',
             response:'Si deseas imprimir las mejores y mas creativas tarjetas de presentación, en Lion Litografía Medellín tenemos lo que buscas, desde tarjetas sencillas hasta acabados premium. Nosotros nos encargamos de ofrecer un producto de calidad, elegante y a muy buen precio'
            },
            {
             ask:'¿Cuanto cuesta el diseño de mis para mis tarjetas de presentación?',
             response:'El precio del diseño de una tarjeta de presentación es de $ 20.000. un valor muy económico en comparación con el resto del mercado de Colombiam en Lion Litografía Medellín podrás disfrutar de una variedad de diseños, acabados y tipos de papel'
            },
            {
             ask:'¿Donde puedo mandar a hacer mis tarjetas de presentación?',
             response:'Si estas en busca de impulsar tu marca, en Lion Litografía Medellín diseñamos e imprimimos tus tarjetas de presentación para que puedas ser reconocido en toda Colombia si lo deseas. Este tipo de herramienta es realmente útil para atraer más clientes, que tu negocio crezca y sea reconocido cada vez mas rápido'
            },
        ]
    },
    {
        code: '0102',
        type: 'Publicidad Impresa',
        name: 'Volantes Publicitarios',
        shortDescription: 'Un volante es un elemento publicitario útil para dar a conocer de manera física y completa tus productos y servicios.',
        description: '',
        basicPrice: 70000,
        minQuantity: 1000,
        url: '/servicios/publicidad_impresa/volantes',
        displayImage: '/img/products/volantes.png',
        altDisplay: 'Impresión y diseño de flyers en santiago',
        gallery: [''],
        products: [
            {
                title:'Volantes Full Color un Lado',
                img: '/img/products/publicidad_impresa/flyers_una_cara.jpg',
                altImg:'Tarjetas de Presentación Brillo UV',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio Fijo',
                    price: 80000,
                    queantity: 1000,
                    quantities: [
                        '1000','2000','3000','6000','10000'
                    ]
                }
            },
            {
                title:'Volantes Full Color Ambos Lados',
                img: '/img/products/publicidad_impresa/flyers_dos_caras.jpg',
                altImg:'Tarjetas de Presentación Brillo UV',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio Fijo',
                    price: 80000,
                    queantity: 1000,
                    quantities: [
                        '1000','2000','3000','6000','10000'
                    ]
                }
            },
        ]
    },
    {
        code: '0103',
        type: 'Publicidad Impresa',
        name: 'Afiches',
        shortDescription: 'jsdfjsodfjsifjpfsdofs',
        description: 'dfjsdfsd',
        basicPrice: 90000,
        minQuantity: 500,
        url: '/servicios/publicidad-impresa/afiches',
        displayImage: '/img/products/publicidad_impresa/afiches.jpg',
        altDisplay: 'Impresión y diseño de afiches en santiago',
        gallery: [''],
        products: [
            {
                title:'Afiches Pliego ( 100x70cm )',
                img: '/img/products/publicidad_impresa/afiches_pliego.jpg',
                altImg:'Afiche Tamaño Pliego',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio Fijo',
                    price: 80000,
                    queantity: 1000,
                    quantities: [
                        '200','500','1000','2000','5000'
                    ]
                }
            },
            {
                title:'Afiches 1/2 Pliego ( 70x50cm )',
                img: '/img/products/publicidad_impresa/afiches_medio_pliego.jpg',
                altImg:'Afiche tamaño medio pliego',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio Fijo',
                    price: 80000,
                    queantity: 1000,
                    quantities: [
                        '200','500','1000','2000','5000'
                    ]
                }
            },
            {
                title:'Afiches 1/4 Pliego ( 50x35cm )',
                img: '/img/products/publicidad_impresa/afiches_cuarto_pliego.jpg',
                altImg:'Afiche tamaño cuarto de pliego',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio Fijo',
                    price: 80000,
                    queantity: 1000,
                    quantities: [
                        '200','500','1000','2000','5000'
                    ]
                }
            },
        ]
    },
    {
        code: '0105',
        type: 'Publicidad Impresa',
        name: 'Etiquetas',
        shortDescription: 'jsdfjsodfjsifjpfsdofs',
        description: 'dfjsdfsd',
        basicPrice: 75000,
        minQuantity: 1000,
        url: '/servicios/publicidad_impresa/etiquetas',
        displayImage: '/img/products/publicidad_impresa/etiquetas.jpg',
        altDisplay: 'Impresión y diseño de etiquetas en santiago',
        gallery: [''],
        products:[
            {
                title:'Etiquetas Sencillas',
                img: '/img/products/publicidad_impresa/etiquetas_sencillas.jpg',
                altImg:'Etiquetas sencillas',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio Fijo',
                    price: 80000,
                    queantity: 1000,
                    quantities: [
                        '200','500','1000','2000','5000'
                    ]
                }
            },
            {
                title:'Etiquetas Ecológicas',
                img: '/img/products/publicidad_impresa/etiquetas_ecologicas.jpg',
                altImg:'Etiquetas ecologicas',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio Fijo',
                    price: 80000,
                    queantity: 1000,
                    quantities: [
                        '200','500','1000','2000','5000'
                    ]
                }
            },
        ]
    },
    {
        code: '0106',
        type: 'Publicidad Impresa',
        name: 'Imanes Publicitarios',
        shortDescription: 'Se adhieren a superficies metálicas y permiten poner tu imagen en cualquier lugar.',
        description: 'dfjsdfsd',
        basicPrice: 200000,
        minQuantity: 500,
        url: '/servicios/publicidad_impresa/imanes_publicitarios',
        displayImage: '/img/products/imanes-publicitarios.png',
        altDisplay: 'Impresión y diseño de Imanes para nevera en santiago',
        gallery: [''],
        products: [
            {
                title: 'Imanes Sencillos 5x9cm',
                shortDescription: 'Imanes tradicionales que muestran la información de tu empresa adhesida a cualquier superficie metalica, muy efectivos para crear recordación en tu marca',
                img:'/img/products/imanes-sencillos-01.png',
                altImg:'Imanes publicitarios sencillos',
                priceConfig:{
                    price:310000,
                    priceType:'Precio Fijo',
                    queantity:1000,
                    quantities: [
                        '120','240','500','1000','2000','5000'
                    ]
                }
            },
            {
                title: 'Imanes Cuadrados 4,5x4,5cm',
                shortDescription: 'Imprime tus imanes en formato cuadrado, ideal y da un toque diferente a los imanes convencionales y tambien un poco de economía.',
                img:'/img/products/imanes-cuadrados-01.png',
                altImg:'Imanes publicitarios cuadrados',
                priceConfig:{
                    price:210000,
                    priceType:'Precio Fijo',
                    queantity:1000,
                    quantities: [
                        '120','240','500','1000','2000','5000'
                    ]
                }
            },
            {
                title: 'Imanes troquelados 9x5cm',
                shortDescription: 'Con tus imanes troquelados te aseguraras de impactar en tus clientes, un diseño creativo',
                img:'/img/products/imanes-troquelados-01.png',
                altImg:'',
                priceConfig:{
                    price:410000,
                    priceType:'Precio Fijo',
                    queantity:1000,
                    quantities: [
                        '120','240','500','1000','2000','5000'
                    ]
                }
            },
        ],
        FAQs: [
            {
                ask:'¿Donde puedo imprimir mis Imanes Publicitarios?',
                response:'Si deseas imprimir las mejores y mas creativas Imanes Publicitarios, en Lion Litografía Medellín tenemos lo que buscas, desde tarjetas sencillas hasta acabados premium. Nosotros nos encargamos de ofrecer un producto de calidad, elegante y a muy buen precio'
               },
               {
                ask:'¿Cuanto cuesta el diseño de mis para mis Imanes Publicitarios?',
                response:'El precio del diseño de una tarjeta de presentación es de $ 20.000. un valor muy económico en comparación con el resto del mercado de Colombiam en Lion Litografía Medellín podrás disfrutar de una variedad de diseños, acabados y tipos de papel'
               },
               {
                ask:'¿Donde puedo mandar a hacer mis Imanes Publicitarios?',
                response:'Si estas en busca de impulsar tu marca, en Lion Litografía Medellín diseñamos e imprimimos tus Imanes Publicitarios para que puedas ser reconocido en toda Colombia si lo deseas. Este tipo de herramienta es realmente útil para atraer más clientes, que tu negocio crezca y sea reconocido cada vez mas rápido'
               },
        ]
    },
    {
        code: '0107',
        type: 'Publicidad Impresa',
        name: 'Stickers',
        shortDescription: 'Se adhieren a cualquier superficie dejando tu marca plasmada en cualquier lugar.',
        description: 'dfjsdfsd',
        basicPrice: 200000,
        minQuantity: 500,
        url: '/servicios/publicidad_impresa/stickers',
        displayImage: '/img/products/publicidad_impresa/stickers.jpg',
        altDisplay: 'Impresión y diseño de stickers en santiago',
        gallery: [''],
        products: [
            {
                title: 'Stickers Cuadrados',
                shortDescription: '',
                img:'/img/products/publicidad_impresa/stickers_cuadrados.jpg',
                altImg:'',
                priceConfig:{
                    price:410000,
                    priceType:'Precio Fijo',
                    queantity:1000,
                    quantities: [
                        '100','200','500','1000','2000','5000'
                    ]
                }
            },
            {
                title: 'Stickers Redondos',
                shortDescription: '',
                img:'/img/products/publicidad_impresa/stickers_redondos.jpg',
                altImg:'',
                priceConfig:{
                    price:410000,
                    priceType:'Precio Fijo',
                    queantity:1000,
                    quantities: [
                        '100','200','500','1000','2000','5000'
                    ]
                }
            },
            {
                title: 'Stickers Figuras',
                shortDescription: '',
                img:'/img/products/publicidad_impresa/stickers_figuras.jpg',
                altImg:'',
                priceConfig:{
                    price:410000,
                    priceType:'Precio Fijo',
                    queantity:1000,
                    quantities: [
                        '100','200','500','1000','2000','5000'
                    ]
                }
            },
            {
                title: 'Stickers Transparentes',
                shortDescription: '',
                img:'/img/products/publicidad_impresa/stickers_transparentes.jpg',
                altImg:'',
                priceConfig:{
                    price:410000,
                    priceType:'Precio Fijo',
                    queantity:1000,
                    quantities: [
                        '100','200','500','1000','2000','5000'
                    ]
                }
            },
        ]
    },


    {
        code: '0108',
        type: 'Publicidad Impresa',
        name: 'Plegables',
        shortDescription: 'Descripción de plegables',
        description: '',
        basicPrice: 70000,
        minQuantity: 1000,
        url: '/servicios/publicidad_impresa/plegables',
        displayImage: '/img/products/publicidad_impresa/plegable.jpg',
        altDisplay: 'Impresión y diseño de plegables en medellin',
        gallery: [''],
        products: [
            {
                title:'Plegables Ecologicos',
                img: '/img/products/publicidad_impresa/plegable_ecologico.jpg',
                altImg:'Plegables ecologicos en medellin',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio Fijo',
                    price: 80000,
                    queantity: 1000,
                    quantities: [
                        '1000','2000','3000','6000','10000'
                    ]
                }
            },
            {
                title:'Plegables a Dos Cuerpos',
                img: '/img/products/publicidad_impresa/plegable_dos_cuerpos.jpg',
                altImg:'Plegables a dos cuerpos en medellin',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio Fijo',
                    price: 80000,
                    queantity: 1000,
                    quantities: [
                        '1000','2000','3000','6000','10000'
                    ]
                }
            },
            {
                title:'Plegables a Tres Cuerpos',
                img: '/img/products/publicidad_impresa/plegable_tres_cuerpos.jpg',
                altImg:'Plegables a tres cuerpos en medellin',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio Fijo',
                    price: 80000,
                    queantity: 1000,
                    quantities: [
                        '1000','2000','3000','6000','10000'
                    ]
                }
            },
            {
                title:'Plegables Troquelados',
                img: '/img/products/publicidad_impresa/plegable_troquelado.jpg',
                altImg:'Plegables troquelados en medellin',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio Fijo',
                    price: 80000,
                    queantity: 1000,
                    quantities: [
                        '1000','2000','3000','6000','10000'
                    ]
                }
            },
        ]
    },




    {
        code: '0201',
        type: 'Papeleria Comercial',
        name: 'Talonarios',
        shortDescription: 'Talonarios, boletas para rifas, facturas y remisiones de todo tipo! Autocopiantes, con una, dos y 3 copias, con precorte ¡Cotiza ahora!',
        description: 'dfjsdfsd',
        basicPrice: 75000,
        minQuantity: 10,
        url: '/servicios/papeleria_comercial/talonarios',
        displayImage: '/img/products/talonarios.png',
        altDisplay: 'Impresión de talonarios personalizados en medellín',
        gallery: [''],
        products: [
            {
                title: 'Talonarios de Facturas',
                shortDescription: 'Imanes tradicionales que muestran la información de tu empresa adhesida a cualquier superficie metalica, muy efectivos para crear recordación en tu marca',
                img:'/img/products/talonario-de-facturas-01.png',
                altImg:'Talonarios de facturas personalizados',
                priceConfig:{
                    price:310000,
                    priceType:'Precio Fijo',
                    queantity:1000,
                    quantities: [
                        '10','20','50','100'
                    ]
                }
            },
            {
                title: 'Talonarios para Rifas',
                shortDescription: '¿Tiene en mente realizar algún sorteo o evento? Entonces necesita los talonarios de rifas o entradas ideales para conciertos, discotecas, fiestas, sorteos.',
                img:'/img/products/talonario-rifas-01.png',
                altImg:'Talonarios para rifas personalizados',
                priceConfig:{
                    price:310000,
                    priceType:'Precio Fijo',
                    queantity:1000,
                    quantities: [
                        '10','20','50','100'
                    ]
                }
            },
            {
                title: 'Blocks de Notas',
                shortDescription: 'Imanes tradicionales que muestran la información de tu empresa adhesida a cualquier superficie metalica, muy efectivos para crear recordación en tu marca',
                img:'/img/products/blocks-de-notas-01.png',
                altImg:'Blogs de notas personalizados',
                priceConfig:{
                    price:310000,
                    priceType:'Precio Fijo',
                    queantity:1000,
                    quantities: [
                        '10','20','50','100'
                    ]
                }
            },
        ],
        FAQs: [
            {
             ask:'¿Donde puedo imprimir mis Talonarios Personalizados?',
             response:'Si deseas imprimir las mejores y mas creativas Talonarios Personalizados, en Lion Litografía Medellín tenemos lo que buscas, desde tarjetas sencillas hasta acabados premium. Nosotros nos encargamos de ofrecer un producto de calidad, elegante y a muy buen precio'
            },
            {
             ask:'¿Cuanto cuesta el diseño de mis para mis Talonarios Personalizados?',
             response:'El precio del diseño de un talonario personalizado es de $ 20.000. un valor muy económico en comparación con el resto del mercado de Colombiam en Lion Litografía Medellín podrás disfrutar de una variedad de diseños, acabados y tipos de papel'
            },
            {
             ask:'¿Donde puedo mandar a hacer mis Talonarios Personalizados?',
             response:'Si estas en busca de impulsar tu marca, en Lion Litografía Medellín diseñamos e imprimimos tus Talonarios Personalizados para que puedas ser reconocido en toda Colombia si lo deseas. Este tipo de herramienta es realmente útil para atraer más clientes, que tu negocio crezca y sea reconocido cada vez mas rápido'
            },
        ]
    },
    {
        code: '0202',
        type: 'Papeleria Comercial',
        name: 'Hojas Membrete',
        shortDescription: '',
        description: 'dfjsdfsd',
        basicPrice: 100000,
        minQuantity: 500,
        url: '/servicios/papeleria_comercial/holjas_membrete',
        displayImage: '/img/products/papeleria_comercial/hojas_membrete.jpg',
        altDisplay: 'Impresión de hojas membrete en Santiago',
        gallery: [''],
        products: [
            {
                title: 'Hojas Membrete Full Color',
                shortDescription: '',
                img:'/img/products/papeleria_comercial/hojas_membrete_color.jpg',
                altImg:'Hojas membrete full color en santiago',
                priceConfig:{
                    price:310000,
                    priceType:'Precio Fijo',
                    queantity:1000,
                    quantities: [
                        '200','500','1000','2000','5000'
                    ]
                }
            },
            {
                title: 'Hojas Membrete Blanco y Negro',
                shortDescription: '',
                img:'/img/products/papeleria_comercial/hojas_membrete_blanco_negro.jpg',
                altImg:'Talonarios de facturas personalizados',
                priceConfig:{
                    price:310000,
                    priceType:'Precio Fijo',
                    queantity:1000,
                    quantities: [
                        '200','500','1000','2000','5000'
                    ]
                }
            },
        ]
    },
    {
        code: '0203',
        type: 'Papeleria Comercial',
        name: 'Carpetas',
        shortDescription: 'zzz...',
        description: 'dfjsdfsd',
        basicPrice: 200000,
        minQuantity: 100,
        url: '/servicios/papeleria_comercial/carpetas_personalizadas',
        displayImage: '/img/products/papeleria_comercial/carpetas_personalizadas.jpg',
        altDisplay: 'Impresión de carpetas personalizadas en medellín',
        gallery: [''],
        products: [
            {
                title: 'Carpetas Personalizadas Sencillas',
                shortDescription: '',
                img:'/img/products/papeleria_comercial/carpetas_personalizadas_sencillas.jpg',
                altImg:'Carpetas personalizadas sencillas en Santiago',
                priceConfig:{
                    price:310000,
                    priceType:'Precio Fijo',
                    queantity:1000,
                    quantities: [
                        '200','500','1000','2000','5000'
                    ]
                }
            },
            {
                title: 'Carpetas Personalizadas con Bolsillo',
                shortDescription: '',
                img:'/img/products/papeleria_comercial/carpetas_personalizadas_bolsillo.jpg',
                altImg:'Carpetas personalizadas con bolsillo en Santiago',
                priceConfig:{
                    price:310000,
                    priceType:'Precio Fijo',
                    queantity:1000,
                    quantities: [
                        '200','500','1000','2000','5000'
                    ]
                }
            },
        ]
    },
    {
        code: '0204',
        type: 'Papeleria Comercial',
        name: 'Tacos de Notas',
        shortDescription: 'zzz...',
        description: 'dfjsdfsd',
        basicPrice: 100000,
        minQuantity: 50,
        url: '/servicios/papeleria_comercial/tacos_notas',
        displayImage: '/img/products/papeleria_comercial/tacos_notas.jpg',
        altDisplay: 'Impresión de tacos publicitarios en medellín',
        gallery: [''],
        products: [
            {
                title: 'Tacos de Notas Full Color',
                shortDescription: '',
                img:'/img/products/papeleria_comercial/tacos_notas_color.jpg',
                altImg:'Tacos de notas personalizados a color en santiago',
                priceConfig:{
                    price:310000,
                    priceType:'Precio Fijo',
                    queantity:1000,
                    quantities: [
                        '50','100','200','500','1000','2000','5000'
                    ]
                }
            },
            {
                title: 'Tacos de Notas Blanco y Negro',
                shortDescription: '',
                img:'/img/products/papeleria_comercial/tacos_notas_blanco_negro.jpg',
                altImg:'Tacos de notas personalizados blanco y negro en santiago',
                priceConfig:{
                    price:310000,
                    priceType:'Precio Fijo',
                    queantity:1000,
                    quantities: [
                        '50','200','500','1000','2000','5000'
                    ]
                }
            },
        ]
    },
    {
        code: '0205',
        type: 'Papeleria Comercial',
        name: 'Agendas Personalizadas',
        shortDescription: 'Los cuadernos y agendas personalizadas son una excelente manera de expresar sus intereses y personalidad.',
        description: 'dfjsdfsd',
        basicPrice: 100000,
        minQuantity: 10,
        url: '/servicios/papeleria_comercial/agendas_personalizadas',
        displayImage: '/img/products/agendas-personalizadas.png',
        altDisplay: 'Impresión de agendas personalizadas en medellín',
        gallery: [''],
        products: [
            {
                title: 'Agendas Tipo Cuaderno',
                shortDescription:'Uno de los productos preferidos por las empresas para regalar a sus clientes',
                img:'/img/products/agendas-personalizadas-agenta-tipo-cuaderno-01.png',
                altImg:'Agenda argollada tipo cuaderno',
                priceConfig: {
                    priceType: 'Precio Fijo',
                    price: 200000,
                    queantity: 10,
                    quantities: [
                        '10','20','50','100','200','500','1000'
                    ]
                }
            },
            {
                title: 'Agendas Ejecutivas',
                shortDescription:'Dale mas personalidad y distinción a tu marca con estas fabulosas agendas ejecutivas. Su cubierta forrada con imitación de cueron y carton les da una presentación óptima para tus regalos y promociones',
                img:'/img/products/agendas-personalizadas-agenta-ejecutiva-01.png',
                altImg:'Agenda Ejecutiva',
                priceConfig: {
                    priceType: 'Precio Fijo',
                    price: 300000,
                    queantity: 10,
                    quantities: [
                        '10','20','50','100','200','500','1000'
                    ]
                }
            },
            {
                title: 'Libreta Argollada',
                shortDescription:'Las libretas argolladas son versátiles, bellas y económicas. Pon tu imagen en una libreta y tus clientes nunca te olvidarán',
                img:'/img/products/agendas-personalizadas-libreta-argollada-01.png',
                altImg:'Libreta Argollada',
                priceConfig: {
                    priceType: 'Precio Fijo',
                    price: 100000,
                    queantity: 10,
                    quantities: [
                        '10','20','50','100','200','500','1000'
                    ]
                }
            },
            {
                title: 'Libretas Encoladas Con Tapa',
                shortDescription:'Las libretas encoladas con tapa tienen una presentación simple y hermosa. Puedes personalizarlas con tu diseño, elegir el tamaño, formato y materiales para obtener objetos únicos para tu marca',
                img:'/img/products/agendas-personalizadas-libreta-encolada-con-tapa-01.png',
                altImg:'Libreta endolada con tapa',
                priceConfig: {
                    priceType: 'Precio Fijo',
                    price: 60000,
                    queantity: 10,
                    quantities: [
                        '10','20','50','100','200','500','1000'
                    ]
                }
            },
            {
                title: 'Cuaderno Engrapado',
                shortDescription:'Imagina tu diseño en prácticos cuadernos grapados, útiles para estudiar, trabajar, apuntar ideas y mucho mas, a tus clientes le encantarán.',
                img:'/img/products/agendas-personalizadas-cuaderno-engrapado-01.png',
                altImg:'Cuaderno Grapado',
                priceConfig: {
                    priceType: 'Precio Fijo',
                    price: 130000,
                    queantity: 10,
                    quantities: [
                        '10','20','50','100','200','500','1000'
                    ]
                }
            },
        ],
        FAQs: [
            {
             ask:'¿Donde puedo imprimir mis Agendas Personalizadas?',
             response:'Si deseas imprimir las mejores y mas creativas Agendas Personalizadas, en Lion Litografía Medellín tenemos lo que buscas, desde tarjetas sencillas hasta acabados premium. Nosotros nos encargamos de ofrecer un producto de calidad, elegante y a muy buen precio'
            },
            {
             ask:'¿Cuanto cuesta el diseño de mis para mis Agendas Personalizadas?',
             response:'El precio del diseño de una tarjeta de presentación es de $ 20.000. un valor muy económico en comparación con el resto del mercado de Colombiam en Lion Litografía Medellín podrás disfrutar de una variedad de diseños, acabados y tipos de papel'
            },
            {
             ask:'¿Donde puedo mandar a hacer mis Agendas Personalizadas?',
             response:'Si estas en busca de impulsar tu marca, en Lion Litografía Medellín diseñamos e imprimimos tus Agendas Personalizadas para que puedas ser reconocido en toda Colombia si lo deseas. Este tipo de herramienta es realmente útil para atraer más clientes, que tu negocio crezca y sea reconocido cada vez mas rápido'
            },
        ]
    },
    {
        code: '0301',
        type: 'Impresión Digital',
        name: 'Brochures',
        shortDescription: 'jsdfjsodfjsifjpfsdofs',
        description: 'dfjsdfsd',
        basicPrice: 100000,
        minQuantity: 10,
        url: '/servicios/impresion-digital/brochures',
        displayImage: '/img/products/brochures.png',
        altDisplay: 'Impresión y diseño de brochures en medellín',
        gallery: ['']
    },
    {
        code: '0302',
        type: 'Impresión Digital',
        name: 'Catálogos',
        shortDescription: 'jsdfjsodfjsifjpfsdofs',
        description: 'dfjsdfsd',
        basicPrice: 150000,
        minQuantity: 10,
        url: '/servicios/papeleria-comercial/catalogos',
        displayImage: '/img/products/catalogos.png',
        altDisplay: 'Impresión y diseño de catalogos en medellín',
        gallery: ['']
    },
    {
        code: '0303',
        type: 'Impresión Digital',
        name: 'Carnets',
        shortDescription: 'jsdfjsodfjsifjpfsdofs',
        description: 'dfjsdfsd',
        basicPrice: 25000,
        minQuantity: 5,
        url: '/servicios/papeleria-comercial/carnets',
        displayImage: '/img/products/carnets.png',
        altDisplay: 'Impresión y diseño de carnets en medellín',
        gallery: ['']
    },
    {
        code: '0304',
        type: 'Impresión Digital',
        name: 'Invitaciones',
        shortDescription: 'jsdfjsodfjsifjpfsdofs',
        description: 'dfjsdfsd',
        basicPrice: 25000,
        minQuantity: 5,
        url: '/servicios/papeleria-comercial/invitaciones',
        displayImage: '/img/products/invitaciones.png',
        altDisplay: 'Impresión y diseño de invitaciones en medellín',
        gallery: ['']
    },
    {
        code: '0304',
        type: 'Impresión Digital',
        name: 'Libros',
        shortDescription: 'jsdfjsodfjsifjpfsdofs',
        description: 'dfjsdfsd',
        basicPrice: 25000,
        minQuantity: 5,
        url: '/servicios/papeleria-comercial/libros',
        displayImage: '/img/products/libros.png',
        altDisplay: 'Impresión y diseño de libros en medellín',
        gallery: ['']
    },
    {
        code: '0304',
        type: 'Impresión Digital',
        name: 'Revistas',
        shortDescription: 'jsdfjsodfjsifjpfsdofs',
        description: 'dfjsdfsd',
        basicPrice: 25000,
        minQuantity: 5,
        url: '/servicios/papeleria-comercial/revistas',
        displayImage: '/img/products/revistas.png',
        altDisplay: 'Impresión y diseño de revistas en medellín',
        gallery: ['']
    },
    {
        code: '0401',
        type: 'Publicidad Exterior',
        name: 'Avisos Luminosos',
        shortDescription: 'zzz...',
        description: 'dfjsdfsd',
        basicPrice: 25000,
        minQuantity: 5,
        url: '/servicios/publicidad_exterior/avisos_luminosos',
        displayImage: '/img/products/publicidad_exterior/aviso_luminoso.jpg',
        altDisplay: 'Diseño y producción de Avisos Luminosos en santiago',
        gallery: [''],
        products: [
            {
                title:'Aviso Luminoso con Lona',
                img: '/img/products/publicidad_exterior/aviso_luminoso_lona.jpg',
                altImg:'Aviso luminoso con lona en santiago',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio por Cm2',
                    price: 80000,
                    queantity: 1000,
                }
            },      
            {
                title:'Aviso Luminoso Redondo',
                img: '/img/products/publicidad_exterior/aviso_luminoso_redondo.jpg',
                altImg:'Aviso luminoso redondo en santiago',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio por Cm2',
                    price: 80000,
                    queantity: 1000,
                }
            },
            {
                title:'Aviso Luminoso Dos Caras',
                img: '/img/products/publicidad_exterior/aviso_luminoso_dos_caras.jpg',
                altImg:'Aviso luminoso a dos caras en santiago',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio por Cm2',
                    price: 80000,
                    queantity: 1000,
                }
            },
            {
                title:'Aviso Luminoso Acrilico',
                img: '/img/products/publicidad_exterior/aviso_luminoso_acrilico.jpg',
                altImg:'Aviso luminoso de acrilico en santiago',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio por Cm2',
                    price: 80000,
                    queantity: 1000,
                }
            },
        ]
    },
    {
        code: '0402',
        type: 'Publicidad Exterior',
        name: 'Pasacalles',
        shortDescription: 'zzz...',
        description: 'dfjsdfsd',
        basicPrice: 25000,
        minQuantity: 5,
        url: '/servicios/publicidad-exterior/pasacalles',
        displayImage: '/img/products/publicidad_exterior/pasacalles.jpg',
        altDisplay: 'Impresión y diseño de Pasacalles en santiago',
        gallery: [''],
        products: [
            {
                title:'Pasacalles Sencillo',
                img: '/img/products/publicidad_exterior/pasacalles_sencillo.jpg',
                altImg:'Impresión de pasacalles sencillo en santiago',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio por Cm2',
                    price: 80000,
                    queantity: 1000,
                }
            },
            {
                title:'Pasacalles con Soportes',
                img: '/img/products/publicidad_exterior/pasacalles_soportes.jpg',
                altImg:'Impresión de pasacalles con soporte en santiago',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio por Cm2',
                    price: 80000,
                    queantity: 1000,
                }
            },
        ]
    },
    {
        code: '0403',
        type: 'Publicidad Exterior',
        name: 'Vallas',
        shortDescription: 'jsdfjsodfjsifjpfsdofs',
        description: 'dfjsdfsd',
        basicPrice: 25000,
        minQuantity: 5,
        url: '/servicios/publicidad-exterior/vallas',
        displayImage: '/img/products/vallas.png',
        altDisplay: 'Impresión y diseño de vallas en medellín',
        gallery: ['']
    },
    {
        code: '0404',
        type: 'Publicidad Exterior',
        name: 'Rompetráficos',
        shortDescription: 'Excelente elemento publicitarios para llamar la atencion de quienes transiten cerca a tu espacio, las manejamos a variedades de tamaños y acabados',
        description: 'dfjsdfsd',
        basicPrice: 25000,
        minQuantity: 1,
        url: '/servicios/publicidad_exterior/rompetraficos',
        displayImage: '/img/products/publicidad_exterior/paloma.jpg',
        altDisplay: 'Diseño e impresión de Rompetráficos en medellín',
        gallery: [''],
        products: [
            {
                title:'Rompetráfico en Madera',
                img: '/img/products/publicidad_exterior/paloma_madera.jpg',
                altImg:'Paloma de madera en santiago',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio por Cm2',
                    price: 80000,
                    queantity: 1000,
                }
            },
            {
                title:'Rompetráfico en Metal',
                img: '/img/products/publicidad_exterior/paloma_metal.jpg',
                altImg:'Paloma de metal en santiago',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio por Cm2',
                    price: 80000,
                    queantity: 1000,
                }
            },
            {
                title:'Rompetrafico con Marco',
                img: '/img/products/publicidad_exterior/paloma_marco.jpg',
                altImg:'Paloma con marco en santiago',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio por Cm2',
                    price: 80000,
                    queantity: 1000,
                }
            },
            {
                title:'Rompetráfico Tipo Bastidor',
                img: '/img/products/publicidad_exterior/paloma_bastidor.jpg',
                altImg:'Paloma tipo bastidor en santiago',
                shortDescription:'', 
                priceConfig: {
                    priceType: 'Precio por Cm2',
                    price: 80000,
                    queantity: 1000,
                }
            },
            {
                title:'Rompetráfico Tablero',
                img: '/img/products/publicidad_exterior/paloma_tablero.jpg',
                altImg:'Paloma tablero en santiago',
                shortDescription:'', 
                priceConfig: {
                    priceType: 'Precio por Cm2',
                    price: 80000,
                    queantity: 1000,
                }
            },
        ]
    },
    {
        code: '0405',
        type: 'Publicidad Exterior',
        name: 'Bastidores',
        shortDescription: 'Pensado para brindar una gran visibilidad a tu negocio, por sus bajos costos y y facil instalación, el bastidor es una excelente primera opcion para tu negocio',
        description: 'dfjsdfsd',
        basicPrice: 25000,
        minQuantity: 1,
        url: '/servicios/publicidad_exterior/bastidores',
        displayImage: '/img/products/publicidad_exterior/bastidor.jpg',
        altDisplay: 'Impresión y diseño de bastidores en medellín',
        gallery: [''],
        products: [
            {
                title:'Bastidor de Madera',
                img: '/img/products/publicidad_exterior/bastidor_.jpg',
                altImg:'Bastidor de madera en santiago',
                shortDescription:'', 
                priceConfig: {
                    priceType: 'Precio por Cm2',
                    price: 80000,
                    queantity: 1000,
                }
            },
            {
                title:'Bastidor con Base',
                img: '/img/products/publicidad_exterior/bastidor_base.jpg',
                altImg:'Bastidor de madera en santiago',
                shortDescription:'', 
                priceConfig: {
                    priceType: 'Precio por Cm2',
                    price: 80000,
                    queantity: 1000,
                }
            },
            {
                title:'Bastidor de Metal',
                img: '/img/products/publicidad_exterior/bastidor_.jpg',
                altImg:'Bastidor de metal en santiago',
                shortDescription:'', 
                priceConfig: {
                    priceType: 'Precio por Cm2',
                    price: 80000,
                    queantity: 1000,
                }
            },
        ]
    },
    {
        code: '0406',
        type: 'Publicidad Exterior',
        name: 'Avisos en Neonflex',
        shortDescription: 'zzz...',
        description: 'dfjsdfsd',
        basicPrice: 25000,
        minQuantity: 5,
        url: '/servicios/publicidad_exterior/avisos_neonflex',
        displayImage: '/img/products/publicidad_exterior.jpg',
        altDisplay: 'Avisos neonflex en santiago',
        gallery: [''],
        products: [
            {
                title:'Letrero Neonflex',
                img: '/img/products/publicidad_exterior/neonflex_sencillo.jpg',
                altImg:'Letreros neonflex en santiago',
                shortDescription:'', 
                priceConfig: {
                    priceType: 'Precio por Cm2',
                    price: 80000,
                    queantity: 1000,
                }
            },
            {
                title:'Letrero Neonflex Colores',
                img: '/img/products/publicidad_exterior/neonflex_color.jpg',
                altImg:'Letreros neonflex colores en santiago',
                shortDescription:'', 
                priceConfig: {
                    priceType: 'Precio por Cm2',
                    price: 80000,
                    queantity: 1000,
                }
            },
        ]
    },
    {
        code: '0501',
        type: 'Gran Formato',
        name: 'Vinilos Adhesivos',
        shortDescription: 'Con el vinilo adhesivo es perfecto para personalizar tus espacios bien sean interiores o exteriores ya que tienen una alta resistencia a todo tipo de condiciones',
        description: '',
        basicPrice: 30000,
        minQuantity: 1,
        url: '/servicios/gran_formato/vinilos_adhesivos',
        displayImage: '/img/products/gran_formato/vinilo.jpg',
        altDisplay: 'Diseño e Impresion de vinilos adhesivos en santiago',
        gallery: [''],
        products: [
            {
                title:'Vinilo Fotomural',
                img: '/img/products/gran_formato/vinilo_fotomural.jpg',
                altImg:'Diseño e impresion de fotomurales en santiago',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio por Cm2',
                    price: 80000,
                    queantity: 1000,
                }
            },
            {
                title:'Vinilo Floor Graphic',
                img: '/img/products/gran_formato/vinilo-floor-graphics.jpg',
                altImg:'vinilo floor grafhics en santiago',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio por Cm2',
                    price: 80000,
                    queantity: 1000
                }
            },
            {
                title:'Vinilo Reflectivo',
                img: '/img/products/gran_formato/vinilo_reflectivo.jpg',
                altImg:'vinilo reflectivo en santiago',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio por Cm2',
                    price: 80000,
                    queantity: 1000
                }
            },
            {
                title:'Vinilo Sandblasting Impreso',
                img: '/img/products/gran_formato/vinilo_sandblasting_impreso.jpg',
                altImg:'vinilo reflectivo en santiago',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio por Cm2',
                    price: 80000,
                    queantity: 1000
                }
            },
        ],
    },
    {
        code: '0502',
        type: 'Gran Formato',
        name: 'Microperforados',
        shortDescription: 'zzz...',
        description: 'dfjsdfsd',
        basicPrice: 25000,
        minQuantity: 5,
        url: '/servicios/gran_formato/microperforados',
        displayImage: '/img/products/gran_formato/microperforado.jpg',
        altDisplay: 'Impresión y diseño de microperforados en medellín',
        gallery: [''],
        products: [
            {
                title:'Vinilo Microperforado',
                img: '/img/products/gran_formato/microperforado_vinilo.jpg',
                altImg:'vinilo microperforado en santiago',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio por Cm2',
                    price: 80000,
                    queantity: 1000
                }
            },
            {
                title:'Lona Microperforada',
                img: '/img/products/gran_formato/microperforado_lona.jpg',
                altImg:'lona microperforada en santiago',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio por Cm2',
                    price: 80000,
                    queantity: 1000
                }
            },
        ]
    },
    {
        code: '0503',
        type: 'Gran Formato',
        name: 'Decoración Vehicular',
        shortDescription: 'zzz...',
        description: 'dfjsdfsd',
        basicPrice: 25000,
        minQuantity: 5,
        url: '/servicios/gran_formato/decoracion_vehicular',
        displayImage: '/img/products/gran_formato/decoracion_vehicular.jpg',
        altDisplay: 'Diseño e impresion de decoración vehicular en santiago',
        gallery: [''],
        products: [
            {
                title:'Vinilo Vehicular',
                img: '/img/products/gran_formato/decoracion_vehicular_vinilo.jpg',
                altImg:'vinilo vehicular en santiago',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio por Cm2',
                    price: 80000,
                    queantity: 1000
                }
            },
            {
                title:'Vinilo Microperforado Vehicular',
                img: '/img/products/gran_formato/decoracion_vehicular_microperforado.jpg',
                altImg:'vinilo vehicular microperforado en santiago',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio por Cm2',
                    price: 80000,
                    queantity: 1000
                }
            },
            {
                title:'Iman Vehicular',
                img: '/img/products/gran_formato/decoracion_vehicular_iman.jpg',
                altImg:'iman vehicular en santiago',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio por Cm2',
                    price: 80000,
                    queantity: 1000
                }
            },
        ]
    },
    {
        code: '0504',
        type: 'Gran Formato',
        name: 'Pendones',
        shortDescription: 'Diseñados para espacios interiores y exteriores, los pendones son recursos publicitarios que permiten el manejo de buenas cantidades de información en texto e imagen.',
        description: 'dfjsdfsd',
        basicPrice: 25000,
        minQuantity: 1,
        url: '/servicios/gran_formato/pendones',
        displayImage: '/img/products/gran_formato/pendon.jpg',
        altDisplay: 'Impresión y diseño de pendones en santiago',
        gallery: [''],
        products: [
            {
                title:'Pendon con Varillas',
                img: '/img/products/gran_formato/pendon_varillas.jpg',
                altImg:'Pendon con varillas en santiago',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio por Cm2',
                    price: 80000,
                    queantity: 1000
                }
            },
            {
                title:'Pendon con Ojales',
                img: '/img/products/gran_formato/pendon_ojales.jpg',
                altImg:'Pendon con Ojales en santiago',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio por Cm2',
                    price: 80000,
                    queantity: 1000
                }
            },
            {
                title:'Porta Pendon Araña',
                img: '/img/products/gran_formato/pendon_arana.jpg',
                altImg:'Porta pendon araña en santiago',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio Fijo',
                    price: 80000,
                    queantity: 1000,
                    quantities: [
                        '1','2','3','4','5','6','10'
                    ]
                }
            },
            {
                title:'Porta Pendon Roll Up',
                img: '/img/products/gran_formato/pendon_roll_up.jpg',
                altImg:'Porta pendon roll up en santiago',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio Fijo',
                    price: 80000,
                    queantity: 1000,
                    quantities: [
                        '1','2','3','4','5','6','10'
                    ]
                }
            },
        ]
    },
    {
        code: '0505',
        type: 'Gran Formato',
        name: 'Señalización',
        shortDescription: 'zzz...',
        description: 'dfjsdfsd',
        basicPrice: 25000,
        minQuantity: 5,
        url: '/servicios/gran_formato/senalizacion',
        displayImage: '/img/products/gran_formato/senalizacion.jpg',
        altDisplay: 'Impresión y diseño de señalicación en medellín',
        gallery: [''],
        products: [
            {
                title:'Señalización en Poliestireno',
                img: '/img/products/gran_formato/senalizacion_poliestireno.jpg',
                altImg:'Señalizacion en polistireno en santiago',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio por Cm2',
                    price: 80000,
                    queantity: 1000
                }
            },
            {
                title:'Señalización con Base',
                img: '/img/products/gran_formato/senalizacion_base.jpg',
                altImg:'Señalizacion en polistireno en santiago',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio por Cm2',
                    price: 80000,
                    queantity: 1000
                }
            },
        ]
    },
    {
        code: '0506',
        type: 'Gran Formato',
        name: 'Plotter de Corte',
        shortDescription: 'Con el plotter de corte, las posibilidades son infinitas, una completa personalización para tus espacio o cualquier superficie, el limite es tu imaginación.',
        description: 'dfjsdfsd',
        basicPrice: 25000,
        minQuantity: 1,
        url: '/servicios/gran_formato/plotter_de_corte',
        displayImage: '/img/products/gran_formato/plotter_corte.jpg',
        altDisplay: 'Servicio de corte en plotter en medellín',
        gallery: [''],
        products: [
            {
                title:'Corte de Vinilo en Plotter',
                img: '/img/products/gran_formato/plotter_corte_negro.jpg',
                altImg:'corte vinilo en plotter en santiago',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio por Cm2',
                    price: 80000,
                    queantity: 1000
                }
            },
            {
                title:'Corte Vinilo Impreso en Plotter',
                img: '/img/products/gran_formato/plotter_corte_impreso.jpg',
                altImg:'corte vinilo impreso en plotter en santiago',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio por Cm2',
                    price: 80000,
                    queantity: 1000
                }
            },
        ]
    },
    {
        code: '0601',
        type: 'Promocionales',
        name: 'Lapiceros',
        shortDescription: 'zzz...',
        description: 'dfjsdfsd',
        basicPrice: 25000,
        minQuantity: 5,
        url: '/servicios/promocionales/lapiceros_personalizados',
        displayImage: '/img/products/promocionales/lapicero.jpg',
        altDisplay: 'Lapiceros personalizados en santiago',
        gallery: [''],
        products: [
            {
                title:'Lapicero Plastico',
                img: '/img/products/promocionales/lapicero_plastico.jpg',
                altImg:'Lapicero plastico personalizado en santiago',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio Fijo',
                    price: 80000,
                    queantity: 1000,
                    quantities: [
                        '50','100','200','500','1000','2000'
                    ]
                }
            },
            {
                title:'Lapicero Metalico',
                img: '/img/products/promocionales/lapicero_metalico.jpg',
                altImg:'Lapicero metalico personalizado en santiago',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio Fijo',
                    price: 80000,
                    queantity: 1000,
                    quantities: [
                        '50','100','200','500','1000','2000'
                    ]
                }
            },
            {
                title:'Lapicero Ecológico',
                img: '/img/products/promocionales/lapicero_ecologico.jpg',
                altImg:'Lapicero ecologico personalizado en santiago',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio Fijo',
                    price: 80000,
                    queantity: 1000,
                    quantities: [
                        '50','100','200','500','1000','2000'
                    ]
                }
            },
        ]
    },
    {
        code: '0602',
        type: 'Promocionales',
        name: 'Laveros Personalizados',
        shortDescription: 'zzz...',
        description: 'dfjsdfsd',
        basicPrice: 25000,
        minQuantity: 5,
        url: '/servicios/promocionales/llaveros_personalizados',
        displayImage: '/img/products/promocionales/llavero.jpg',
        altDisplay: 'Llaveros personalizados en santiago',
        gallery: [''],
        products: [
            {
                title:'Llaveros en Acrílico Grabado',
                img: '/img/products/promocionales/llavero_acrilico_grabado.jpg',
                altImg:'Llavero de acrilico grabado en santiago',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio Fijo',
                    price: 80000,
                    queantity: 1000,
                    quantities: [
                        '50','100','200','500','1000','2000'
                    ]
                }
            },
            {
                title:'Llaveros en Teslin Laminado',
                img: '/img/products/promocionales/llavero_teslin.jpg',
                altImg:'Llavero de teslin laminado en santiago',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio Fijo',
                    price: 80000,
                    queantity: 1000,
                    quantities: [
                        '50','100','200','500','1000','2000'
                    ]
                }
            },
        ]
    },
    {
        code: '0603',
        type: 'Promocionales',
        name: 'Termos',
        shortDescription: 'zzz...',
        description: 'dfjsdfsd',
        basicPrice: 25000,
        minQuantity: 5,
        url: '/servicios/promocionales/termos',
        displayImage: '/img/products/promocionales/termo.jpg',
        altDisplay: 'Termos personalizados en santiago',
        gallery: [''],
        products: [
            {
                title:'Termo Blanco Personalizado',
                img: '/img/products/promocionales/termo_blanco.jpg',
                altImg:'Termo blanco personalizado en santiago',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio Fijo',
                    price: 80000,
                    queantity: 1000,
                    quantities: [
                        '50','100','200','500','1000','2000'
                    ]
                }
            },
            {
                title:'Termo Metalizado Personalizado',
                img: '/img/products/promocionales/termo_metalizado.jpg',
                altImg:'Termo metalizado personalizado en santiago',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio Fijo',
                    price: 80000,
                    queantity: 1000,
                    quantities: [
                        '10','20','50','100','200','500','1000','2000'
                    ]
                }
            },
        ]
    },
    {
        code: '0604',
        type: 'Promocionales',
        name: 'Mugs Personalizados',
        shortDescription: 'zzz...',
        description: 'dfjsdfsd',
        basicPrice: 25000,
        minQuantity: 5,
        url: '/servicios/promocionales/mugs',
        displayImage: '/img/products/promocionales/mug.jpg',
        altDisplay: 'Mugs personalizados en santiago',
        gallery: [''],
        products: [
            {
                title:'Mug Sencillo',
                img: '/img/products/promocionales/mug_sencillo.jpg',
                altImg:'Mug personalizado en santiago',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio Fijo',
                    price: 80000,
                    queantity: 1000,
                    quantities: [
                        '10','20','50','100','200','500','1000','2000'
                    ]
                }
            },
            {
                title:'Mug Magico',
                img: '/img/products/promocionales/mug_magico.jpg',
                altImg:'Mug magico personalizado en santiago',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio Fijo',
                    price: 80000,
                    queantity: 1000,
                    quantities: [
                        '10','20','50','100','200','500','1000','2000'
                    ]
                }
            },
            {
                title:'Mug con Cuchara',
                img: '/img/products/promocionales/mug_cuchara.jpg',
                altImg:'Mug con cuchara personalizado en santiago',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio Fijo',
                    price: 80000,
                    queantity: 1000,
                    quantities: [
                        '10','20','50','100','200','500','1000','2000'
                    ]
                }
            },
        ]
    },
    {
        code: '0605',
        type: 'Promocionales',
        name: 'Camisetas Personalizadas',
        shortDescription: 'Bien sea para uso personal o para tu empresa, las camisetas personalizadas haran que tu mensaje o marca y llegue a mas personas y a la vez proyecte una imagen de organización.',
        description: 'dfjsdfsd',
        basicPrice: 25000,
        minQuantity: 5,
        url: '/servicios/promocionales/camisetas_personalizadas',
        displayImage: '/img/products/promocionales/camiseta.jpg',
        altDisplay: 'Camisetas personalizadas en santiago',
        gallery: [''],
        products: [
            {
                title:'Camiseta Sencilla',
                img: '/img/products/promocionales/camiseta_sencilla.jpg',
                altImg:'Camisetas sencillas personalizadas en santiago',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio Fijo',
                    price: 80000,
                    queantity: 1000,
                    quantities: [
                        '10','20','50','100','200','500','1000','2000'
                    ]
                }
            },
            {
                title:'Camiseta Tipo Polo',
                img: '/img/products/promocionales/camiseta_polo.jpg',
                altImg:'Camisetas tipo polo personalizadas en santiago',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio Fijo',
                    price: 80000,
                    queantity: 1000,
                    quantities: [
                        '10','20','50','100','200','500','1000','2000'
                    ]
                }
            },
            {
                title:'Buzo con Capucha',
                img: '/img/products/promocionales/camiseta_poleron.jpg',
                altImg:'Poleron personalizado en santiago',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio Fijo',
                    price: 80000,
                    queantity: 1000,
                    quantities: [
                        '10','20','50','100','200','500','1000','2000'
                    ]
                }
            },
        ]
    },
    {
        code: '0701',
        type: 'Cajas y Empaques',
        name: 'Cajas Plegadizas',
        shortDescription: 'Aquí va el texto descriptivo para cajas plegadizas',
        description: 'dfjsdfsd',
        basicPrice: 500000,
        minQuantity: 100,
        url: '/servicios/cajas_y_empaques/cajas_plegadizas',
        displayImage: '/img/products/cajas_empaques/plegadizas.jpg',
        altDisplay: 'Cajas plegadizas en medellín',
        gallery: [''],
        products: [
            {
                title:'Caja Plegadiza Ecológica',
                img: '/img/products/cajas_empaques/plegadizas_ecologicas.jpg',
                altImg:'Caja plegadiza ecológica en nedellín',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio Fijo',
                    price: 80000,
                    queantity: 1000,
                    quantities: [
                        '10','20','50','100','200','500','1000','2000'
                    ]
                }
            },
            {
                title:'Caja Plegadiza Impresa',
                img: '/img/products/cajas_empaques/plegadizas_impresas.jpg',
                altImg:'Caja plegadiza impresa en nedellín',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio Fijo',
                    price: 80000,
                    queantity: 1000,
                    quantities: [
                        '10','20','50','100','200','500','1000','2000'
                    ]
                }
            },
        ]
    },
    {
        code: '0702',
        type: 'Cajas y Empaques',
        name: 'Tapa y Base',
        shortDescription: 'Aquí va el texto descriptivo para cajas de tapa y',
        description: 'dfjsdfsd',
        basicPrice: 500000,
        minQuantity: 100,
        url: '/servicios/cajas_y_empaques/cajas_tapa_base',
        displayImage: '/img/products/cajas_empaques/tapa_base.jpg',
        altDisplay: 'Cajas tapa_base en medellín',
        gallery: [''],
        products: [
            {
                title:'Taba y Base Ecológica',
                img: '/img/products/cajas_empaques/tapa_base_ecologicas.jpg',
                altImg:'Caja plegadiza ecológica en nedellín',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio Fijo',
                    price: 80000,
                    queantity: 1000,
                    quantities: [
                        '10','20','50','100','200','500','1000','2000'
                    ]
                }
            },
            {
                title:'Tapa y Base Impresa',
                img: '/img/products/cajas_empaques/tapa_base_impresas.jpg',
                altImg:'Caja plegadiza impresa en nedellín',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio Fijo',
                    price: 80000,
                    queantity: 1000,
                    quantities: [
                        '10','20','50','100','200','500','1000','2000'
                    ]
                }
            },
        ]
    },
    {
        code: '0705',
        type: 'Cajas y Empaques',
        name: 'Bolsas de Papel',
        shortDescription: 'Descripción de bolsas de papel',
        description: 'dfjsdfsd',
        basicPrice: 500000,
        minQuantity: 100,
        url: '/servicios/cajas_y_empaques/bolsas_de_papel',
        displayImage: '/img/products/cajas_empaques/bolsa_papel.jpg',
        altDisplay: 'Bolsas de papel personalizadas en medellín',
        gallery: [''],
        products: [
            {
                title:'Bolsas con Manigueta',
                img: '/img/products/cajas_empaques/bolsa_papel_manigueta.jpg',
                altImg:'Bolsa de papel con manigueta en medellin',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio Fijo',
                    price: 80000,
                    queantity: 1000,
                    quantities: [
                        '100','200','500','1000','2000','5000','10000'
                    ]
                }
            },
            {
                title:'Bolsa para Comestibles',
                img: '/img/products/cajas_empaques/bolsa_papel_comestibles.jpg',
                altImg:'Bolsa de papel para comestibles en medellín',
                shortDescription:'',
                priceConfig: {
                    priceType: 'Precio Fijo',
                    price: 80000,
                    queantity: 1000,
                    quantities: [
                        '100','200','500','1000','2000','5000','10000'
                    ]
                }
            },
        ]
    },
]