// Seleccionar los botones
let botones = document.querySelectorAll('button')
console.log('1 ', botones)

// Seleccionar los encabezados 1
let encabezados1 = document.querySelectorAll('h1')
console.log('2 ', encabezados1)

// Seleccionar solo el primer encabezado 1
let primerencabezado1 = document.querySelector('h1')
console.log('3', primerencabezado1)

// Seleccionar el segundo encabezado 1
console.log('4', encabezados1[1])

// Seleccionar los elementos de la clase relevant
let relevants = document.querySelectorAll('.relevant')
console.log('5', relevants)

// Seleccionar el highlighted (etiqueta mark)
let highlighted = document.querySelector('mark')
console.log('6', highlighted)

// Seleccionar los li que son relevant
let liRelevant = document.querySelectorAll('li.relevant')
console.log('7', liRelevant)

// Seleccionar los elementos que son relevant y subline al mismo tiempo
let relevantSubline = document.querySelectorAll('.relevant.subline')
console.log('8', relevantSubline)

// Seleccionar los elementos que son relevant o subline al mismo tiempo
let relevantAndSubline = document.querySelectorAll('.relevant, .subline')
console.log('8b', relevantAndSubline)

// Seleccionar los enlaces que están en el menú de navegación
let enlacesMenu = document.querySelectorAll('nav a')
console.log('9', enlacesMenu)

// Seleccionar el botón que está desahibilitado
let button = document.querySelector('button[disabled]')
console.log('10', button)

// Seleccionar el botón que tiene alguna acción de click
let buttonClick = document.querySelector('button[onclick]')
console.log('11', buttonClick)

// Seleccionar el encabezado con indentificado article2
let encabezadoArticle2 = document.querySelectorAll('h1#article2')
console.log('12', encabezadoArticle2)

// Seleccionar los elementos subline que están dentro de un párrafo relevante
let subLinePrelevant = document.querySelectorAll('p.relevant .subline')
console.log('13', subLinePrelevant)

// Seleccionar los th del encabezado de la tabla
let thTable = document.querySelectorAll('thead th')
console.log('14', thTable)

//Selecionar los th que son relevantes
let thRelevant = document.querySelectorAll('th.relevant')
console.log('15', thRelevant)

// Seleccionar los th que unen dos celdas de la fila
let thUnion = document.querySelectorAll('th[colspan="2"]')
console.log('16', thUnion)

// Seleccionar el enlace que te dirige a las galletas
let galletas = document.querySelector('a[href="https://ieslasgalletas.org/"]')
console.log('17', galletas)

// Selecconar los enlaces externos a la web
let extern = document.querySelectorAll('a[href^="https://"]')
console.log('18', extern)

// Seleccionar los enlaces que no son externos
let notExtern = document.querySelectorAll('a:not([href^="https://"])')
console.log('19', notExtern)

// Seleccionar los th relevantes del cuerpo de la tabla
let thRelevantBody = document.querySelectorAll('tbody td.relevant')
console.log('19', thRelevantBody)

// Seleccionar los encabezados1 que son hijos del primer nivel de un header
let h1ChildHeader = document.querySelectorAll('header > h1')
console.log('20', h1ChildHeader)

// Seleccionar las secciones que están debajo de un header(no dentro sino al mismo nivel) 
let sections = document.querySelectorAll('header + section')
console.log('21', sections)

// Seleccionar la primera celda de cada fila del cuerpo de la tabla
let firstCelda = document.querySelectorAll('td:first-child')
console.log('22', firstCelda)

// Seleccionar la primera celda de cada fila de la tabla (tanto th como td)
// let fisrtCeldaThTd = document.querySelectorAll('td:first-child, tr:first-child')
let fisrtCeldaThTd = document.querySelectorAll('table tr:first-child')
console.log('22b', fisrtCeldaThTd)

// Seleccionar los td pares
let tdPar = document.querySelectorAll('td:nth-child(even)')
console.log('23', tdPar)

// Seleccionar párrafos que tengan dentro algún span
let parragraphSpan = document.querySelectorAll('p:has(span)')
console.log('24', parragraphSpan)

// Seleccionar el último elemento de cada lista
let lastElementList = document.querySelectorAll('li:last-child')
console.log('25', lastElementList)

// Seleccionar la tercera columna del cuerpo de la tabla
let thirdCol = document.querySelectorAll('tbody td:nth-child(3)')
console.log('26', thirdCol)
