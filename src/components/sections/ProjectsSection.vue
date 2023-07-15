<script setup>
    import { onMounted, ref } from 'vue';
    import ProjectItem from '../ProjectItem.vue';
    import { Icon } from '@iconify/vue';
    import projects from '../../data/projects';

    const filter = ref('development');
    const dialogInfoState = ref(false);
    const projectSelected = ref(null);
    const currentImage = ref(null);
    const images = ref([]);

    let items;
     
    onMounted(()=>{
      items = document.querySelector('.projects-container').children;   
      sortAndShow();
    })

    const sortAndShow = (e) => {
      let dataTarget = 'Development';

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
    
    const fnShowInfoProject = (id) => {
      projectSelected.value = projects.find(p=>p.id===id);
      dialogInfoState.value = true;

      images.value = projectSelected.value.images;
      images.value = [{name: projectSelected.value.cover, description: 'project presentation image'}, ...images.value];
      currentImage.value = images.value[0];      
    }

    const fnHideInfoProject = () => {
      projectSelected.value = null;
      dialogInfoState.value = false;
      images.value = [];
    }

    const setCurrentImage = (index) => {
      currentImage.value = images.value[index];
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
                    <li data-target="Development" class="px-2 mx-1 py-1 rounded-md hover:bg-indigo-950 hover:text-white text-indigo cursor-pointer border-solid border-indigo-950 border-[1px] flex items-center text-xs md:text-sm" :class="{'bg-indigo-950 text-white': filter=='Development'}" @click="sortAndShow">Web Development</li>
                    <li data-target="Design" class="px-2 mx-1 p-1 rounded-md hover:bg-indigo-950 hover:text-white text-indigo cursor-pointer border-solid border-indigo-950 border-[1px] flex items-center text-xs md:text-sm" :class="{'bg-indigo-950 text-white': filter=='Design'}" @click="sortAndShow">Web Design</li>                    
                    <li data-target="Desktop" class="px-2 mx-1 py-1 rounded-md hover:bg-indigo-950 hover:text-white text-indigo cursor-pointer border-solid border-indigo-950 border-[1px] flex items-center text-xs md:text-sm" :class="{'bg-indigo-950 text-white': filter=='Desktop'}" @click="sortAndShow">Desktop Development</li>
                    <li data-target="all" class="px-2 mx-1 py-1 rounded-md hover:bg-indigo-950 hover:text-white text-indigo cursor-pointer border-solid border-indigo-950 border-[1px] flex items-center text-xs md:text-sm" :class="{'bg-indigo-950 text-white': filter=='all'}" @click="sortAndShow">All</li>
                </ul>
            </div>
        </header>

        <div class="py-4 bg-slate-50 rounded-xl">
            <section class="flex items-center flex-wrap projects-container">
                <ProjectItem 
                  :project="project" v-for="project in projects" 
                  :key="'project'+project.id" 
                  @onShowDialogInfo="fnShowInfoProject($event)" />
            </section>
            
            <GDialog v-model="dialogInfoState" fullscreen>
                <div class="flex flex-col justify-between h-[100vh]">
                    <div class="pb-4">
                        <div v-if="projectSelected">
                          <div class="flex items-center justify-between border-b py-2">
                            <div class="text-xl font-semibold ml-2 text-indigo-900">
                              PROJECT DETAILS
                            </div>

                            <div class="flex justify-end mr-2">
                              <span class="text-gray-300 hover:text-black hover:cursor-pointer rounded-full hover:bg-gray-300 inline-block w-[30px] h-[30px] flex items-center justify-center hover:shadow" @click="fnHideInfoProject">
                                <Icon icon="ep:close-bold" width="20" />
                              </span>
                            </div>
                          </div>
                          <div class="flex md:flex-row flex-col w-full"> 

                            <div class="md:w-[50%] bg-white p-3 rounded-lg md:mb-2 mb-0 md:border mt-1 mx-1">
                              <div>
                                <div class="space-y-1">
                                  <h3 class="text-xl font-bold sm:text-2xl text-indigo-800">
                                    {{ projectSelected.title }}
                                  </h3>

                                  <p class="text-sm text-amber-500">{{ projectSelected.acronimus }}</p>
                                </div>
                                <p class="font-light text-xs mb-2 text-justify">
                                  {{ projectSelected.description }}
                                </p>
                              </div>
                              <div class="mt-2 border-b">
                                <h4 class="text-indigo-800 text-sm font-semibold">Features</h4>
                                <p class="text-xs font-semibold">
                                  {{ projectSelected.features }}
                                </p>
                              </div>

                              <div class="mt-2 flex border-b">
                                <div class="flex-1">
                                  <h4 class="text-indigo-800 text-sm font-semibold">Company</h4>
                                  <p class="text-xs font-light flex flex-wrap">
                                    <span class="text-xs font-semibold">
                                      {{ projectSelected.company }}
                                    </span>
                                  </p>
                                </div>
                                <div class="flex-1">
                                  <h4 class="text-indigo-800 text-sm font-semibold">Kind</h4>
                                  <p class="text-xs font-light flex flex-wrap">
                                    <span class="text-xs font-semibold">
                                      {{ projectSelected.kind }}
                                    </span>
                                  </p>
                                </div>
                              </div>

                              <div class="mt-2 flex border-b">
                                <div class="flex-1">
                                  <h4 class="text-indigo-800 text-sm font-semibold">Privacy Source Code</h4>
                                  <p class="text-xs font-light flex flex-wrap">
                                    <span class="text-xs font-semibold">
                                      {{ projectSelected.isPublic ? 'Public' : 'Private' }}
                                    </span>
                                  </p>
                                </div>
                                <div class="flex-1">
                                  <h4 class="text-indigo-800 text-sm font-semibold">Category</h4>
                                  <p class="text-xs font-light flex flex-wrap">
                                    <span class="text-xs font-semibold">
                                      {{ projectSelected.category }}
                                    </span>
                                  </p>
                                </div>
                              </div>

                              <div class="mt-2 flex border-b">
                                <div class="flex-1">
                                  <h4 class="text-indigo-800 text-sm font-semibold">Type</h4>
                                  <p class="text-xs font-light flex flex-wrap">
                                    <span class="text-xs font-semibold">
                                      {{ projectSelected.type }}
                                    </span>
                                  </p>
                                </div>
                                <div class="flex-1">
                                  <h4 class="text-indigo-800 text-sm font-semibold">Languaje</h4>
                                  <p class="text-xs font-light flex flex-wrap">
                                    <span class="text-xs font-semibold">
                                      {{ projectSelected.languaje }}
                                    </span>
                                  </p>
                                </div>
                              </div>

                              <div class="mt-2">
                                <h4 class="text-indigo-800 text-sm font-semibold">Rols</h4>
                                <p class="text-xs font-light flex flex-wrap">
                                  <span v-for="rol in projectSelected.roles" :key="rol" class="py-1 px-2 mr-1 rounded shadow text-xs bg-amber-400 font-semibold text-white my-1">
                                    {{ rol }}
                                  </span>
                                </p>
                              </div>

                              <div class="mt-2">
                                <h4 class="text-indigo-800 text-sm font-semibold">Stack</h4>
                                <p class="text-xs font-light flex flex-wrap">
                                  <span v-for="stack in projectSelected.stack" :key="stack" class="py-1 px-2 mr-1 rounded shadow text-xs bg-blue-400 font-semibold text-white my-1">
                                    {{ stack }}
                                  </span>
                                </p>
                              </div>
                              <div class="mt-2">
                                <h4 class="text-indigo-800 text-sm font-semibold">GitHub</h4>
                                <p class="text-xs font-light flex flex-wrap">
                                  <span class="text-xs font-semibold">
                                    <a :href="projectSelected.github" v-if="projectSelected.isPublic" class="flex items-center hover:text-blue-700">
                                      <Icon icon="heroicons-solid:external-link" width="12" /> 
                                      {{ projectSelected.github }}
                                    </a>
                                    <span v-else>The project is private</span>
                                  </span>
                                </p>
                              </div>
                              <div class="mt-2">
                                <h4 class="text-indigo-800 text-sm font-semibold">URL</h4>
                                <p class="text-xs font-light flex flex-wrap">
                                  <span class="text-xs font-semibold">
                                    <a :href="projectSelected.url" v-if="projectSelected.isPublic" class="flex items-center  hover:text-blue-700">
                                      <Icon icon="heroicons-solid:external-link" width="12" />
                                      {{ projectSelected.url }}
                                    </a>
                                    <span v-else>The project is private</span>
                                  </span>
                                </p>
                              </div>
                              
                            </div>
                            <div class="md:w-[50%] bg-white p-3 rounded-lg md:mb-2 mb-0 md:border mt-1 mx-1">
                              <div class="mt-1">
                                <h4 class="text-indigo-800 text-sm mb-2 font-semibold">
                                  Galery
                                </h4>                               
                              </div>
                              <div class="shadow rounded p-1 relative">
                                <img class="rounded-lg object-fit" :src="projectSelected.imagesUrl+currentImage.name" alt="image project">
                                <div class="absolute bottom-0 left-0 w-full h-[20%] bg-black opacity-60 flex flex-col items-center justify-center text-white text-sm">
                                  <div class="mb-1 text-center">
                                    "{{ currentImage.description ? currentImage.description : 'without description' }}"
                                  </div>
                                  <div class="text-center">
                                    <a :href="projectSelected.imagesUrl+currentImage.name" target="_black" class="flex items-center hover:text-red-900">
                                      <Icon icon="heroicons-solid:external-link" width="12" /> 
                                      View image in original size
                                    </a>
                                  </div>
                                </div>
                              </div>                              
                              <div class="flex flex-wrap items-center justify-center mt-2 items-center gap-2">
                                <div v-for="(image, index) in images" :key="image" class="self-stretch flex items-center">
                                  <img width="70" class="rounded-md object-fit border-[3px] cursor-pointer hover:border-red-300" 
                                  :class="currentImage.name===image.name?'border-red-600 hover:border-red-600':''" :src="projectSelected.imagesUrl+image.name" alt="imagen project" @click="setCurrentImage(index)">
                                </div>
                                
                              </div>
                            </div>
                          </div>
                        </div>
                        <div v-else>
                          <div class="p-5 mt-4 mx-4 bg-amber-200 text-xl text-center">
                            Not selected project
                          </div>
                        </div>
                    </div>

                    <div class="flex justify-end py-2 px-4 border-t border-solid border-[1px] border-[rgba(0, 0, 0, 0.12)]">
                        <button class="rounded bg-indigo-700 hover:bg-indigo-950 text-white py-2 px-4" @click="fnHideInfoProject">
                            Cerrar
                        </button>
                    </div>
                </div>
            </GDialog>
        </div>

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