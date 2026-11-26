export const testimonios = [
	{
		id: 'bienestar-integral',
		nombre: 'Bienestar y desarrollo integral',
		descripcion:
			'Promoción de los derechos y del desarrollo integral de niñas, niños, adolescentes y sus familias.',
		objetivo:
			'Contribuir al bienestar de la niñez y adolescencia mediante acciones participativas que promuevan sus derechos.',
		img_portada: '/portadas/ninas.jpg',
		terminado: false,
		informacionEjemplo: true,
		objetivosespecificos: [
			{ descripcion: 'Promover el conocimiento y ejercicio de los derechos de la niñez y adolescencia.' },
			{ descripcion: 'Impulsar espacios seguros, inclusivos y participativos para su desarrollo.' },
		],
	},
	{
		id: 'participacion-comunitaria',
		nombre: 'Participación y liderazgo comunitario',
		descripcion:
			'Fortalecimiento de la participación de niñas, niños, adolescentes y comunidades en iniciativas para su bienestar.',
		objetivo:
			'Fomentar la participación y el protagonismo de la niñez y adolescencia en sus comunidades.',
		img_portada: '/portadas/ninas.jpg',
		terminado: false,
		informacionEjemplo: true,
		objetivosespecificos: [
			'Facilitar espacios de participación y expresión para niñas, niños y adolescentes.',
			'Promover la colaboración entre familias, comunidades e instituciones.',
		].map((descripcion) => ({ descripcion })),
	},
	{
		id: 'desarrollo-familiar',
		nombre: 'Desarrollo social y económico familiar',
		descripcion:
			'Acciones orientadas al desarrollo social y económico de las familias, con énfasis en la sostenibilidad y la inclusión.',
		objetivo:
			'Contribuir al desarrollo de las familias mediante iniciativas sociales y económicas sostenibles.',
		img_portada: '/portadas/ninas.jpg',
		terminado: false,
		informacionEjemplo: true,
		objetivosespecificos: [
			'Fortalecer las capacidades y oportunidades de las familias.',
			'Promover iniciativas que aporten a medios de vida sostenibles.',
		].map((descripcion) => ({ descripcion })),
	},
];
