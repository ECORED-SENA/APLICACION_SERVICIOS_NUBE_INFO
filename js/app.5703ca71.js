(function(e){function a(a){for(var i,t,s=a[0],c=a[1],l=a[2],d=0,u=[];d<s.length;d++)t=s[d],Object.prototype.hasOwnProperty.call(n,t)&&n[t]&&u.push(n[t][0]),n[t]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);p&&p(a);while(u.length)u.shift()();return r.push.apply(r,l||[]),o()}function o(){for(var e,a=0;a<r.length;a++){for(var o=r[a],i=!0,t=1;t<o.length;t++){var s=o[t];0!==n[s]&&(i=!1)}i&&(r.splice(a--,1),e=c(c.s=o[0]))}return e}var i={},t={app:0},n={app:0},r=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-0206bfa0":"dd884159","chunk-04b93936":"edb71edd","chunk-0fa50b4a":"c37b9fac","chunk-13a6037e":"24ee6d23","chunk-2c06842c":"ae7608d7","chunk-2d208d90":"51470572","chunk-2d21d0e2":"2282b4c4","chunk-2d22c123":"5c6d21a1","chunk-2e80bb9a":"7d3836aa","chunk-4cdd78c0":"1ff160a5","chunk-4ebcb52d":"506ea106","chunk-515a8379":"b0c98062","chunk-53ccb27e":"aa300bae","chunk-56462a6e":"64ed65bb","chunk-696f2696":"eb7f4a7d","chunk-699da367":"b972522d","chunk-7781d802":"1f359542","chunk-79b4dbd5":"14cb3676","chunk-839300a6":"4d099f4a","chunk-b579d5fa":"478919f3","chunk-c796899c":"9a6d3f3b","chunk-e17293c0":"135d6b46"}[e]+".js"}function c(a){if(i[a])return i[a].exports;var o=i[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(e){var a=[],o={"chunk-04b93936":1,"chunk-0fa50b4a":1,"chunk-4ebcb52d":1,"chunk-515a8379":1,"chunk-56462a6e":1,"chunk-696f2696":1,"chunk-699da367":1,"chunk-7781d802":1,"chunk-79b4dbd5":1,"chunk-839300a6":1,"chunk-b579d5fa":1,"chunk-e17293c0":1};t[e]?a.push(t[e]):0!==t[e]&&o[e]&&a.push(t[e]=new Promise((function(a,o){for(var i="css/"+({}[e]||e)+"."+{"chunk-0206bfa0":"31d6cfe0","chunk-04b93936":"2cd5135e","chunk-0fa50b4a":"d035a47c","chunk-13a6037e":"31d6cfe0","chunk-2c06842c":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-4cdd78c0":"31d6cfe0","chunk-4ebcb52d":"1dbe8d4a","chunk-515a8379":"77feafb9","chunk-53ccb27e":"31d6cfe0","chunk-56462a6e":"d035a47c","chunk-696f2696":"d035a47c","chunk-699da367":"d035a47c","chunk-7781d802":"bdae3807","chunk-79b4dbd5":"d035a47c","chunk-839300a6":"b67dc245","chunk-b579d5fa":"92cde18b","chunk-c796899c":"31d6cfe0","chunk-e17293c0":"d035a47c"}[e]+".css",n=c.p+i,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var l=r[s],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===i||d===n))return a()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){l=u[s],d=l.getAttribute("data-href");if(d===i||d===n)return a()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=a,p.onerror=function(a){var i=a&&a.target&&a.target.src||n,r=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=i,delete t[e],p.parentNode.removeChild(p),o(r)},p.href=n;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){t[e]=0})));var i=n[e];if(0!==i)if(i)a.push(i[2]);else{var r=new Promise((function(a,o){i=n[e]=[a,o]}));a.push(i[2]=r);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(e);var u=new Error;l=function(a){d.onerror=d.onload=null,clearTimeout(p);var o=n[e];if(0!==o){if(o){var i=a&&("load"===a.type?"missing":a.type),t=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+t+")",u.name="ChunkLoadError",u.type=i,u.request=t,o[1](u)}n[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(a)},c.m=e,c.c=i,c.d=function(e,a,o){c.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,a){if(1&a&&(e=c(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var i in e)c.d(o,i,function(a){return e[a]}.bind(null,i));return o},c.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(a,"a",a),a},c.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},c.p="",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=a,l=l.slice();for(var u=0;u<l.length;u++)a(l[u]);var p=d;r.push([0,"chunk-vendors"]),o()})({0:function(e,a,o){e.exports=o("56d7")},"230f":function(e,a,o){e.exports=o.p+"img/fondo-banner-principal.f6ae4c14.svg"},"56d7":function(e,a,o){"use strict";o.r(a);o("e260"),o("e6cf"),o("cca6"),o("a79d");var i=o("68f3"),t=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"app",attrs:{id:"app"}},[e._m(0),o("div",{staticClass:"contenedor-principal"},[o("section",{staticClass:"seccion-principal"},[o("Inicio")],1)])])},n=[function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("header",{staticClass:"header"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row align-items-center justify-content-between"},[i("div",{staticClass:"col col-sm-auto d-flex align-items-center justify-content-between justify-content-sm-star"},[i("img",{staticClass:"header__logo me-sm-5",attrs:{src:o("9eb5")}})])])])])}],r=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("section",[i("div",{staticClass:"banner-principal mb-5"},[i("div",{staticClass:"container tarjeta p-4 p-sm-5",style:{"background-image":"url("+o("230f")+")"}},[e._m(0)])]),e._m(1),e._m(2),e._m(3),e._m(4),e._m(5),e._m(6),i("div",{staticClass:"container tarjeta tarjeta__template--azul-claro p-4 p-md-5 mb-5"},[e._m(7),i("div",{staticClass:"creditos"},e._l(Object.keys(e.creditosData),(function(a,o){return i("div",{class:o!=Object.keys(e.creditosData).length-1?"mb-4":""},[i("div",{staticClass:"creditos__titulo"},[e._v(e._s(e.configTitulos[a]))]),i("table",[i("tbody",e._l(e.creditosData[a],(function(o,t){return i("tr",{key:a+t},[i("td",{staticClass:"text-bold",attrs:{colspan:"2"},domProps:{innerHTML:e._s(e.renderText(o.nombre))}}),i("td",{attrs:{colspan:"2"},domProps:{innerHTML:e._s(e.renderText(o.cargo))}}),i("td",{attrs:{colspan:"3"},domProps:{innerHTML:e._s(e.renderText(o.centro))}})])})),0)])])})),0)]),i("Footer")],1)},s=[function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"row justify-content-around align-items-center"},[o("div",{staticClass:"col-lg-7 col-xxl-6 banner-principal__info"},[o("div",{staticClass:"banner-principal__programa"},[o("div",{staticClass:"h1 mb-0"},[e._v("Técnico en programación de aplicaciones y servicios para la nube")])]),o("div",{staticClass:"h2"},[e._v("Información del programa")]),o("div",{staticClass:"banner-principal__datos"},[o("ul",[o("li",{staticClass:"mb-3 banner-principal__datos__item"},[o("p",{staticClass:"h6 mb-0 me-3 banner-principal__datos__item__titulo"},[e._v("Nombre del programa: ")]),o("p",{staticClass:"banner-principal__datos__item__texto"},[e._v("Programación de aplicaciones y servicios para la nube")])]),o("li",{staticClass:"mb-3 banner-principal__datos__item"},[o("p",{staticClass:"h6 mb-0 me-3 banner-principal__datos__item__titulo"},[e._v("Código: ")]),o("p",{staticClass:"banner-principal__datos__item__texto"},[e._v("228122")])]),o("li",{staticClass:"mb-3 banner-principal__datos__item"},[o("p",{staticClass:"h6 mb-0 me-3 banner-principal__datos__item__titulo"},[e._v("Total Horas: ")]),o("p",{staticClass:"banner-principal__datos__item__texto"},[e._v("2256")])]),o("li",{staticClass:"mb-3 banner-principal__datos__item"},[o("p",{staticClass:"h6 mb-0 me-3 banner-principal__datos__item__titulo"},[e._v("Duración en meses: ")]),o("p",{staticClass:"banner-principal__datos__item__texto"},[e._v("15")])]),o("li",{staticClass:"mb-3 banner-principal__datos__item"},[o("p",{staticClass:"h6 mb-0 me-3 banner-principal__datos__item__titulo"},[e._v("Modalidad: ")]),o("p",{staticClass:"banner-principal__datos__item__texto"},[e._v("virtual")])])])])]),o("div",{staticClass:"d-none d-lg-block col-lg-5"},[o("div",{staticClass:"video"},[o("iframe",{attrs:{"data-v-1f9e4816":"",width:"560",height:"315",src:"https://www.youtube.com/embed/2l7iG_08zEE",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen"}})])])])},function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"container tarjeta tarjeta__template--azul-claro p-4 p-md-5 mb-5"},[o("div",{staticClass:"titulo__template--a mb-4"},[o("span",{staticClass:"h4"},[e._v("1. Presentación")])]),o("p",[e._v("Bienvenido al programa Técnico en programación de aplicaciones y servicios para la nube. Este programa busca formar técnicos con las competencias y las habilidades requeridas por la industria del desarrollo de software, la cual es una de las áreas de mayor proyección en Colombia y en el mundo.")]),o("p",{staticClass:"mt-3"},[e._v("La importancia de las tecnologías de la información se ha incrementado debido a la intensificación de los procesos de producción en los mercados, pues ella es la impulsora de la globalización de los mercados de bienes y servicios.")]),o("p",{staticClass:"mt-3"},[e._v("Debido a la proliferación de estas tecnologías las empresas ven el comercio de una manera muy diferente, lo que las lleva a incorporar innovaciones tecnológicas y renovar con nuevos métodos que facilitan la producción y su relación con los clientes.")]),o("p",{staticClass:"mt-3"},[e._v("Este programa de formación está diseñado para transferir las competencias necesarias en el proceso de innovación tecnológica, permitiéndoles a las empresas aprovechar el personal calificado en la adopción de ciencias telemáticas, también conocido como teleinformáticas, en la solución de problemas o mejora de los procesos empresariales, ya que esta ciencia engloba los conocimientos de la informática y de las tecnologías de la comunicación para el análisis, diseño, desarrollo e implantación de servicios o aplicaciones software que permitan transmitir y procesar datos a través de internet, presentando especial énfasis en la implantación servidores y servicios de computación en la nube.")]),o("p",{staticClass:"mt-3"},[e._v("El aprendiz de este programa recibirá una formación integral que le permitirá integrarse a la industria del desarrollo de software con una alta calidad humana, laboral y profesional en entornos multisectoriales debido a la alta aplicabilidad de la industria del software en sectores industriales, comerciales, de servicios o primarios.")]),o("p",{staticClass:"mt-3"},[e._v("Durante el proceso de formación, el aprendiz podrá desarrollar habilidades y conocimientos en razonamiento cuantitativo, establecimiento de requisitos del software, construcción de algoritmos, implementación de bases de datos, construcción de aplicaciones web orientadas a servicios, aplicación de prácticas y uso de herramientas para DevOps, despliegue de aplicaciones y servicios en la nube.")]),o("p",{staticClass:"mt-3"},[e._v("Éxitos y de nuevo bienvenido a la industria del presente y del futuro.")])])},function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"container tarjeta tarjeta__template--azul-claro p-4 p-md-5 mb-5"},[o("div",{staticClass:"titulo__template--a mb-4"},[o("span",{staticClass:"h4"},[e._v("2. Justificación"),o("br"),e._v("del programa")])]),o("p",[e._v("En el plano internacional, el interés por los servicios de las industrias 4.0 de Colombia (BPO, software, salud, audiovisuales y contenidos digitales, comunicación gráfica y editorial) continúa ampliándose con ritmo acelerado. Entre enero y marzo de 2020, estas exportaciones registraron US$175 millones, de acuerdo con reportes de empresarios a ProColombia, y en el 2019 esta cifra fue de US$446,7 millones; además, recientemente varias compañías han tenido importantes reconocimientos internacionales en cuanto a subsectores, y los más apetecidos en el exterior fueron software y servicios TI, BPO, servicios de salud y producción audiovisual.")]),o("p",{staticClass:"mt-3"},[e._v("Desde el año 2016, el Ministerio TIC ha venido impulsando el desarrollo de empresas de sectores de contenidos digitales y software enfocados en exportar software o tecnologías de la información con el fin de reducir exponencialmente la escasez de talento de TI, por lo tanto, en la construcción de los planes de desarrollo en este sector en el país se han incluido estrategias y planes que incluyen, como una tendencia, la adopción de la transformación digital y las industrias 4.0 como factor que potenciará el desarrollo tecnológico del país.")]),o("p",{staticClass:"mt-3"},[e._v("Esta convergencia tecnológica, inclusión social digital y la implementación de la política de Estado para la transformación digital y el aprovechamiento de la cuarta revolución industrial, a través de la interoperabilidad de plataformas, requiere necesariamente de programas de formación con enfoque hacia la apropiación de tecnologías emergentes, seguridad digital, formación en talento digital y fomento del ecosistema de emprendimiento.")]),o("p",{staticClass:"mt-3"},[e._v("La cuarta revolución industrial y los constantes cambios tecnológicos exigen de las instituciones de formación para el trabajo, una permanente revisión de su oferta educativa para garantizar la pertinencia de sus programas y la satisfacción de las necesidades propias del sector productivo.")]),o("p",{staticClass:"mt-3"},[e._v("Además, se requiere de la formación integral de recurso humano que permita potencializar los procesos y tareas cotidianas aprovechando las bondades y tecnologías ofrecidas por la cuarta revolución industrial, las industrias 4.0 y el aprovechamiento de la “nube” como plataforma para el desarrollo y despliegue ágil de aplicaciones.")]),o("p",{staticClass:"mt-3"},[e._v("En tal sentido, el Estado colombiano promovió el Conpes 3920 de 2018 relacionado con la Política Nacional de Explotación de Datos – Bigdata- y el Conpes 3975 de 2019 mediante el cual se promueve la Política Nacional para la Transformación Digital e Inteligencia Artificial. Para su implementación, es fundamental la formación de técnicos con habilidades y destrezas en el uso y aprovechamiento de los recursos ofrecidos por la computación en la nube, el desarrollo de interfaces entre aplicaciones y servicios web cuyo rápido despliegue permitan aprovechar las bondades de las plataformas en la nube.")]),o("p",{staticClass:"mt-3"},[e._v("El programa Técnico en programación de aplicaciones y servicios para la nube ofrece la oportunidad de incorporar personal con alta calidad humana, laboral y profesional en todos los sectores, ya sean industriales, comerciales, de servicios, extractivos o primarios, contribuyendo al desarrollo económico, social y tecnológico del país.")]),o("p",{staticClass:"mt-3"},[e._v("Se enfoca en el desarrollo de competencias tendientes al aprovechamiento de recursos tecnológicos, incorporando módulos de formación relacionados con la comprensión de requisitos de software, implementación de bases de datos y codificación de software. Particularmente, aprovecha las virtudes de las plataformas en la nube, permitiendo desplegar aplicaciones de manera ágil basadas en las API (Application Programming Interface), servicios Web y DevOps. Este tipo de aplicaciones son fundamentales para altos niveles de interoperabilidad empresarial, modernización en las entidades públicas y privadas. Asimismo, el programa aborda resultados de aprendizaje tendientes a mejorar la calidad del software a partir de pruebas funcionales y de desempeño y el uso de plataformas cloud para una mayor eficiencia y disponibilidad de las soluciones.")]),o("p",{staticClass:"mt-3"},[e._v("El programa, además, busca cerrar las brechas digitales del país, disminuir el déficit de mano de obra calificada en la programación de software y promover el empresarismo y emprendimiento derivado de iniciativas en el aprovechamiento de las nuevas tecnologías.")]),o("p",{staticClass:"mt-3"},[e._v("El SENA ofrece el programa de formación Técnico en programación de aplicaciones y servicios para la nube en la modalidad virtual con todos los elementos de formación profesional, social, tecnológico y cultural, aportando como elementos diferenciadores de valor agregado metodologías de aprendizaje innovadoras, el acceso a tecnologías de última generación y una estructuración sobre métodos más que contenidos, lo que potencia la formación de ciudadanos librepensadores, con capacidad crítica, solidaria y emprendedora, factores que lo acreditan y lo hacen pertinente y coherente con su misión e innovando permanentemente de acuerdo con las tendencias y cambios tecnológicos y las necesidades del sector empresarial y de los trabajadores, impactando positivamente la productividad, la competitividad, la equidad y el desarrollo del país.")])])},function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"container tarjeta tarjeta__template--azul-claro p-4 p-md-5 mb-5"},[o("div",{staticClass:"titulo__template--a mb-4"},[o("span",{staticClass:"h4"},[e._v("3. Competencias "),o("br"),e._v("a desarrollar")])]),o("div",{staticClass:"tabla-b color-acento-botones"},[o("table",[o("thead",[o("tr",[o("th",[e._v("Norma de competencia laboral / unidad de competencia")]),o("th",[e._v("Código NCL/UC")])])]),o("tbody",[o("tr",[o("td",[e._v("Resultado de Aprendizaje de la inducción.")]),o("td",[e._v("240201530")])]),o("tr",[o("td",[e._v("Razonar cuantitativamente frente a situaciones susceptibles de ser abordadas de manera matemática en contextos laborales, sociales y personales.")]),o("td",[e._v("240201528")])]),o("tr",[o("td",[e._v("Generar hábitos saludables de vida mediante la aplicación de programas de actividad física en los contextos productivos y sociales.")]),o("td",[e._v("230101507")])]),o("tr",[o("td",[e._v("Desarrollar procesos de comunicación eficaces y efectivos, teniendo en cuenta situaciones de orden social, personal y productivo.")]),o("td",[e._v("240201524")])]),o("tr",[o("td",[e._v("Gestionar procesos propios de la cultura emprendedora y empresarial de acuerdo con el perfil personal y los requerimientos de los contextos productivo y social.")]),o("td",[e._v("240201525")])]),o("tr",[o("td",[e._v("Aplicar prácticas de protección ambiental, seguridad y salud en el trabajo de acuerdo con las políticas organizacionales y la normatividad vigente.")]),o("td",[e._v("220601501")])]),o("tr",[o("td",[e._v("Enrique Low Murtra- Interactuar en el contexto productivo y social de acuerdo con principios éticos para la construcción de una cultura de paz.")]),o("td",[e._v("240201526")])]),o("tr",[o("td",[e._v("Interactuar en lengua inglesa de forma oral y escrita dentro de contextos sociales y laborales según los criterios establecidos por el Marco Común Europeo de Referencia para las Lenguas.")]),o("td",[e._v("240202501")])]),o("tr",[o("td",[e._v("Establecer requisitos de la solución de software de acuerdo con estándares y procedimiento técnico.")]),o("td",[e._v("220501092-V.1")])]),o("tr",[o("td",[e._v("Desarrollar la solución de software de acuerdo con el diseño y metodologías de desarrollo.")]),o("td",[e._v("220501096-V. 1")])]),o("tr",[o("td",[e._v("Administrar base de datos de acuerdo con los estándares y requisitos técnicos. ")]),o("td",[e._v("220501113-V. 1")])]),o("tr",[o("td",[e._v("Aplicar el enfoque de la Programación orientada a objetos.")]),o("td",[e._v("220501095-V.1")])]),o("tr",[o("td",[e._v("Configurar dispositivos de cómputo de acuerdo con especificaciones del diseño y protocolos técnicos.")]),o("td",[e._v("220501106- V.1")])]),o("tr",[o("td",[e._v("Operar herramientas informáticas y digitales de acuerdo con protocolos y manuales técnicos.")]),o("td",[e._v("220501121-V.1")])]),o("tr",[o("td",[e._v("Construir sitios web según técnicas de interoperabilidad y protocolos técnicos.")]),o("td",[e._v("220501123-V.1")])]),o("tr",[o("td",[e._v("Utilizar herramientas informáticas de acuerdo con las necesidades de manejo de información.")]),o("td",[e._v("220501046-V.2")])]),o("tr",[o("td",[e._v("Ejercer derechos fundamentales del trabajo en el marco de la constitución política y los convenios internacionales.")]),o("td",[e._v("210201501")])])])])])])},function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"container tarjeta tarjeta__template--azul-claro p-4 p-md-5 mb-5"},[o("div",{staticClass:"titulo__template--a mb-4"},[o("span",{staticClass:"h4"},[e._v("4. Perfil"),o("br"),e._v("de ingreso")])]),o("p",[e._v("Nivel académico: básica secundaria (grado 9) y superar la prueba de aptitud y conocimiento; ser respetuoso, responsable con el trabajo asignado, tolerante, comprometido, persona adaptable al trabajo en equipo y trabajo individual, solucionador de problemas mediante el uso de tecnologías.")])])},function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"container tarjeta tarjeta__template--azul-claro p-4 p-md-5 mb-5"},[o("div",{staticClass:"titulo__template--a mb-4"},[o("span",{staticClass:"h4"},[e._v("5. Perfil"),o("br"),e._v("de egreso")])]),o("p",[e._v("El egresado del programa Técnico en programación de aplicaciones y servicios para la nube es un talento humano con una formación profesional integral, con la capacidad de analizar contextos, diseñar soluciones, maquetar, codificar y probar, persistir datos, desplegar en la nube y dar soporte a aplicaciones y sitios web utilizando técnicas, lenguajes de maquetación y programación y adoptando las mejores prácticas de la industria del software. Además, podrá demostrar la apropiación de la cultura del autoaprendizaje, actualización permanente, trabajo colaborativo con valores y principios éticos que le permitirán abordar las nuevas tendencias, innovar en su proceso personal y laboral apoyando procesos de transformación organizacional.")])])},function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"container tarjeta tarjeta__template--azul-claro p-4 p-md-5 mb-5"},[o("div",{staticClass:"titulo__template--a mb-4"},[o("span",{staticClass:"h4"},[e._v("6. Estrategia"),o("br"),e._v("metodológica")])]),o("p",[e._v("Está centrada en la construcción de autonomía para garantizar la calidad de la formación en el marco de la formación por competencias, el aprendizaje por proyectos y el uso de técnicas didácticas activas que estimulan el pensamiento para la resolución de problemas simulados y reales; soportadas en la utilización de las tecnologías de la información y la comunicación, integradas en ambientes virtuales de aprendizaje que, en todo caso recrean el contexto productivo y vinculan al aprendiz con la realidad cotidiana y el desarrollo de las competencias.")]),o("p",{staticClass:"mt-3"},[e._v("Igualmente, debe estimular de manera permanente la autocrítica y la reflexión del aprendiz sobre el quehacer y los resultados de aprendizaje que logra a través de la vinculación activa de las cuatro fuentes de información para la construcción de conocimiento:")]),o("ul",[o("li",[o("i",{staticClass:"fas fa-check"}),e._v(" El instructor – Tutor.")]),o("li",[o("i",{staticClass:"fas fa-check"}),e._v(" El entorno.")]),o("li",[o("i",{staticClass:"fas fa-check"}),e._v(" Las TIC.")]),o("li",[o("i",{staticClass:"fas fa-check"}),e._v(" El trabajo colaborativo.")])])])},function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"titulo__template--a mb-4"},[o("span",{staticClass:"h4"},[e._v("7. Créditos")])])}],c=(o("159b"),{name:"Inicio",data:function(){return{configTitulos:{liderEquipo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",contenidoInstruccional:"CONTENIDO INSTRUCCIONAL",desarrolloProducto:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",gestoresRepositorio:"GESTORES DE REPOSITORIO"}}},computed:{creditosData:function(){return this.$config.creditos}},methods:{renderText:function(e){var a="";return Array.isArray(e)?e.forEach((function(e,o){a+=(o?"<br/>":"")+e})):a+=e,a}}}),l=c,d=(o("6e1b"),o("2877")),u=Object(d["a"])(l,r,s,!1,null,null,null),p=u.exports,m={name:"App",components:{Inicio:p},mounted:function(){this.$aos.init()}},v=m,f=(o("cf25"),Object(d["a"])(v,t,n,!1,null,null,null)),b=f.exports,_=o("1c2c"),g=(o("a3a0"),{creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Peter Emerson Pinchao",cargo:"Experto temático",centro:"Centro de Teleinformática y Producción Industrial - Regional Cauca"},{nombre:"Zulema Yidney León Escobar",cargo:"Experto temático",centro:"Centro de teleinformática y producción industrial - Regional Cauca"},{nombre:"Jonathan Guerrero Astaiza",cargo:"Experto temático",centro:"Centro de teleinformática y producción industrial - Regional Cauca"},{nombre:"Alix Cecilia Chinchilla Rueda",cargo:"Diseñadora Instruccional",centro:"Centro de Gestión Industrial - Regional Bogotá"},{nombre:"José Gabriel Ortiz Abella",cargo:"Corrector de estilo",centro:"Centro para la Industria de la Comunicación Gráfica – Regional Distrito Capital"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Juan Carlos Tapias Rueda",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Luis Jesús Pérez Madariaga",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Gilberto Junior Rodriguez Rodriguez",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Nelson Iván Vera Briceño",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Wilson Andrés Arenales Caceres",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Zuleidy Maria Ruiz Torres",cargo:"Producción audiovisual",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Rafael Augusto Mantilla López",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"}]}});i["a"].prototype.$config=g;var y=o("9224");i["a"].prototype.$package=y,new i["a"]({store:_["a"],render:function(e){return e(b)}}).$mount("#app")},"6e1b":function(e,a,o){"use strict";o("703c")},"703c":function(e,a,o){},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-info-2021","version":"1.1.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"3.0.3"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.12","@vue/cli-plugin-eslint":"^4.5.12","@vue/cli-plugin-router":"^4.5.12","@vue/cli-plugin-vuex":"^4.5.12","@vue/cli-service":"^4.5.12","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.1.3","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.11"}}')},"9eb5":function(e,a,o){e.exports=o.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,o){},cf25:function(e,a,o){"use strict";o("fea6")},fea6:function(e,a,o){}});
//# sourceMappingURL=app.5703ca71.js.map