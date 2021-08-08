<template lang="pug">
section
  .banner-principal.mb-5
    .container.tarjeta.p-4.p-sm-5(
      :style="{'background-image': `url(${require('@/assets/curso/fondo-banner-principal.svg')})`}"
    )
      .row.justify-content-around.align-items-center
        .col-lg-7.col-xxl-6.banner-principal__info
          .banner-principal__programa
            .h1.mb-0 Técnico en programación de aplicaciones y servicios para la nube
          
          .h2 Información del programa
          .banner-principal__datos
            ul
              li.mb-3.banner-principal__datos__item
                p.h6.mb-0.me-3.banner-principal__datos__item__titulo Nombre del programa: 
                p.banner-principal__datos__item__texto Programación de aplicaciones y servicios para la nube
              li.mb-3.banner-principal__datos__item
                p.h6.mb-0.me-3.banner-principal__datos__item__titulo Código: 
                p.banner-principal__datos__item__texto 228122
              li.mb-3.banner-principal__datos__item
                p.h6.mb-0.me-3.banner-principal__datos__item__titulo Total Horas: 
                p.banner-principal__datos__item__texto 2256
              li.mb-3.banner-principal__datos__item
                p.h6.mb-0.me-3.banner-principal__datos__item__titulo Duración en meses: 
                p.banner-principal__datos__item__texto 7
              li.mb-3.banner-principal__datos__item
                p.h6.mb-0.me-3.banner-principal__datos__item__titulo Modalidad: 
                p.banner-principal__datos__item__texto virtual
             

        .d-none.d-lg-block.col-lg-5
          //- img(src="@/assets/curso/banner-princiapal.svg")
          .video
            | <iframe data-v-1f9e4816="" width="560" height="315" src="https://www.youtube.com/embed/2l7iG_08zEE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

  .container.tarjeta.tarjeta__template--azul-claro.p-4.p-md-5.mb-5
    .titulo__template--a.mb-4
      span.h4 1. Presentación

    p Bienvenido al programa Técnico en programación de aplicaciones y servicios para la nube. Este programa busca formar técnicos con las competencias y las habilidades requeridas por la industria del desarrollo de software, la cual es una de las áreas de mayor proyección en Colombia y en el mundo.
    
    p.mt-3 La importancia de las tecnologías de la información se ha incrementado debido a la intensificación de los procesos de producción en los mercados, pues ella es la impulsora de la globalización de los mercados de bienes y servicios.

    p.mt-3 Debido a la proliferación de estas tecnologías las empresas ven el comercio de una manera muy diferente, lo que las lleva a incorporar innovaciones tecnológicas y renovar con nuevos métodos que facilitan la producción y su relación con los clientes.

    p.mt-3 Este programa de formación está diseñado para transferir las competencias necesarias en el proceso de innovación tecnológica, permitiéndoles a las empresas aprovechar el personal calificado en la adopción de ciencias telemáticas, también conocido como teleinformáticas, en la solución de problemas o mejora de los procesos empresariales, ya que esta ciencia engloba los conocimientos de la informática y de las tecnologías de la comunicación para el análisis, diseño, desarrollo e implantación de servicios o aplicaciones software que permitan transmitir y procesar datos a través de internet, presentando especial énfasis en la implantación servidores y servicios de computación en la nube.

    p.mt-3 El aprendiz de este programa recibirá una formación integral que le permitirá integrarse a la industria del desarrollo de software con una alta calidad humana, laboral y profesional en entornos multisectoriales debido a la alta aplicabilidad de la industria del software en sectores industriales, comerciales, de servicios o primarios.

    p.mt-3 Durante el proceso de formación, el aprendiz podrá desarrollar habilidades y conocimientos en razonamiento cuantitativo, establecimiento de requisitos del software, construcción de algoritmos, implementación de bases de datos, construcción de aplicaciones web orientadas a servicios, aplicación de prácticas y uso de herramientas para DevOps, despliegue de aplicaciones y servicios en la nube.

    p.mt-3 Éxitos y de nuevo bienvenido a la industria del presente y del futuro.

  .container.tarjeta.tarjeta__template--azul-claro.p-4.p-md-5.mb-5
    .titulo__template--a.mb-4
      span.h4 2. Justificación<br>del programa

    p En el plano internacional, el interés por los servicios de las industrias 4.0 de Colombia (BPO, software, salud, audiovisuales y contenidos digitales, comunicación gráfica y editorial) continúa ampliándose con ritmo acelerado. Entre enero y marzo de 2020, estas exportaciones registraron US$175 millones, de acuerdo con reportes de empresarios a ProColombia, y en el 2019 esta cifra fue de US$446,7 millones; además, recientemente varias compañías han tenido importantes reconocimientos internacionales en cuanto a subsectores, y los más apetecidos en el exterior fueron software y servicios TI, BPO, servicios de salud y producción audiovisual.

    p.mt-3 Desde el año 2016, el Ministerio TIC ha venido impulsando el desarrollo de empresas de sectores de contenidos digitales y software enfocados en exportar software o tecnologías de la información con el fin de reducir exponencialmente la escasez de talento de TI, por lo tanto, en la construcción de los planes de desarrollo en este sector en el país se han incluido estrategias y planes que incluyen, como una tendencia, la adopción de la transformación digital y las industrias 4.0 como factor que potenciará el desarrollo tecnológico del país.

    p.mt-3 Esta convergencia tecnológica, inclusión social digital y la implementación de la política de Estado para la transformación digital y el aprovechamiento de la cuarta revolución industrial, a través de la interoperabilidad de plataformas, requiere necesariamente de programas de formación con enfoque hacia la apropiación de tecnologías emergentes, seguridad digital, formación en talento digital y fomento del ecosistema de emprendimiento.

    p.mt-3 La cuarta revolución industrial y los constantes cambios tecnológicos exigen de las instituciones de formación para el trabajo, una permanente revisión de su oferta educativa para garantizar la pertinencia de sus programas y la satisfacción de las necesidades propias del sector productivo.

    p.mt-3 Además, se requiere de la formación integral de recurso humano que permita potencializar los procesos y tareas cotidianas aprovechando las bondades y tecnologías ofrecidas por la cuarta revolución industrial, las industrias 4.0 y el aprovechamiento de la “nube” como plataforma para el desarrollo y despliegue ágil de aplicaciones.

    p.mt-3 En tal sentido, el Estado colombiano promovió el Conpes 3920 de 2018 relacionado con la Política Nacional de Explotación de Datos – Bigdata- y el Conpes 3975 de 2019 mediante el cual se promueve la Política Nacional para la Transformación Digital e Inteligencia Artificial. Para su implementación, es fundamental la formación de técnicos con habilidades y destrezas en el uso y aprovechamiento de los recursos ofrecidos por la computación en la nube, el desarrollo de interfaces entre aplicaciones y servicios web cuyo rápido despliegue permitan aprovechar las bondades de las plataformas en la nube.

    p.mt-3 El programa Técnico en programación de aplicaciones y servicios para la nube ofrece la oportunidad de incorporar personal con alta calidad humana, laboral y profesional en todos los sectores, ya sean industriales, comerciales, de servicios, extractivos o primarios, contribuyendo al desarrollo económico, social y tecnológico del país.

    p.mt-3 Se enfoca en el desarrollo de competencias tendientes al aprovechamiento de recursos tecnológicos, incorporando módulos de formación relacionados con la comprensión de requisitos de software, implementación de bases de datos y codificación de software. Particularmente, aprovecha las virtudes de las plataformas en la nube, permitiendo desplegar aplicaciones de manera ágil basadas en las API (Application Programming Interface), servicios Web y DevOps. Este tipo de aplicaciones son fundamentales para altos niveles de interoperabilidad empresarial, modernización en las entidades públicas y privadas. Asimismo, el programa aborda resultados de aprendizaje tendientes a mejorar la calidad del software a partir de pruebas funcionales y de desempeño y el uso de plataformas cloud para una mayor eficiencia y disponibilidad de las soluciones.

    p.mt-3 El programa, además, busca cerrar las brechas digitales del país, disminuir el déficit de mano de obra calificada en la programación de software y promover el empresarismo y emprendimiento derivado de iniciativas en el aprovechamiento de las nuevas tecnologías.

    p.mt-3 El SENA ofrece el programa de formación Técnico en programación de aplicaciones y servicios para la nube en la modalidad virtual con todos los elementos de formación profesional, social, tecnológico y cultural, aportando como elementos diferenciadores de valor agregado metodologías de aprendizaje innovadoras, el acceso a tecnologías de última generación y una estructuración sobre métodos más que contenidos, lo que potencia la formación de ciudadanos librepensadores, con capacidad crítica, solidaria y emprendedora, factores que lo acreditan y lo hacen pertinente y coherente con su misión e innovando permanentemente de acuerdo con las tendencias y cambios tecnológicos y las necesidades del sector empresarial y de los trabajadores, impactando positivamente la productividad, la competitividad, la equidad y el desarrollo del país.

  .container.tarjeta.tarjeta__template--azul-claro.p-4.p-md-5.mb-5
    .titulo__template--a.mb-4
      span.h4 3. Competencias <br>a desarrollar

    .tabla-b.color-acento-botones
      table
        thead
          tr
            th Norma de competencia laboral / unidad de competencia
            th Código NCL/UC
        tbody
          tr
            td Resultado de Aprendizaje de la inducción.
            td 240201530
          tr
            td Razonar cuantitativamente frente a situaciones susceptibles de ser abordadas de manera matemática en contextos laborales, sociales y personales.
            td 240201528
          tr
            td Generar hábitos saludables de vida mediante la aplicación de programas de actividad física en los contextos productivos y sociales.
            td 230101507
          tr
            td Desarrollar procesos de comunicación eficaces y efectivos, teniendo en cuenta situaciones de orden social, personal y productivo.
            td 240201524
          tr
            td Gestionar procesos propios de la cultura emprendedora y empresarial de acuerdo con el perfil personal y los requerimientos de los contextos productivo y social.
            td 240201525
          tr
            td Aplicar prácticas de protección ambiental, seguridad y salud en el trabajo de acuerdo con las políticas organizacionales y la normatividad vigente.
            td 220601501
          tr
            td Enrique Low Murtra- Interactuar en el contexto productivo y social de acuerdo con principios éticos para la construcción de una cultura de paz.
            td 240201526
          tr
            td Interactuar en lengua inglesa de forma oral y escrita dentro de contextos sociales y laborales según los criterios establecidos por el Marco Común Europeo de Referencia para las Lenguas.
            td 240202501
          tr
            td Establecer requisitos de la solución de software de acuerdo con estándares y procedimiento técnico.
            td 220501092-V.1
          tr
            td Desarrollar la solución de software de acuerdo con el diseño y metodologías de desarrollo.
            td 220501096-V. 1
          tr
            td Administrar base de datos de acuerdo con los estándares y requisitos técnicos. 
            td 220501113-V. 1
          tr
            td Aplicar el enfoque de la Programación orientada a objetos.
            td 220501095-V.1
          tr
            td Configurar dispositivos de cómputo de acuerdo con especificaciones del diseño y protocolos técnicos.
            td 220501106- V.1
          tr
            td Operar herramientas informáticas y digitales de acuerdo con protocolos y manuales técnicos.
            td 220501121-V.1
          tr
            td Construir sitios web según técnicas de interoperabilidad y protocolos técnicos.
            td 220501123-V.1
          tr
            td Utilizar herramientas informáticas de acuerdo con las necesidades de manejo de información.
            td 220501046-V.2
          tr
            td Ejercer derechos fundamentales del trabajo en el marco de la constitución política y los convenios internacionales.
            td 210201501

  .container.tarjeta.tarjeta__template--azul-claro.p-4.p-md-5.mb-5
    .titulo__template--a.mb-4
      span.h4 4. Perfil<br>de ingreso

    p Nivel académico: básica secundaria (grado 9) y superar la prueba de aptitud y conocimiento; ser respetuoso, responsable con el trabajo asignado, tolerante, comprometido, persona adaptable al trabajo en equipo y trabajo individual, solucionador de problemas mediante el uso de tecnologías.

  .container.tarjeta.tarjeta__template--azul-claro.p-4.p-md-5.mb-5
    .titulo__template--a.mb-4
      span.h4 5. Perfil<br>de egreso

    p El egresado del programa Técnico en programación de aplicaciones y servicios para la nube es un talento humano con una formación profesional integral, con la capacidad de analizar contextos, diseñar soluciones, maquetar, codificar y probar, persistir datos, desplegar en la nube y dar soporte a aplicaciones y sitios web utilizando técnicas, lenguajes de maquetación y programación y adoptando las mejores prácticas de la industria del software. Además, podrá demostrar la apropiación de la cultura del autoaprendizaje, actualización permanente, trabajo colaborativo con valores y principios éticos que le permitirán abordar las nuevas tendencias, innovar en su proceso personal y laboral apoyando procesos de transformación organizacional.

  .container.tarjeta.tarjeta__template--azul-claro.p-4.p-md-5.mb-5
    .titulo__template--a.mb-4
      span.h4 6. Estrategia<br>metodológica

    p Está centrada en la construcción de autonomía para garantizar la calidad de la formación en el marco de la formación por competencias, el aprendizaje por proyectos y el uso de técnicas didácticas activas que estimulan el pensamiento para la resolución de problemas simulados y reales; soportadas en la utilización de las tecnologías de la información y la comunicación, integradas en ambientes virtuales de aprendizaje que, en todo, caso recrean el contexto productivo y vinculan al aprendiz con la realidad cotidiana y el desarrollo de las competencias.

    p.mt-3 Igualmente, debe estimular de manera permanente la autocrítica y la reflexión del aprendiz sobre el que hacer y los resultados de aprendizaje que logra a través de la vinculación activa de las cuatro fuentes de información para la construcción de conocimiento:

    ul
      li 
        i.fas.fa-check
        | &nbsp;El instructor – Tutor.
      li 
        i.fas.fa-check
        | &nbsp;El entorno.
      li 
        i.fas.fa-check
        | &nbsp;Las TIC.
      li 
        i.fas.fa-check
        | &nbsp;El trabajo colaborativo.

     

  //- Créditos
  .container.tarjeta.tarjeta__template--azul-claro.p-4.p-md-5.mb-5
    .titulo__template--a.mb-4
      span.h4 7. Créditos

    .creditos
      div(
        v-for="(creditoKey, index) of Object.keys(creditosData)"
        :class="index != Object.keys(creditosData).length -1 ? 'mb-4' : ''" 
      )
        .creditos__titulo {{configTitulos[creditoKey]}}
        table
          tbody
            tr(
              v-for="(item, idx) of creditosData[creditoKey]" 
              :key="creditoKey+idx"
            )
              td.text-bold(colspan='2' v-html="renderText(item.nombre)")
              td(colspan='2' v-html="renderText(item.cargo)")
              td(colspan='3' v-html="renderText(item.centro)")

  Footer

</template>
<script>
export default {
  name: 'Inicio',
  data: () => ({
    configTitulos: {
      liderEquipo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      contenidoInstruccional: 'CONTENIDO INSTRUCCIONAL',
      desarrolloProducto:
        'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      gestoresRepositorio: 'GESTORES DE REPOSITORIO',
    },
  }),
  computed: {
    creditosData() {
      return this.$config.creditos
    },
  },
  methods: {
    renderText(textObj) {
      let newText = ''
      if (Array.isArray(textObj)) {
        textObj.forEach((texto, index) => {
          newText += (index ? '<br/>' : '') + texto
        })
      } else {
        newText += textObj
      }
      return newText
    },
  },
}
</script>

<style lang="sass">
.creditos
  td, th
    border-color: $color-sistema-c
</style>
