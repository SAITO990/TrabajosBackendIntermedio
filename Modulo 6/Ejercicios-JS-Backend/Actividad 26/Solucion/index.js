let pages = {
    'formacion' : `
    <style>
    h2{
        font-size: 30px;
        display: flex;
        color: black;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
    }
    .wrap{
        display: flex;
        justify-content: space-between;
        text-align: center;
        margin: 20px;
        padding: 40px;
        box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    }
</style>
<h2>Mis estudios</h2>
 <div class="wrap">
    <div class="sena">
        <h3>Servicio Nacional de aprendizaje (SENA)</h3>
        <p>Tecnico en programacion de software</p>
        <p>feb. 2021 - abr. 2022</p>
    </div>
    <div class="bit">
        <h3>BIT - Bogotá Institute of Technology</h3>
        <p>Desarrollo Web Fullstack</p>
        <p>jun. 2022 - oct. 2022</p>
    </div>
    <div class="uni">
        <h3>Universidad Distrital Francisco José de Caldas</h3>
        <p>Desarrollo backend</p>
        <p>mar. 2023 - nov. 2023</p>
    </div>
</div>
    `,

'experiencia': `
    <style>
    :root {
--primary-color: #fff;
--background-color: #fff;
--font: sans-serif;
}

/* Timeline Container */
.timeline {
display: flex;
justify-content: center;
background: var(--primary-color);
margin: 20px auto;
padding: 20px;
}

/* Card container */
.card {
position: relative;
max-width: 400px;
}

/* setting padding based on even or odd */
.card:nth-child(odd) {
padding: 30px 0 30px 30px;
}
.card:nth-child(even) {
padding: 30px 30px 30px 0;
}
/* Global ::before */
.card::before {
content: "";
position: absolute;
width: 50%;
border: solid orange;
}

/* Setting the border of top, bottom, left */
.card:nth-child(odd)::before {
left: 0px;
top: -4.5px;
bottom: -4.5px;
border-width: 5px 0 5px 5px;
border-radius: 50px 0 0 50px;
}

/* Setting the border of top, bottom, right */
.card:nth-child(even)::before {
right: 0;
top: 0;
bottom: 0;
border-width: 5px 5px 5px 0;
border-radius: 0 50px 50px 0;
}

/* Removing the border if it is the first card */
.card:first-child::before {
border-top: 0;
border-top-left-radius: 0;
}

/* Removing the border if it is the last card  and it's odd */
.card:last-child:nth-child(odd)::before {
border-bottom: 0;
border-bottom-left-radius: 0;
}

/* Removing the border if it is the last card  and it's even */
.card:last-child:nth-child(even)::before {
border-bottom: 0;
border-bottom-right-radius: 0;
}

/* Information about the timeline */
.info {
display: flex;
flex-direction: column;
text-align: justify;
color: black;
line-height: 20px;
border-radius: 10px;
padding: 10px;
}

/* Title of the card */
.title {
color: black;
position: relative;
}

/* Timeline dot  */
.title::before {
content: "";
position: absolute;
width: 10px;
height: 10px;
background: white;
border-radius: 999px;
border: 3px solid orange;
}

/* text right if the card is even  */
.card:nth-child(even) > .info > .title {
text-align: right;
}

/* setting dot to the left if the card is odd */
.card:nth-child(odd) > .info > .title::before {
left: -45px;
}

/* setting dot to the right if the card is odd */
.card:nth-child(even) > .info > .title::before {
right: -45px;
}

</style>
<div class="timeline">
    <div class="outer">
      <div class="card">
        <div class="info">
          <h3 class="title">Content Entry</h3>
          <br>
          <p>VMLY&R · Jornada completa may. 2021 - abr. 2022</p>
          <br>
          <p>En mi rol anterior, tuve la responsabilidad de gestionar y mantener la información actualizada en diversas páginas web de la empresa. Además, brindé apoyo al equipo de aseguramiento de calidad (QA) al detectar y reportar defectos en los sitios, contribuyendo así a mejorar su calidad y funcionamiento. Adicionalmente, desempeñé un papel importante en la administración de campañas publicitarias a través de la plataforma Wordpress.</p>
          <br>
          <p><strong>Aptitudes:</strong>WordPress · Microsoft Excel · Google Ads · Scrum · Hojas de estilos en cascada (CSS) · HTML</p>
        </div>
      </div>
      <div class="card">
        <div class="info">
          <h3 class="title">QA Analyst</h3>
          <br>
          <p>Freelance jun. 2022 - Actualidad · 12 meses</p>
          <br>
          <p>Mi labor principal consistía en llevar a cabo pruebas manuales, abarcando pruebas funcionales, no funcionales y pruebas de rendimiento. Además, tenía la responsabilidad de crear casos de prueba y gestionarlos eficientemente a través de la plataforma Jira. Todo esto se realizaba dentro del marco de aplicación SCRUM.
            Para llevar a cabo estas tareas, hacía uso de una serie de herramientas. Entre ellas se incluyen JMeter, Lighthouse. Además, hacia uso de Postman. En cuanto a los lenguajes de programación, tenía un dominio sólido de JavaScript y Java, lo que me permitía realizar pruebas de manera más eficiente y realizar ajustes o correcciones cuando fuera necesario.</p>
          <br>
          <p><strong>Aptitudes:</strong>JavaScript · Java · JIRA · Scrum · JMeter · API de Postman</p>
        </div>
      </div>
    `,
    'herramientas': `
    <style>
    h2{
        font-size: 30px;
        display: flex;
        color: black;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
    }
    .tech{
        display: flex;
        justify-content: space-evenly;
        text-align: center;
        margin-top: 100px;
        margin-bottom: 50px;

    }
    .tech div{
        width: 220px;
        box-shadow: -12px -15px 25px -4px rgba(182, 109, 50, 0.35);
        border-radius: 10px;
    }
    .tech p{
        font-size: 20px;
        color: orange;
    }

</style>
<h2>Herramientas</h2>
<div class="tech">
    <div class="html">
        <svg xmlns="http://www.w3.org/2000/svg" height="150px" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg>
        <p>HTML</p>
    </div>
    <div class="css">
        <svg xmlns="http://www.w3.org/2000/svg" height="150px" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/></svg>
        <p>CSS</p>
    </div>
    <div class="js">
        <svg xmlns="http://www.w3.org/2000/svg" height="150px" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/></svg>
        <P>JS</P>
    </div>
    <div class="nodejs">
        <svg xmlns="http://www.w3.org/2000/svg" height="150px" viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M316.3 452c-2.1 0-4.2-.6-6.1-1.6L291 439c-2.9-1.6-1.5-2.2-.5-2.5 3.8-1.3 4.6-1.6 8.7-4 .4-.2 1-.1 1.4.1l14.8 8.8c.5.3 1.3.3 1.8 0L375 408c.5-.3.9-.9.9-1.6v-66.7c0-.7-.3-1.3-.9-1.6l-57.8-33.3c-.5-.3-1.2-.3-1.8 0l-57.8 33.3c-.6.3-.9 1-.9 1.6v66.7c0 .6.4 1.2.9 1.5l15.8 9.1c8.6 4.3 13.9-.8 13.9-5.8v-65.9c0-.9.7-1.7 1.7-1.7h7.3c.9 0 1.7.7 1.7 1.7v65.9c0 11.5-6.2 18-17.1 18-3.3 0-6 0-13.3-3.6l-15.2-8.7c-3.7-2.2-6.1-6.2-6.1-10.5v-66.7c0-4.3 2.3-8.4 6.1-10.5l57.8-33.4c3.7-2.1 8.5-2.1 12.1 0l57.8 33.4c3.7 2.2 6.1 6.2 6.1 10.5v66.7c0 4.3-2.3 8.4-6.1 10.5l-57.8 33.4c-1.7 1.1-3.8 1.7-6 1.7zm46.7-65.8c0-12.5-8.4-15.8-26.2-18.2-18-2.4-19.8-3.6-19.8-7.8 0-3.5 1.5-8.1 14.8-8.1 11.9 0 16.3 2.6 18.1 10.6.2.8.8 1.3 1.6 1.3h7.5c.5 0 .9-.2 1.2-.5.3-.4.5-.8.4-1.3-1.2-13.8-10.3-20.2-28.8-20.2-16.5 0-26.3 7-26.3 18.6 0 12.7 9.8 16.1 25.6 17.7 18.9 1.9 20.4 4.6 20.4 8.3 0 6.5-5.2 9.2-17.4 9.2-15.3 0-18.7-3.8-19.8-11.4-.1-.8-.8-1.4-1.7-1.4h-7.5c-.9 0-1.7.7-1.7 1.7 0 9.7 5.3 21.3 30.6 21.3 18.5 0 29-7.2 29-19.8zm54.5-50.1c0 6.1-5 11.1-11.1 11.1s-11.1-5-11.1-11.1c0-6.3 5.2-11.1 11.1-11.1 6-.1 11.1 4.8 11.1 11.1zm-1.8 0c0-5.2-4.2-9.3-9.4-9.3-5.1 0-9.3 4.1-9.3 9.3 0 5.2 4.2 9.4 9.3 9.4 5.2-.1 9.4-4.3 9.4-9.4zm-4.5 6.2h-2.6c-.1-.6-.5-3.8-.5-3.9-.2-.7-.4-1.1-1.3-1.1h-2.2v5h-2.4v-12.5h4.3c1.5 0 4.4 0 4.4 3.3 0 2.3-1.5 2.8-2.4 3.1 1.7.1 1.8 1.2 2.1 2.8.1 1 .3 2.7.6 3.3zm-2.8-8.8c0-1.7-1.2-1.7-1.8-1.7h-2v3.5h1.9c1.6 0 1.9-1.1 1.9-1.8zM137.3 191c0-2.7-1.4-5.1-3.7-6.4l-61.3-35.3c-1-.6-2.2-.9-3.4-1h-.6c-1.2 0-2.3.4-3.4 1L3.7 184.6C1.4 185.9 0 188.4 0 191l.1 95c0 1.3.7 2.5 1.8 3.2 1.1.7 2.5.7 3.7 0L42 268.3c2.3-1.4 3.7-3.8 3.7-6.4v-44.4c0-2.6 1.4-5.1 3.7-6.4l15.5-8.9c1.2-.7 2.4-1 3.7-1 1.3 0 2.6.3 3.7 1l15.5 8.9c2.3 1.3 3.7 3.8 3.7 6.4v44.4c0 2.6 1.4 5.1 3.7 6.4l36.4 20.9c1.1.7 2.6.7 3.7 0 1.1-.6 1.8-1.9 1.8-3.2l.2-95zM472.5 87.3v176.4c0 2.6-1.4 5.1-3.7 6.4l-61.3 35.4c-2.3 1.3-5.1 1.3-7.4 0l-61.3-35.4c-2.3-1.3-3.7-3.8-3.7-6.4v-70.8c0-2.6 1.4-5.1 3.7-6.4l61.3-35.4c2.3-1.3 5.1-1.3 7.4 0l15.3 8.8c1.7 1 3.9-.3 3.9-2.2v-94c0-2.8 3-4.6 5.5-3.2l36.5 20.4c2.3 1.2 3.8 3.7 3.8 6.4zm-46 128.9c0-.7-.4-1.3-.9-1.6l-21-12.2c-.6-.3-1.3-.3-1.9 0l-21 12.2c-.6.3-.9.9-.9 1.6v24.3c0 .7.4 1.3.9 1.6l21 12.1c.6.3 1.3.3 1.8 0l21-12.1c.6-.3.9-.9.9-1.6v-24.3zm209.8-.7c2.3-1.3 3.7-3.8 3.7-6.4V192c0-2.6-1.4-5.1-3.7-6.4l-60.9-35.4c-2.3-1.3-5.1-1.3-7.4 0l-61.3 35.4c-2.3 1.3-3.7 3.8-3.7 6.4v70.8c0 2.7 1.4 5.1 3.7 6.4l60.9 34.7c2.2 1.3 5 1.3 7.3 0l36.8-20.5c2.5-1.4 2.5-5 0-6.4L550 241.6c-1.2-.7-1.9-1.9-1.9-3.2v-22.2c0-1.3.7-2.5 1.9-3.2l19.2-11.1c1.1-.7 2.6-.7 3.7 0l19.2 11.1c1.1.7 1.9 1.9 1.9 3.2v17.4c0 2.8 3.1 4.6 5.6 3.2l36.7-21.3zM559 219c-.4.3-.7.7-.7 1.2v13.6c0 .5.3 1 .7 1.2l11.8 6.8c.4.3 1 .3 1.4 0L584 235c.4-.3.7-.7.7-1.2v-13.6c0-.5-.3-1-.7-1.2l-11.8-6.8c-.4-.3-1-.3-1.4 0L559 219zm-254.2 43.5v-70.4c0-2.6-1.6-5.1-3.9-6.4l-61.1-35.2c-2.1-1.2-5-1.4-7.4 0l-61.1 35.2c-2.3 1.3-3.9 3.7-3.9 6.4v70.4c0 2.8 1.9 5.2 4 6.4l61.2 35.2c2.4 1.4 5.2 1.3 7.4 0l61-35.2c1.8-1 3.1-2.7 3.6-4.7.1-.5.2-1.1.2-1.7zm-74.3-124.9l-.8.5h1.1l-.3-.5zm76.2 130.2l-.4-.7v.9l.4-.2z"/></svg>
        <p>NODE JS</p>
    </div>
    <div class="github">
        <svg xmlns="http://www.w3.org/2000/svg" height="150px" viewBox="0 0 496 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
        <p>GITHUB</p>
    </div>
    <div class="boot">
        <svg xmlns="http://www.w3.org/2000/svg" height="150px" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M333.5,201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4,238.2,333.5,225,333.5,201.4z M517,188.6 c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1,0-55.8,28.1-54.7,58.5c1,29.3-0.3,67.2-9.8,98.1 c-9.6,31-25.7,50.6-52.2,53.1v28.5c26.4,2.5,42.6,22.1,52.2,53.1c9.5,30.9,10.9,68.8,9.8,98.1c-1.1,30.5,22.7,58.5,54.7,58.5h328.7 c32.1,0,55.8-28.1,54.7-58.5c-1-29.3,0.3-67.2,9.8-98.1c9.6-31,25.7-50.6,52.1-53.1v-28.5C542.7,239.2,526.5,219.6,517,188.6z M300.2,375.1h-97.9V136.8h97.4c43.3,0,71.7,23.4,71.7,59.4c0,25.3-19.1,47.9-43.5,51.8v1.3c33.2,3.6,55.5,26.6,55.5,58.3 C383.4,349.7,352.1,375.1,300.2,375.1z M290.2,266.4h-50.1v78.4h52.3c34.2,0,52.3-13.7,52.3-39.5 C344.7,279.6,326.1,266.4,290.2,266.4z"/></svg>
        <p>BOOTSTRAP</p>
    </div>
</div>
    `,
    'conocimiento': `
    <style>
    .content{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 80px;
        text-align: center;
        gap: 50px;
    }
    
    #foto{
        width: 400px;
        border-radius: 25%;
        margin-left: 70px;
        justify-content: center ;
    }
    h2{
        font-size: 30px;
        display: flex;
        color: black;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
    }
</style>

<h2>Conocimientos y presentacion</h2>
<div class="content">
    <div class="imagehero">
        <img src="./img/DSC_0449.jpg" alt="" id="foto">
    </div>
    <div class="profile">
        <p>Soy Andres, cuento con un diplomado en desarollo Web Fullstack y con un tecnico en programacion de software en el Servicio Nacional de Aprendizaje (Sena).
            Me apasiona el desarrollo web y las pruebas de software, he adquirido una amplia experiencia como tester y una sólida formación en desarrollo web fullstack y backend. Durante mi trayectoria, he tenido la oportunidad de combinar mis estudios con trabajos temporales como analista de pruebas de software, lo que me ha brindado una visión integral de la industria.
            La combinación de mi experiencia como tester y mis habilidades en desarrollo web me ha permitido tener una visión global del ciclo de desarrollo de software y una comprensión profunda de las necesidades de calidad y rendimiento de las aplicaciones web. Mi objetivo es seguir creciendo profesionalmente en este campo, buscando oportunidades desafiantes que me permitan aplicar mis habilidades y conocimientos de manera efectiva.</p>
    </div>
</div>
    `,
    'contacto':`
    <style>.contactame {
        background: #EEE;
        width: 600px;
        margin: 20px auto;
        padding: 10px 0;
        box-shadow: 0 3px 5px rgba(0,0,0,0.3);
      }
      h2 {
        text-align: center;
      }
      p {
        font-size: 13px;
      }
      input {
        display: none;
        visibility: hidden;
      }
      label {
        display: block;
        padding: 0.5em;
        text-align: center;
        border-bottom: 1px solid #CCC;
        color: #666;
      }
      label:hover {
        color: #000;
      }
      label::before {
        font-family: Consolas, monaco, monospace;
        font-weight: bold;
        font-size: 15px;
        content: "+";
        vertical-align: text-top;
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-right: 3px;
        background: radial-gradient(ellipse at center, #CCC 50%, transparent 50%);
      }
      #expand {
        height: 0px;
        overflow: hidden;
        transition: height 0.5s;
        background: url(https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80);
        color: #FFF;
      }
      section {
        padding: 0 20px;
      }
      #toggle:checked ~ #expand {
        height: 250px;
      }
      #toggle:checked ~ label::before {
        content: "-";
      }</style>
    <div class="contactame">
        <h2>Informacion de Contacto</h2>
        <input id="toggle" type="checkbox" checked>
        <label for="toggle">Esconder la imagen</label>
        <div id="expand">
        </div>
        <section>
          <h3>Info importante</h3>
          <p>Si estás interesado en conocer más acerca de mi experiencia profesional, colaborar en proyectos emocionantes o simplemente quieres conectarte y charlar sobre el mundo de la tecnología, estaré encantado de escucharte. La comunicación es la clave para el éxito, por lo que estoy abierto a cualquier tipo de contacto. Ya sea que desees compartir ideas innovadoras, buscar asesoramiento técnico o simplemente entablar una conversación amistosa, estoy aquí para ti.
            Puedes contactarme a través de los siguientes medios: ya sea por correo electrónico, donde responderé diligentemente a tus mensajes y consultas; por teléfono, para una comunicación directa y personalizada; o mediante mis perfiles en redes sociales, donde podrás seguir mis últimas actualizaciones y proyectos. ¡No dudes en elegir la opción que más te convenga!</p>
        <p>Correo: andresrolonreyes@gmail.com</p>
        <p>Celular: 3023083883</p>
        <p>Linkedin <a href="">https://www.linkedin.com/in/andres-felipe-rolon-reyes-3896361aa/</a></p>
        </section>
      </div>
    `
};
  

function getPageContent(page){
    let contentToReturn;
    switch(page){
        case 'formacion':
            contentToReturn = pages.formacion;
            break;
        case 'experiencia':
            contentToReturn = pages.experiencia;
            break;
        case 'herramienta':
            contentToReturn = pages.herramientas;
            break;
        case 'contacto':
            contentToReturn = pages.contacto;
            break;
        case 'conocimiento':
            contentToReturn = pages.conocimiento;
            break;
        default:
            contentToReturn = pages.home;
            break;				
    }
    document.getElementById('contenido').innerHTML = contentToReturn; 
}