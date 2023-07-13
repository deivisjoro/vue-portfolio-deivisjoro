<script setup>
    import { onMounted, ref } from 'vue';
    import ProjectItem from '../ProjectItem.vue';

    const filter = ref('development');

    let items;
     
    onMounted(()=>{
      items = document.querySelector('.projects-container').children;   
      sortAndShow();
    })

    const sortAndShow = (e) => {
      let dataTarget = 'development';

      if(e){
        dataTarget = e.target.getAttribute('data-target');          
      }

      filter.value = dataTarget;

      for (let i = 0; i < items.length; i++) {
          items[i].classList.remove('active');
          items[i].classList.add('delete');

          if (items[i].getAttribute('data-category') == dataTarget || dataTarget == "all") {
            items[i].classList.remove('delete');
            items[i].classList.add('active');
          }
      }
  
    }

    const projects = [
      {
        id: 1,
        title: 'SAPA',
        acronimus: 'Sistema Automatizado para Procesos de Acreditacion',
        description: 'SAPA is a support application for the Self-Assessment of higher education academic programs, which offers an automated component for the preparation of the "Self-Assessment" section. The Application aims to facilitate the calculation processes involved in the "Self-Assessment Report", based on a statistical model created by the University of Córdoba',
        features: 'modules for 9 types of users, test application, roles, graphic reports',
        imagesUrl: '/images/projects/sapa/',
        cover: 'cover.png',
        images: ['sapa1.png', 'sapa2.png', 'sapa3.png', 'sapa4.png', 'sapa5.png', 'sapa6.png', 'sapa7.png', 'sapa8.png', 'sapa9.png', 'sapa10.png', 'sapa11.png', 'sapa12.png', 'sapa13.png', 'sapa14.png', 'sapa15.png', 'sapa16.png', 'sapa17.png', 'sapa18.png', 'sapa19.png', 'sapa20.png', 'sapa21.png', 'sapa22.png',],
        url: '',
        github: '',
        category: 'development',
        type: 'Web',
        languaje: 'PHP',
        kind: 'Statistical',
        stack: [
          'PHP', 'MySQL', 'Linux', 'CSS', 'HTML', 'Smarty', 'jpgraph', 'Pear', 'POO'
        ],
        isPublic: false,
        company: 'Group SOCRATES'
      },
      {
        id: 2,
        title: 'AppControl',
        acronimus: 'App de Control entradas / salidas',
        description: 'Application for the control of exits and entrances of medicines from the Camú de San Pelayo pharmacy',
        features: 'inventory, suppliers, medicines, reports, purchases, sales',
        imagesUrl: '/images/projects/appcontrol/',
        cover: 'cover.png',
        images: [],
        url: '',
        github: '',
        category: 'desktop',
        type: 'Desktop',
        languaje: 'Java',
        kind: 'Inventory Control',
        stack: [
          'Java', 'SQLite', 'Swing', 'Jasper Report'
        ],
        isPublic: false,
        company: 'CAMU San Pelayo'
      },
      {
        id: 3,
        title: 'DatasisWeb',
        acronimus: 'Plataforma de control e información académica para instituciones educativas',
        description: 'Plataforma de control e información académica para instituciones educativas',
        features: 'matriculas, informes, cargas academicas, estudiantes, docentes, calificaciones, boletines',
        imagesUrl: '/images/projects/datasisweb/',
        cover: 'cover.png',
        images: [],
        url: '',
        github: '',
        category: 'development',
        type: 'Web',
        languaje: 'CakePHP',
        kind: 'Academic Management',
        stack: [
          'PHP', 'CakePHP', 'MySQL', 'Javascript', 'JQuery', 'CSS', 'HTML', 'Ajax'
        ],
        isPublic: false,
        company: 'Data Sistemas'
      },      
      {
        id: 4,
        title: 'AVES',
        acronimus: 'Ambiente Virtual de Educación Superior',
        description: 'Ambiente Virtual de Educación Superior',
        features: 'matriculas, cargas academicas, estudiantes, docentes, boletines, cursos',
        imagesUrl: '/images/projects/aves/',
        cover: 'cover.png',
        images: [],
        url: '',
        github: '',
        category: 'development',
        type: 'Web',
        languaje: 'PHP',
        kind: 'Learning Management System',
        stack: [
          'PHP', 'MySQL', 'Javascript', 'CSS', 'HTML'
        ],
        isPublic: false,
        company: 'Group SOCRATES'
      },
      {
        id: 5,
        title: 'OVAUnicor',
        acronimus: 'Banco de Objetos de Aprendizaje ',
        description: 'Banco de Objetos de Aprendizaje ',
        features: 'Recursos de aprendizaje',
        imagesUrl: '/images/projects/ovaunicor/',
        cover: 'cover.png',
        images: [],
        url: '',
        github: '',
        category: 'development',
        type: 'Web',
        languaje: 'CakePHP',
        kind: 'Learning Management System',
        stack: [
          'PHP', 'CakePHP', 'MySQL', 'Javascript', 'JQuery', 'CSS', 'HTML', 'Ajax'
        ],
        isPublic: false,
        company: 'Group SOCRATES'
      },
      {
        id: 6,
        title: 'SIGAP',
        acronimus: 'Sistema de control de proyectos',
        description: 'Sistema de control de proyectos',
        features: 'presupuesto, reportes',
        imagesUrl: '/images/projects/sigap/',
        cover: 'cover.png',
        images: [],
        url: '',
        github: '',
        category: 'desktop',
        type: 'Desktop',
        languaje: 'Delphi',
        kind: 'Information Management System',
        stack: [
          'Delphi', 'Object Pascal', 'QuickReport', 'Firebase/Interbase'
        ],
        isPublic: false,
        company: 'Group SOCRATES'
      },
    ];

