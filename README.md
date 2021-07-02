# AW-WININFO

Este componente crea puntos de información con una ventana flotante destinada a ampliar la información dentro de la web con Polymer 3.

## Parámetros

- **icon:** Icono de iron-icons que podemos poner como punto de información. Por defecto: _info-outline_.
- **size:** Tamaño del icono en píxeles. Por defeco: 20.
- **script:** URL del script del que queremos extraer el contenido cargado por AJAX.

____________________

## Funcionamiento

El funcionamiento del componente es muy sencillo, tan solo hay que añadirlo de la siguiente forma:

```html
<script type="module" async src="/node_modules/aw_wininfo/aw-wininfo.js"></script>
```

```html
<aw-wininfo unresolved icon="info">
	<p class="h1">Título de nivel uno</p>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iusto accusamus quod mollitia veritatis unde, eos corrupti consequuntur beatae blanditiis.</p>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iusto accusamus quod mollitia veritatis unde, eos corrupti consequuntur beatae blanditiis.</p>
	<p class="h2">Título de nivel 2</p>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iusto accusamus quod mollitia veritatis unde, eos corrupti consequuntur beatae blanditiis.</p>
	<h2>Título de nivel 2</h2>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iusto accusamus quod mollitia veritatis unde, eos corrupti consequuntur beatae blanditiis.</p>
	<ol>
		<li>Elemento de lista 1</li>
		<li>Elemento de lista 2</li>
		<li>Elemento de lista 3</li>
		<li>Elemento de lista 4</li>
		<li>Elemento de lista 5</li>
	</ol>
</aw-wininfo>
```

Como observamos en el ejemplo superior este código creará un icono de información y al hacer click sobre él se abrirá una ventan que mostrará el contenido que hay en su unterior.

Opcionalmente para cuando surja el caso podemos cargar el contenido a mostrar en la ventana haciendo uso del parámetro **_script_** en el que tendrémos que poner la URL del archivo del que queremos cargar el contenido a través de AJAX.

Cargar el contenido directamente dentro del componente en lugar de hacerlo a través del parámetro script tiene la ventaja de que ese contenido se indexará en Google. Además podemos hacer uso de etiquetas ```<h>``` que enriquecen el posicionamiento.

```html
<aw-wininfo unresolved script="/my-folder/my-file.php"></aw-wininfo>
```

_/my-folder/my-file.php_
```php
echo '
<p class="h1">Título de nivel uno</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iusto accusamus quod mollitia veritatis unde, eos corrupti consequuntur beatae blanditiis.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iusto accusamus quod mollitia veritatis unde, eos corrupti consequuntur beatae blanditiis.</p>
<p class="h2">Título de nivel 2</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iusto accusamus quod mollitia veritatis unde, eos corrupti consequuntur beatae blanditiis.</p>
<h2>Título de nivel 2</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iusto accusamus quod mollitia veritatis unde, eos corrupti consequuntur beatae blanditiis.</p>
<ol>
	<li>Elemento de lista 1</li>
	<li>Elemento de lista 2</li>
	<li>Elemento de lista 3</li>
	<li>Elemento de lista 4</li>
	<li>Elemento de lista 5</li>
</ol>
';
?>
```

En este caso, el componente llamaría al script que se ha pasado en el parámetro y cargaría el contenido que se está imprimiendo en el mismo para mostrarlo en la ventana.

__________

## Estilo

No solo se puede dar estilo al icono de información, como se aprecia en el contenido que se ha introducido, también se pueden dar estilo a ciertos elementos dentro del contenido que se va a introducir.

```css
/* Variables de estilos del icono de información */

--aw-wininfo-icon-color: #333333;
--aw-wininfo-icon-cursor: pointer;
--aw-wininfo-icon-color-hv: var(--aw-primary-color,#1C7CDD);

/* Variables de estilo de la ventana de información */

--aw-wininfo-background-color: #222222;
--aw-wininfo-color: white;
--aw-wininfo-font-size: 14px;
--aw-wininfo-border-radius: 5px;
--aw-wininfo-box-shadow: 1px 1px 3px 1px #CCCCCC;
--aw-wininfo-scrollbar-width: 6px;
--aw-wininfo-scrollbar-background-color: transparent;
--aw-wininfo-scrollbar-color: #bbbbbb;
--aw-wininfo-scrollbar-color-hv: #999999;

/* Variables de estilo del icono de cerrar la ventana */

--aw-wininfo-icon-close-fill: white;
--aw-wininfo-icon-close-fill-hv: white;

/* Variables de estilo del contenido de la ventana */

--aw-wininfo-h1-margin: 0 0 8px;
--aw-wininfo-h1-padding: 10px 0 2px;
--aw-wininfo-h1-color: #2e80c4;
--aw-wininfo-h1-font-size: 16px;
--aw-wininfo-h1-font-weight: bold;
--aw-wininfo-h1-border-color: var(--aw-wininfo-h1-color,#2e80c4);

--aw-wininfo-h2-margin: 0 0 8px;
--aw-wininfo-h2-padding: 7px 0 2px;
--aw-wininfo-h2-color: #cf773b;
--aw-wininfo-h2-font-size: 14px;
--aw-wininfo-h2-font-weight: bold;
--aw-wininfo-h2-border-color: var(--aw-wininfo-h2-color,transparent);

--aw-wininfo-h3-margin: 0 0 8px;
--aw-wininfo-h3-padding: 7px 0 2px;
--aw-wininfo-h3-color: #3f8b49;
--aw-wininfo-h3-font-size: 14px;
--aw-wininfo-h3-font-weight: bold;
--aw-wininfo-h3-border-color: var(--aw-wininfo-h3-color,transparent);

--aw-wininfo-h4-margin: 0 0 8px;
--aw-wininfo-h4-padding: 7px 0 2px;
--aw-wininfo-h4-color: #ddbe35;
--aw-wininfo-h4-font-size: 14px;
--aw-wininfo-h4-font-weight: bold;
--aw-wininfo-h4-border-color: var(--aw-wininfo-h4-color,transparent);
```

Como se ve en las _Variables de estilo del contenido de la ventana_ podemos controlar el estilo de las etiquetas ```<h1>```, ```<h2>```, ```<h3>```, ```<h4>``` o de párrafos con clase ```p.h1```, ```p.h2```, ```p.h3```, ```p.h4``` con esas variables.



