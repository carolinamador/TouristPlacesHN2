

use TouristPlacesHn

---Login
    

db.usuario.insert({id_usuario: 1,usuario:"dlopez",nombre:"Leonardo Lopez",pass:"110620123",confirm_pass:"110620123",correo:"leonardo1986@hotmail.com"}) 
db.usuario.insert({id_usuario: 2,{usuario:"lmurillo",nombre:"Lissy Murillo",pass:"AdrianaAndres",confirm_pass:"AdrianaAndres",correo:"libbey25@hotmail.com"}) 
db.usuario.insert({id_usuario: 3,usuario:"flopez",nombre:"Fausto Lopez",pass:"Impacto",confirm_pass:"Impacto",correo:"faustolopez@gamil.com"}) 
db.usuario.insert({id_usuario: 4,usuario:"nmurillo",nombre:"Nahel Murillo",pass:"LeonOlimpia",confirm_pass:"LeonOlimpia",correo:"nahelmurillo@gamil.com"}) 



--Amapala Hoteles
db.destino_hotel.insert({Destino: "Amapala",Nombre: "Casa de las Gargolas",Contanto: "2232-4606, 2795-8529", Descripcion: "Hostal Casa de Las Gárgolas está localizado en la insólita y paradisíaca Isla de Amapala, Honduras.  Destino turístico exuberante donde sus leyendas, tranquilidad y hospitalidad ofrecen a su paseo, eventos o vacaciones una exótica, placentera y divertida aventura."})
db.destino_hotel.insert({Destino: "Amapala",Nombre: "Hotel Mirador de Amapala",Contanto: "2795-8592", Descripcion: "Hotel Mirador de Amapala, ubicado en Amapala, Honduras. Es un hotel que cuenta con habitaciones cómodas con los servicios básicos para hacer de su estadía conformatable en la Zona Sur de Honduras. Cada habitación cuenta con: aire acondicionado, agua caliente y TV por cable desde donde podrá disfrutar de vistas impresionantes y relajantes."})
db.destino_hotel.insert({Destino: "Amapala",Nombre: "Hotel Playa Negra",Contanto: "2795-8027, 98774681", Descripcion: "Hotel Playa Negra está ubicado en Amapala, Honduras. Le ofrece 52 confortables habitaciones con baño privado, aire acondicionado, TV, y atención personalizada en todo momento bajo un ambiente familiar. Sus amplias instalaciones también cuentan con restaurante y bar, donde podrá disfrutar de deliciosos platillos y su especialidad los mariscos frescos de la localidad, salón para eventos y conferencias, área y mesas de juegos y una amplia piscina."})
db.destino_hotel.insert({Destino: "Amapala",Nombre: "Hotel Terra Mar",Contanto: "3364-6394", Descripcion: "Hotel Terra Mar es una opción de alojamiento exclusiva, en una orilla de la isla de Zacate Grande, entre manglares y con vistas a la Bahía de Chismuyo.Hotel Terra Mar cuenta con  tres habitaciones, con todos los servicios incluidos: aire acondicionado y ventilador, televisión, baño privado e internet inalámbrico. Puede disfrutar en el restaurante y bar, e incluso llevar a cabo eventos en este salón con capacidad para aproximadamente 60 personas"})

--Amapala Restaurante- 
db.destino_restaurante.insert({Destino: "Amapala",Nombre: "Restaurante Terra Mar",Contanto: "3364 6393", Descripcion: "En una orilla de la isla de Zacate Grande, rodeado de manglares y con vista a la bahía de Chismuyo, atiende a clientela VIP desde el 2010 el Restaurante Terra Mar. Con ambiente internacional, está decorado con cuadros y adornos de diferentes culturas. Contiene una colección de platos de diferentes países y curiosas antigüedades que son tan dignas de conservación como la zona protegida donde se encuentra.", Horario:"7:00 AM - 10:00 PM"})
db.destino_restaurante.insert({Destino: "Amapala",Nombre: "Restaurante Veleros Gualoritas",Contanto: "2795-8040, 9898-2285", Descripcion: "Restaurante Veleros Gualoritas es el sitio ideal en Amapala para comer los productos de la zona, los mariscos; ya que estos son su especialidad y su menú contiene más de 30 platillos y 20 refrescantes bebidas.  Llegue un fin de semana a disfrutar de una deliciosa sopa marinera frente al mar.",Horario:"7:00 AM - 10:00 PM"})



---Copan Ruinas Hoteles
db.destino_hotel.insert({Destino: "Copan Ruinasi",Nombre: "Hotel Plaza Copán",Contanto: "2651 4508, 2651 3832", Descripcion: "Hotel Plaza Copán está ubicado en el centro de la ciudad de Copán Ruinas en Honduras. La carta de presentación del Hotel Plaza Copán es ofrecerle el mejor servicio al cliente. Su ubicación estratégica es perfecta para poner en contacto al turista con la vida del pueblo, sus costumbres y su cultura, y especialmente gozar la hospitalidad de los habitantes de la cuna de los Mayas."})
db.destino_hotel.insert({Destino: "Copan Ruinas",Nombre: "Carrillos Hotel",Contanto: "2651-4083", Descripcion: "Ubicado a dos cuadras del Parque Central de Copán Ruinas, Carrillos Hotel le proporciona a sus huéspedes la oportunidad de explorar los atractivos dentro y fuera del pueblo."})
db.destino_hotel.insert({Destino: "Copan Ruinas",Nombre: "Casa Canstejón, Finca El Cisne",Contanto: "2651 4695", Descripcion: "Ubicada a una hora de la ciudad de Copán Ruinas, Finca El Cisne es el lugar perfecto para escapar de la ajetreada vida de la ciudad. El viajero podrá hospedar en Casa Castejón, donde lo atenderán como si fuese un miembro más de la familia."})
db.destino_hotel.insert({Destino: "Copan Ruinas",Nombre: "Lauro’s Hotel",Contanto: "2651 4068, 9817 3660, 9986 1257", Descripcion: "Lauro’s Hotel es un establecimiento familiar en el cual el huésped contará con las comodidades que necesita para tener una agradable estadía."})
db.destino_hotel.insert({Destino: "Copan Ruinas",Nombre: "Hotel Clarion Copán Ruinas",Contanto: "2651 4480, 2651 4482, 2651 4483, 2651 4485", Descripcion: "Operado bajo los estándares de Choice Hotels, el Hotel Clarion Copán Ruinas le garantiza un servicio de alta calidad con instalaciones que le brindan el ingrediente perfecto para una estadía placentera. Sus habitaciones amplias y confortables permiten el mejor descanso después de un día lleno de actividades en las imponentes ruinas Mayas. Aquí, el huésped estará rodeado de hermosos jardines y áreas verdes, combinados con el sentir de la naturaleza y el mejor legado arqueológico que nos heredaron, nuestros ancestros."})

---Copan Ruinas Restaurantes
db.destino_restaurante.insert({Destino: "Copan Ruinas",Nombre: "British Colonial House",Contanto: "9952 8393", Descripcion: "Aquí encontrará un menú internacional inspirado en los gustos tradicionales y sabores exóticos del Imperio Británico durante la época Colonial. British Colonial House ofrece los platillos favoritos de las Islas Británicas, así como el continente europeo, la India, Tailandia, Asia, África, el Caribe y las América.",Horario:"7:00 AM - 10:00 PM"})
db.destino_restaurante.insert({Destino: "Copan Ruinas",Nombre: "Pupusería Mary",Contanto: "2651 4673", Descripcion: "Desde 1998, este lugar se ha hecho un nombre en Copán Ruinas debido a su especialidad, las pupusas. Gracias a ello, crecieron y se cambiaron a una nueva localidad en 2012. La idea de sus dueños fue tener un lugar típico, sencillo y agradable, y fue así que la inspiración de ellos se plasmó en Pupusería Mary.",Horario:"7:00 AM - 10:00 PM"})
db.destino_restaurante.insert({Destino: "Copan Ruinas",Nombre: "B’alam Café",Contanto: "2651 3517, 2651 4338", Descripcion: "Desde 2008, se encuentra escondido debajo de Hotel Plaza Yat B’alam  uno de los únicos verdaderos cafés de Copán. Con un concepto diferente en la creación de emparedados de pan de pita y dándole una variedad para un deleite de sabor, aquí encontrará entre su especialidades la pita especial con jamón de pavo aguacate, cebolla salteada, quesillo, tomate acompañada con papas; pero para variar el gusto de sus visitantes, B’alam Café le ofrece la pita italiana, vegetariana, pita de pollo y pita pizza. Todas servidas con queso mozzarella o quesillo, ¡una delicia!.",Horario:"7:00 AM - 10:00 PM"})
db.destino_restaurante.insert({Destino: "Copan Ruinas",Nombre: "Restaurante Hacienda El Jaral",Contanto: "2656 7091", Descripcion: "Un restaurante de calidad a su servicio, usted puede relajarse en un ambiente especial, disfrutando de un desayuno, almuerzo o la cena.También una amplia variedad de vinos y licores nacionales e internacionales, gaseosas y más.",Horario:"7:00 AM - 10:00 PM"})
db.destino_restaurante.insert({Destino: "Copan Ruinas",Nombre: "Restaurante los Asados",Contanto: "2651 4267, 9935 9076", Descripcion: "No se deje de impresionar por lo sencillo e informal del sitio, aquí sirven los mejores churrascos más deliciosos de Copán Ruinas. Asados Copán ha tenido muchos cambios tanto de local como de servicio. La idea surgió de su dueño, Jerónimo Mejía, él idealizó dar apertura a un sitio céntrico y con un ambiente muy relajado.",Horario:"7:00 AM - 10:00 PM"})



---Lago de Yojoa Holtel

db.destino_hotel.insert({Destino: "Lago de Yojoa",Nombre: "Bioparque Paradise",Contanto: "9502 8189, 9610 8315", Descripcion: "Definido y conocido como una reserva natural privada, Bioparque Paradise le espera con cómodas cabañas y habitaciones. Son ocho en total y en ellas podrá contar con baño privado y agua caliente. Entre los servicios que brinda el sitio se encuentran una cafetería, sala de reuniones, piscina y área de campamento y fogata."})
db.destino_hotel.insert({Destino: "Lago de Yojoa",Nombre: "El Cortijo del Lago",Contanto: "3178 9852, 9906 5333, 2608 5527", Descripcion: "El Cortijo del Lago es un excelente hotel de descanso con una vista espectacular del Lago de Yojoa. Aquí podrá encontrar habitaciones con baño privado, agua caliente, aire acondicionado y ventilador. El hotel también cuenta con salón de reuniones, restaurante, tienda de artesanías locales y de Sabanagrande, botes de pesca y bar."}) 
db.destino_hotel.insert({Destino: "Lago de Yojoa",Nombre: "Hotel El Encanto",Contanto: "2654 8404", Descripcion: "Hotel El Encanto está ubicado en la entrada principal de Santa Cruz de Yojoa, Honduras. El hotel cuenta con 16 cómodas y confortables habitaciones con los servicios de agua caliente, TV por cable, caja de seguridad e internet WiFi."}) 
db.destino_hotel.insert({Destino: "Lago de Yojoa",Nombre: "Hotel Posada del Rey",Contanto: "2654 8662, 2654 8664 ", Descripcion: "Hotel Posada del Rey le espera con un agradable y muy colorido ambiente en Santa Cruz de Yojoa. Ellos cuentan con siete habitaciones dobles, tres triples, dos triples suite y una habitación principal. En ellas podrá encontrar los servicios de televisión por cable, aire acondicionado, agua caliente y fría e internet inalámbrico. El hotel también ofrece estacionamiento privado y piscinas para su entretenimiento."}) 
db.destino_hotel.insert({Destino: "Lago de Yojoa",Nombre: "Hotel y Finca Las Glorias",Contanto: "2608 2556, 2625 0978, 9629 0176, 2566 0461", Descripcion: "Hotel y Finca Las Glorias está localizado a orillas del Lago de Yojoa, Honduras. A 85 kilómetros de la ciudad de San Pedro Sula y 160 kilómetros de Tegucigalpa en el corazón de una finca de café  rodeado de impresionante belleza natural."}) 

---Lago de Yojoa Restaurante

db.destino_hotel.insert({Destino: "Lago de Yojoa",Nombre: "Bioparque Paradise",Contanto: "9502 8189, 9610 8315", Descripcion: "Definido y conocido como una reserva natural privada, Bioparque Paradise le espera con cómodas cabañas y habitaciones. Son ocho en total y en ellas podrá contar con baño privado y agua caliente. Entre los servicios que brinda el sitio se encuentran una cafetería, sala de reuniones, piscina y área de campamento y fogata."})
db.destino_hotel.insert({Destino: "Lago de Yojoa",Nombre: "El Cortijo del Lago",Contanto: "3178 9852, 9906 5333, 2608 5527", Descripcion: "El Cortijo del Lago es un excelente hotel de descanso con una vista espectacular del Lago de Yojoa. Aquí podrá encontrar habitaciones con baño privado, agua caliente, aire acondicionado y ventilador. El hotel también cuenta con salón de reuniones, restaurante, tienda de artesanías locales y de Sabanagrande, botes de pesca y bar."}) 
db.destino_hotel.insert({Destino: "Lago de Yojoa",Nombre: "Hotel El Encanto",Contanto: "2654 8404", Descripcion: "Hotel El Encanto está ubicado en la entrada principal de Santa Cruz de Yojoa, Honduras. El hotel cuenta con 16 cómodas y confortables habitaciones con los servicios de agua caliente, TV por cable, caja de seguridad e internet WiFi."}) 
db.destino_hotel.insert({Destino: "Lago de Yojoa",Nombre: "Hotel Posada del Rey",Contanto: "2654 8662, 2654 8664 ", Descripcion: "Hotel Posada del Rey le espera con un agradable y muy colorido ambiente en Santa Cruz de Yojoa. Ellos cuentan con siete habitaciones dobles, tres triples, dos triples suite y una habitación principal. En ellas podrá encontrar los servicios de televisión por cable, aire acondicionado, agua caliente y fría e internet inalámbrico. El hotel también ofrece estacionamiento privado y piscinas para su entretenimiento."}) 
db.destino_hotel.insert({Destino: "Lago de Yojoa",Nombre: "Hotel y Finca Las Glorias",Contanto: "2608 2556, 2625 0978, 9629 0176, 2566 0461", Descripcion: "Hotel y Finca Las Glorias está localizado a orillas del Lago de Yojoa, Honduras. A 85 kilómetros de la ciudad de San Pedro Sula y 160 kilómetros de Tegucigalpa en el corazón de una finca de café  rodeado de impresionante belleza natural."}) 


---La Ceiba Holtel

db.destino_hotel.insert({Destino: "La Ceiba",Nombre: "Gran Hotel Paris",Contanto: "2440 1414, 2440 1416", Descripcion: "Ubicado en el corazón de La Ceiba, frente al parque central, desde su fundación en 1915, Gran Hotel Paris es el tradicional sitio de alojamiento para ejecutivos de negocios y turistas debido a su fácil acceso a los establecimientos de mayor actividad comercial, financiera y gubernamental."})
db.destino_hotel.insert({Destino: "La Ceiba",Nombre: "Apart Hotel Villas del Mar",Contanto: "2442 0083", Descripcion: "Apart Hotel Villas del Mar ubicado estratégicamente en La Ceiba, Honduras, cuenta ocho villas equipadas con habitaciones confortables con planta baja, sala, comedor, cocina y baño, internet inalámbrico, televisión por cable, ventiladores, aire acondicionado y agua caliente. También ofrece un amplio estacionamiento."})
db.destino_hotel.insert({Destino: "La Ceiba",Nombre: "Apart Hotel Pico Bonito",Contanto: "2442 3021, 2442 3442, 3177 6836", Descripcion: "AEn Apart Hotel Pico Bonito, en La Ceiba, se preocupan por brindarle el servicio de calidad que usted se merece. Aquí, su objetivo principal es que viva una experiencia inolvidable, y es que para empezar, Apart Hotel Pico Bonito ofrece excelentes tarifas de hospedaje."})
db.destino_hotel.insert({Destino: "La Ceiba",Nombre: "Hotel La Aurora",Contanto: "2442 8739, 2442 8736,  9720 7911", Descripcion: "Una de las ventajas del hotel La Aurora es que además de ser un espacio ejecutivo, se ubica a tres minutos del centro de La Ceiba, y muy cerca del centro comercial Megaplaza. Aquí usted contará con los servicios de restaurante/bar, piscina, gimnasio, sala de conferencia, estacionamiento, Wi-Fi, agua caliente, jacuzzi, boutique, estacionamiento gratuito y elevador."})
db.destino_hotel.insert({Destino: "La Ceiba",Nombre: "Hotel Partenon Beach",Contanto: "2443 3343, 2443 2606,  2443 2666", Descripcion: "Hotel Partenon Beach está ubicado en la Zona Viva de la ciudad de La Ceiba, Honduras. Nuevamente abre sus puertas con un aire totalmente renovado, para ofrecer a sus huéspedes servicios y atención de primera bajo un ambiente de total relax y su incomparable ambiente caribeño"})


---La Ceiba Restaurante

db.destino_restaurante.insert({Destino: "La Ceiba",Nombre: "Bar Las Hamacas",Contanto: " 2440 5325", Descripcion: "Divido en tres áreas, este bar hace honor al nombre Las Hamacas con la mezcla de estas piezas de descanso caribeñas y demás mobiliario apto para un momento de relajamiento.", Horario:"7:00 AM - 10:00 PM"})
db.destino_restaurante.insert({Destino: "La Ceiba",Nombre: "Cafeto",Contanto: "24410202, 9564 0415", Descripcion: "Famosos por sus capuchinos en La Ceiba, Cafeto le espera con un ambiente singular y lleno de calidez en su atención. Y es que gracias a sus tres estaciones estratégicamente ubicadas en el centro de la ciudad, Cafeto reúne a la mayor parte de ceibeños. En estos podrá encontrar desayunos, paninis, fina repostería y sus inigualables galletas.",Horario:"7:00 AM - 10:00 PM"})
db.destino_restaurante.insert({Destino: "La Ceiba",Nombre: "Club La Vela",Contanto: "2440-3311", Descripcion: "Club La Vela, el primer y único balneario, restaurante y bar en La Ceiba. Ubicado frente al Mar Caribe, rodeado de arena blanca y el relajante sonido de las olas, con una espectacular vista al mar, en un ambiente diferente y único en La Ceiba. Un lugar sano y seguro para compartir momentos de esparcimiento con su familia y amigos. Saboree los  exquisitos platillos y deliciosas bebidas que ofrece el restaurante, mientras se refresca en las piscinas de aguas cristalinas y el sonido de una cascada que le hará sentirse parte de la naturalez",Horario:"7:00 AM - 10:00 PM"})
db.destino_restaurante.insert({Destino: "La Ceiba",Nombre: "El mirador Ubicado en Sambo Creek" ,Contanto: "2408-9927, 2408-9929", Descripcion: "En el área de La Ceiba, Honduras, se ofrece una muy buena vista de montaña, mar y playa. Este Lugar cuenta con un bar internacional y una amplia carta de delicias culinarias. El buen servicio es algo que identifica a este restaurante que cuenta con precios accesibles. El menú  ofrece 29 platillos para que deleite su paladar, Abre todos los días para la hora del desayuno, el almuerzo y la cena. Se habla francés, inglés y español.",Horario:"7:00 AM - 10:00 PM"})
db.destino_restaurante.insert({Destino: "La Ceiba",Nombre: "El Patio", Contanto: " ", Descripcion: "Es una sucursal del famoso restaurante El Patio de Tegucigalpa. Ambiente agradable e informal bajo una enorme champa. Abierto todos los días para almuerzo y cena. Cuenta también con un bar equipado de todo tipo de bebidas.",Horario:"7:00 AM - 10:00 PM"})


---Roatan Holtel

db.destino_hotel.insert({Destino: "Roatan",Nombre: "Anthony’s Key Resort",Contanto: "2445-3003", Descripcion: "Fundado en 1968, Anthony’s Key Resort ha sido uno de los destinos principales más visitados por los turistas que llegan a la isla de Roatán. Aquí el visitante podrá interactuar directamente con la vida marina que rodea a Roatán"})
db.destino_hotel.insert({Destino: "Roatan",Nombre: "Barefoot Cay Resort",Contanto: "2455-6235, 9967-3642 ", Descripcion: "Barefoot Cay está ubicado en Brick Bay en Roatán, Islas de La Bahía, Honduras.  El paso es lento… Las playas blancas… El agua azul cristalino del mar Caribe.  Barefoot Cay Resort crea un sentimiento de calma y cercanía con la naturaleza a un nivel que pocos han experimentado.  El pequeño resort estilo boutique ofrece 9 lujosas y encantadoras acomodaciones en un exclusivo islote con excelente servicio y modernas comodidades,  con un diseño que invita a todo el que aprecia un buen libro y horas de silencio sin interrupción alguna.  Disfrute de actividades interminables: caminando en la playa, nadando, haciendo snorkeling, buceando, pescando, kayaks, y mucho mas."})
db.destino_hotel.insert({Destino: "Roatan",Nombre: "Cay View Hotel",Contanto: "2445-1202", Descripcion: "Cay View Hotel esta ubicado estratégicamente en la zona de Coxen Hole en la isla de Roatán. Cuenta con las acomodaciones y servicios de: aire acondicionado, agua caliente, TV cable; todos los servicios necesarios para que su estadía sea lo más placentera posible."})
db.destino_hotel.insert({Destino: "Roatan",Nombre: "Cocolobo",Contanto: "9898-4510", Descripcion: "Si comodidad y privacidad es lo que busca, entonces Cocolobo es el lugar ideal para hospedarse. El establecimiento cuenta con diez habitaciones acondicionadas para el máximo confort y disfrute del huésped, puede elegir entre cama King Size o cama unipersonal."})
db.destino_hotel.insert({Destino: "Roatan",Nombre: "Hotel La Quinta Roatán",Contanto: "2445-4087", Descripcion: "Hotel La Quinta Roatán está ubicado en West End, Roatán, Islas de La Bahía, Honduras. Es una excelente opción de alojamiento en el Caribe hondureño. Disfrute cómodamente y a precios convenientes de un destino turístico de clase mundial, con las opciones de alojamiento que le ofrece Hotel La Quinta Roatán en Islas de La Bahía, Honduras. El hotel cuenta con habitaciones sencillas, dobles y triples; todas ellas equipadas con: aire acondicionado, TV cable, refrigeradora en cada habitación, y baño privado con agua caliente."})

---Roatan Restaurante

db.destino_restaurante.insert({Destino: "Roatan",Nombre: "Buffalo Steak House",Contanto: "2445-5077, 2403-8066", Descripcion: "Desde los rincones más remotos del “Oeste” encontrará la decoración perfecta para hacer de su experiencia totalmente única. Venga y únase a Buffalo Steak House para ser recibido con el inconfundible aroma de su parrilla, lo que les hace recordar de sus barbacoas familiares en el patio.",Horario:"7:00 AM - 10:00 PM})
db.destino_restaurante.insert({Destino: "Roatan",Nombre: "Café Escondido",Contanto: " ", Descripcion: "Ubicado en la parte superior de West End Divers en West End, Café Escondido tiene un ambiente relajado con vistas al mar. Ellos ofrecen una mezcla única de platillos y uno especial cada día para buceadores. Se sirven todo tipo de bebidas como café espresso, granitas de café, batidos de frutas, cócteles, cervezas domésticas, cerveza de importación del mes, tazones de arroz y fideos y emparedados.",Horario:"7:00 AM - 10:00 PM"})
db.destino_restaurante.insert({Destino: "Roatan",Nombre: "Cayuco Beach Bar",Contanto: "2445-5076", Descripcion: "Al referirse a Roatán, uno siempre debe hacer referencia al mar tranquilo. Siguiendo su corredor natural a través de jardines frondosos hasta llegar al mar, se encuentra el acogedor Cayuco Beach Bar esperando su llegada y listo para hacerse cargo de sus necesidades. Siéntese en el bar, pida una mesa o por qué no simplemente ordene desde su tumbona. Su personal estará listo para atenderle ya sea para el almuerzo, una merienda o simplemente para aprovechar del bar grill. Asegúrese de no perderse las puestas de sol en Cayuco Beach Bar, ¡son memorables!",Horario:"7:00 AM - 10:00 PM"})
db.destino_restaurante.insert({Destino: "Roatan",Nombre: "Tong’s Thai Island Cuisine",Contanto: "2445 4369", Descripcion: "Tong‘s Thai Island Cuisine es considerado como uno de los principales restaurantes, debido a la alta calidad de la comida, un gran servicio, increíble ubicación y consistencia. Deguste algunos platillos del popular restaurante: sopa de zacate de limón con camarones y tallarines de arroz con salsa de tamarindo. ¿Postres? Banano frito con arroz, cubierto con miel y menta, más una bola de helado",Horario:"7:00 AM - 10:00 PM"})


---Tegucigalpa Holtel

db.destino_hotel.insert({Destino: "Tegucigalpa",Nombre: "Aparthotel Guijarros",Contanto: "2235 6851, 2235 3051, 2235 3052", Descripcion: "Aparthotel Guijarros está dirigido tanto a funcionarios ejecutivos de empresas y organismos internacionales como a familias que visitan Tegucigalpa, Honduras. El lugar ofrece habitaciones y apartamentos para estadías cortas y largas, con tarifas muy accesibles, las que incluyen desayuno buffet, internet inalámbrico, centro ejecutivo, cafetería, sauna, minigimnasio, piscina y seguridad las 24 horas"})
db.destino_hotel.insert({Destino: "Tegucigalpa",Nombre: "Clarion Hotel Real Tegucigalpa",Contanto: "2202 4200", Descripcion: "El Clarion Hotel Real Tegucigalpa se encuentra en el corazón del centro de negocios y de ocio de la capital de Honduras. Cercano a centros comerciales y restaurantes, Clarion Hotel Real Tegucigalpa es una excelente opción gracias a la variedad de servicios que le harán sentir en un ambiente acogedor y cálido. Aquí también se mantendrá conectado con amigos, familiares y entretenimiento a través de su Internet inalámbrico de alta velocidad"})
db.destino_hotel.insert({Destino: "Tegucigalpa",Nombre: "Holiday Inn Express Tegucigalpa",Contanto: "2275 3400", Descripcion: "Ubicado en el corazón del nuevo distrito financiero y comercial de la capital de Honduras, el hotel Holiday Inn Express Tegucigalpa se encuentra a minutos de la Torre Metropolis y muy cerca de las principales entidades financieras. También se encuentra conectado a las avenidas comerciales más importantes de la ciudad, entre ellos los bulevares Morazán, Suyapa y Miraflores."})
db.destino_hotel.insert({Destino: "Tegucigalpa",Nombre: "Hotel Alameda",Contanto: "2232 6920, 2232 6932", Descripcion: "Ubicado en la zona céntrica de Tegucigalpa, Honduras, hotel Alameda le espera con amplias y cómodas instalaciones. Venga y disfrute de la cortesía y amistad de su equipo de colaboradores, de su experiencia, y del ambiente encantador de un moderno hotel. Con una decoración inspirada en el tema español, hotel Alameda es un hotel de 3 estrellas bajo estándares internacionales de calidad."})
db.destino_hotel.insert({Destino: "Tegucigalpa",Nombre: "Hotel Honduras Maya",Contanto: "2220 5000, 2280 5000", Descripcion: "Entre los cerros de plata de la colonial Tegucigalpa, sobresale el monumental edifico del Hotel y Centro de Convenciones Honduras Maya, instalaciones que se ha convertido desde 1970, en el centro de reunión por excelencia para turistas extranjeros y nacionales que hacen de sus estadías de diversión o trabajo, una experiencia sin igual."})


---Tegucigalpa Restaurante

db.destino_restaurante.insert({Destino: "Tegucigalpa",Nombre: "Baleadas Kennedy",Contanto: "2230 4602", Descripcion: "Un negocio familiar iniciado en 1993 por Doña Marina y Don José Ramón. A pasar los años se incorporaron a la fuerza de trabajo nueras, tíos, sobrinos, sobrinas, yernos manteniendo así la calidez de un negocio con ambiente familiar. Actualmente cuenta con cinco establecimientos distribuidos estratégicamente en la capital.",Horario:"7:00 AM - 10:00 PM"})
db.destino_restaurante.insert({Destino: "Tegucigalpa",Nombre: "Cafemanía Coffee Shop & Bakery",Contanto: "2225-1675", Descripcion: "Franquicia 100% hondureña ubicado en Tegucigalpa, Honduras.  Cafemanía ofrece servicio, comodidad, atención, elegancia, un espacio muy “inn” en la capital hondureña por el diseño innovador de sus restaurantes en los que con una peculiar arquitectura en donde se combinan la pasión por tomar una deliciosa tasa de café y exquisita repostería, cuenta con salones acogedores, modernos e innovadores con acceso total al internet.",Horario:"7:00 AM - 10:00 PM"})
db.destino_restaurante.insert({Destino: "Tegucigalpa",Nombre: "Restaurante Asados El Gordo",Contanto: "2221-0152", Descripcion: "La franquicia Hondureña de Carnes tiene varias sucursales en la ciudad de Tegucigalpa.  Aquí podra disfrutar de un buen corte de carne Hondureña acompañado de los tradicionales frijoles fritos, queso, encurtidos y tortillas, las parrilladas son la especialidad de la casa.",Horario:"7:00 AM - 10:00 PM"})
db.destino_restaurante.insert({Destino: "Tegucigalpa",Nombre: "Restaurante El Patio",Contanto: "2221-3842, 2221-4141", Descripcion: "Uno de los restaurantes con mayor tradición en Tegucigalpa y uno de los deberes de quienes visiten la capital por primera vez. Decorado delicadamente con replicas Mayas donde le sirven los mejores y mas riquisimos anafres (fondue catracho hecho de frijoles y queso) y pinchos la especialidad de la casa. Realmente el lugar mas preferible para parrilleros y comensales inclinados por la brasa, en El Patio se especializan en los mejores asados en Tegucigalpa.",Horario:"7:00 AM - 10:00 PM"})
db.destino_restaurante.insert({Destino: "Tegucigalpa",Nombre: "Restaurante Tony’s Mar",Contanto: "2239-9379, 2232-5266", Descripcion: "Disfrute de un ambiente  elegante y distinguido donde podrá degustar de los frutos del mar de alta calidad.  Uno de los platillos más suculentos es el pescado relleno y las exquisitas sopas. Para ir en familia y con amigos a disfrutar de un sabor caribeño y de los mejores platillos de mariscos en Tegucigalpa, su mejor opción es Restaurante Tony’s Mar",Horario:"7:00 AM - 10:00 PM"})


---San Pedro Sula Holtel

db.destino_hotel.insert({Destino: "San Pedro Sula",Nombre: "Apart Hotel Villa Nuria",Contanto: "2559-4801", Descripcion: "Apart-Hotel Villa Nuria es un nuevo concepto hotelero en Honduras, su estructura y servicios nos hace únicos, ubicados en San Pedro Sula, Capital Industrial y Centro de partida hacia los sitios turísticos más importantes del país.Tenemos 202 apartamentos totalmente equipados para una ocupación máxima de 4 personas, con tarifas ideales y económicas para aquellos que buscan calidad a buen precio"})
db.destino_hotel.insert({Destino: "San Pedro Sula",Nombre: "Apart Hotel Villas Larissa",Contanto: "2565-3305, 2656-3338", Descripcion: "Apart Hotel Villas Larissa está ubicado en la ciudad de San Pedro Sula, Honduras. Cuenta con tres tipos de alojamiento; apartamento-estudio, apartamento doble y suite principal, cada uno ha sido fina y completamente equipado y cuentan con los servicios de: aire acondicionado, TV por cable, baños privados, internet inalámbrico, todo para hacer de su estadía inolvidable en uno de los mejores hoteles en San Pedro Sula."})
db.destino_hotel.insert({Destino: "San Pedro Sula",Nombre: "Casa Armenta Hostel",Contanto: "9663-3051", Descripcion: "Casa Armenta Eco-Hostel es un espacio para mochileros que buscan pasar un buen rato en un ambiente relajado rodeado de naturaleza tropical. Siéntase en casa y seguro, incorpórese a la comunidad y conozca el impacto positivo que su visita causa en ella."})
db.destino_hotel.insert({Destino: "San Pedro Sula",Nombre: "Hotel Boutique La Casa de Los Arcos",Contanto: "2556-8896", Descripcion: "Hotel Los Arcos localizado en una de las zonas más tranquilas y seguras de la ciudad de San Pedro Sula, Honduras. Cuenta con 17 amplias habitaciones con aire acondicionado, agua caliente, caja de seguridad, internet inalámbrico, piscina, terraza con vista a la ciudad y  seguridad las 24 horas. Más que un hotel, es un sitio inolvidable al que usted siempre querrá volver.Por la comodidad de sus instalaciones, su ubicación estratégica y sus servicios calidad oro Hotel Boutique La Casa de Los Arcos se convierte en el lugar perfecto para que disfrute de su estadía, ya sea por viaje de placer o de negocios en la ciudad industrial del país."})
db.destino_hotel.insert({Destino: "San Pedro Sula",Nombre: "Hotel Boutique Primavera",Contanto: "2516-0500, 2556-8834", Descripcion: "Hotel Boutique Primavera se complace en ofrecer un innovador concepto de servicio hotelero a los visitantes de la ciudad de San Pedro Sula.   Le espera una experiencia única para su estadía: una atmósfera íntima, privada y exquisita, abastecida para cubrir sus necesidades laborales, de descanso, turísticas. . . y mucho más. "})

---San Pedro Sula Restaurante

db.destino_restaurante.insert({Destino: "San Pedro Sula",Nombre: "Arte Marino",Contanto: "2558-4019", Descripcion: "Arte Marino está ubicado en una de las mejores zonas de la ciudad de San Pedro Sula, Honduras. Y como su nombre lo dice todo: el arte de este restaurante son los mariscos, las delicias más exquisitas del mar. Los fundadores de Arte Marino vieron una necesidad en los lugareños y extranjeros de consumir esos alimentos que sólo en la costa se disfrutan. Además de estos manjares, usted podrá degsutar la comida típica hondureña con ese toque característico que identifica a Arte Marino. Bebidas nacionales y cocteles también forman parte del variado menú que le ofrecen los expertos de los mariscos en la costa norte.",Horario:"7:00 AM - 10:00 PM"})
db.destino_restaurante.insert({Destino: "San Pedro Sula",Nombre: "Baleadas Express",Contanto: "2553 6208", Descripcion: "No hay nada más representativo de las comidas típicas en Honduras, que las baleadas de desayuno (o de almuerzo o cena, de hecho). La baleada dejó de ser sencilla en este establecimiento. Una tortilla de harina, frijoles, mantequilla y queso y una variedad de ingredientes para añadirle su toque personal y todo a un precio sumamente accesible.Localizada en varios puntos de la ciudad, Baleadas Express atiende todos los días.",Horario:"7:00 AM - 10:00 PM"})
db.destino_restaurante.insert({Destino: "San Pedro Sula",Nombre: "La Estancia",Contanto: "2552 3002", Descripcion: "Restaurante La Estancia nace el 8 de Noviembre de 1989, convirtiéndose en el segundo restaurante más antiguo de San Pedro Sula, por lo que posee una gran historia llena de sucesos y reconocimientos mundiales. Su especialidad son las carnes a la parrilla estilo uruguayo y comidas internacional, tienen los cortes más codiciados, así mismo cuenta con un fino bar siendo uno de los más surtidos en Centro América con una gran variedad de vinos para los gustos más refinados.",Horario:"7:00 AM - 10:00 PM"})
db.destino_restaurante.insert({Destino: "San Pedro Sula",Nombre: "Pollo Campero",Contanto: "2557-1777 San Pedro Sula, 2232-1777 Tegucigalpa ", Descripcion: "Una cadena de restaurantes de comida rápida especializada en pollo frito. En Pollo Campero encontrará una variedad de menús familiares, personales y hasta para los más pequeños de la casa. Las áreas climatizadas y un excelente servicio le harán querer volver a visitar este restaurante.",Horario:"7:00 AM - 10:00 PM"})
db.destino_restaurante.insert({Destino: "San Pedro Sula",Nombre: "Wings and Buckets",Contanto: "2566-2066, 9613-7261", Descripcion: "Nuestro objetivo es satisfacer el paladar, la vista y olfato de nuestros clientes desarrollando un concepto de franquicia diferente, sólido, altamente competitivo e innovador.Es un restaurante y bar que ha llevado el concepto de las alitas de pollo a un nuevo nivel bañándolas en sus 12 diferentes salsas que van desde salsa mango-chipotle hasta salsa dragón.",Horario:"7:00 AM - 10:00 PM"})



--- Omoa

db.destino_hotel.insert({Destino: "Omoa",Nombre: "Cabañas Pueblo Nuevo",Contanto: "9902 3574", Descripcion: "Cabañas Pueblo Nuevo ofrece apartamentos confortables y acogedores en un ambiente natural. Aquí usted podrá experimentar la combinación de campo y playa. Están ubicados en la aldea Pueblo Nuevo, protegida por la cordillera del Merendón, justo a la orilla del Mar Caribe, donde se respira aire fresco y puro, escucha el canto de los pájaros y las olas del mar."})
db.destino_hotel.insert({Destino: "Omoa",Nombre: "Hotel Cabañas River Park",Contanto: "3144 7759", Descripcion: "Hotel Cabañas River Park está ubicado en Tulián, Omoa, Puerto Cortés, Honduras. Es un hotel que le ofrece diferentes tipos de acomodaciones, todas con los servicios de aire acondicionado, agua caliente e internet y un entorno totalmente natural que le hará experimentar unas vacaciones de ensueño."})
db.destino_hotel.insert({Destino: "Omoa",Nombre: "Villas Suites Viña del Mar",Contanto: "3238 3896", Descripcion: "Villas Suites Viña del Mar cuentan con sala, desayunador, cocineta, área social y estacionamiento para 2 vehículos. Tienen 3 habitaciones dobles, dos con aire acondicionado, y 2 baños, para un total de 6 camas matrimoniales y una capacidad máxima para 12 personas entre adultos y niños. La suite de una habitación doble con aire acondicionado y un baño, tiene dos camas tamaño queen y una capacidad máxima para 4 personas entre adultos y niños."})
db.destino_hotel.insert({Destino: "Omoa",Nombre: "Chachahuala Beach",Contanto: "2551 2848, 2551 2849, 2551 2850", Descripcion: "Chachahuala Beach es un lugar ecológico ideal para esos paseos donde el enfoque en el relajamiento es primordial. Aquí podrá disfrutar de una hermosa laguna. Chachahuala Beach se localiza muy cerca de la Reserva de Cuyamel, también del Parque Ecológico Infantil San Ignacio y del castillo San Fernando de Omoa."})
db.destino_hotel.insert({Destino: "Omoa",Nombre: "Paraíso Rainforest & Beach Hotel",Contanto: "2630 5535, 3391 3369", Descripcion: "Paraíso Rainforest & Beach Hotel está ubicado en Omoa, Cortés, Honduras. Cuenta con aproximadamente 10 habitaciones distribuidas en sencillas, dobles y suites dobles, cada una con los servicios de: aire acondicionado, agua caliente, TV LCD e internet inalámbrico gratuito. Todas éstas han sido finamente decoradas, y complementadas con baños de lujo equipados con un juego de artículos de tocador de cortesía, lo que le garantiza a sus huéspedes una estancia cómoda combinada con excelentes servicios y atenciones."})


















