</script>

<template>
  
    <section class="min-h-[calc(100vh-110px)] pt-[120px] px-2 ProjectsSection">
        
        <div class="w-full flex items-center">
            <div class="w-[20%] h-[1px] bg-red-600">&nbsp;</div>
            <h2 class="mx-2 font-semibold text-2xl text-indigo-950 section" id="ProjectsSection">PROJECTS</h2>
            <div class="h-[1px] bg-red-600 flex-1">&nbsp;</div>
        </div>

        <header class="flex items-center justify-end mb-4 mt-2">
            <div class="flex items-center">
                <span>Filter: </span>
                <ul class="mr-2 flex">
                    <li data-target="development" class="px-2 mx-1 py-1 rounded-md hover:bg-indigo-950 hover:text-white text-indigo cursor-pointer border-solid border-indigo-950 border-[1px] flex items-center text-xs md:text-sm" :class="{'bg-indigo-950 text-white': filter=='development'}" @click="sortAndShow">Web Development</li>
                    <li data-target="design" class="px-2 mx-1 p-1 rounded-md hover:bg-indigo-950 hover:text-white text-indigo cursor-pointer border-solid border-indigo-950 border-[1px] flex items-center text-xs md:text-sm" :class="{'bg-indigo-950 text-white': filter=='design'}" @click="sortAndShow">Web Design</li>                    
                    <li data-target="desktop" class="px-2 mx-1 py-1 rounded-md hover:bg-indigo-950 hover:text-white text-indigo cursor-pointer border-solid border-indigo-950 border-[1px] flex items-center text-xs md:text-sm" :class="{'bg-indigo-950 text-white': filter=='desktop'}" @click="sortAndShow">Desktop Development</li>
                    <li data-target="all" class="px-2 mx-1 py-1 rounded-md hover:bg-indigo-950 hover:text-white text-indigo cursor-pointer border-solid border-indigo-950 border-[1px] flex items-center text-xs md:text-sm" :class="{'bg-indigo-950 text-white': filter=='all'}" @click="sortAndShow">All</li>
                </ul>
            </div>
        </header>

        <div class="py-4 bg-slate-50 rounded-xl">
            <section class="flex items-center flex-wrap projects-container">
                <ProjectItem 
                  :project="project" v-for="project in projects" 
                  :key="'project'+project.id" />
            </section>
        </div>

        <!-- <div class="py-4 bg-slate-50 rounded-xl">
            <section class="flex items-center flex-wrap projects-container">
                <ProjectItem title="Proyecto 1" category="design" />
                <ProjectItem title="Proyecto 2" category="development" />
                <ProjectItem title="Proyecto 3" category="design" />
                <ProjectItem title="Proyecto 4" category="desing" />
                <ProjectItem title="Proyecto 5" category="development" />
                <ProjectItem title="Proyecto 6" category="desktop" />
                <ProjectItem title="Proyecto 7" category="development" />
                <ProjectItem title="Proyecto 8" category="design" />
                <ProjectItem title="Proyecto 9" category="desktop" />
                <ProjectItem title="Proyecto 10" category="development" />
            </section>
        </div> -->


    </section>
</template>

<style scoped>

.active {
  width: 50%;
  transition: all 0.5s ease;
}

.delete {
  width: 0%;
  transition: all 0.5s ease;
  overflow: hidden;
}

@media screen and (min-width: 640px) {
  .active {
    width: 33.3%;
  }
}

@media screen and (min-width: 768px) {
  .active {
    width: 25%;
  }
}

@media screen and (min-width: 1024px) {
  .active {
    width: 20%;
  }
}

@media screen and (min-width: 1280px) {
  .active {
    width: 16.66%;
  }
}


</style>