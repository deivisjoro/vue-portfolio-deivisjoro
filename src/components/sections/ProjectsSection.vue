<script setup>
    import { onMounted, ref } from 'vue';
    import ProjectItem from '../ProjectItem.vue';

    const filter = ref('development');

    let items;
     
    onMounted(()=>{
      items = document.querySelector('.projects-container').children;   
    })

    const sortAndShow = (e) => {
      const dataTarget = e.target.getAttribute('data-target'); 
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

        <div class="py-4 bg-slate-100 rounded-xl">
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
        </div>


    </section>
</template>

<style scoped>


.filter_container .overlay {
  position: absolute;
  bottom: 10px;
  left: 17px;
  right: 0px;
  background-color: #20C863;
  overflow: hidden;
  width: 90%;
  height: 90%;
  transform: scale(0);
  transition: .3s ease;
}

.filter_container:hover .overlay {
  transform: scale(1);
}

.active {
  width: 50%;
  transition: all 0.5s ease;
  margin:0;
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
.delete {
  width: 0%;
  transition: all 0.5s ease;
}

</style>