<script setup>
    import { ref } from 'vue';
    import { Icon } from '@iconify/vue';
    import { Modal } from 'usemodal-vue3';

    import {openModal} from '@kolirt/vue-modal'
    import TestModal from './modals/InfoProjectModal.vue'

    const props = defineProps(['project']);
    const { project } = props;

    let isVisible = ref(false);
    const dialogState = ref(false)

    function runModal() {
        openModal(TestModal, {
            test: 'some props'
        })
        // runs when modal is closed via confirmModal
        .then((data) => {
            console.log('success', data)
        })
        // runs when modal is closed via closeModal or esc
        .catch(() => {
            console.log('catch')
        })
    }

</script>

<template>

    <div class="self-stretch w-[50%] sm:w-[33.3%] md:w-[25%] lg:w-[20%] xl:w-[16.66%] group my-1" :data-category="project.category">
        <div class="p-2 w-full h-full">
            <div class="bg-white rounded-md p-1 relative overflow-hidden shadow h-full">
                <div class="">
                    <div class="overflow-hidden">
                        <img :src="project.imagesUrl+project.cover" :alt="'image project '+project.title" class="block w-full h-auto mx-auto group-hover:scale-125 scale-100 transition-all duration-500">
                    </div>
                    <div class="flex flex-col justify-between">
                        <h4 class="text-center py-1 mt-2 text-base font-semibold text-amber-500"> 
                            {{ project.title }}
                        </h4>
                        <h5 class="text-sm text-center text-indigo-950">
                            {{ project.acronimus }}
                        </h5>
                        <div class="p-1 my-1 flex justify-center items-center flex-wrap">
                            <span class="p-2 m-1 rounded shadow text-xs bg-blue-400 font-semibold text-white">{{ project.type }}</span>
                            <span class="p-2 m-1 rounded shadow text-xs bg-blue-400 font-semibold text-white">{{ project.languaje }}</span>
                            <span class="p-2 m-1 rounded shadow text-xs bg-blue-400 font-semibold text-white">{{ project.kind }}</span>
                        </div>
                    </div>
                </div>
                
                <div class="absolute bottom-0 left-0 w-full h-0 group-hover:h-[100%] transition-all duration-200 opacity-60">
                    <div class="bg-black rounded-md w-full h-full">
                    </div>                
                </div>

                <div class="absolute bottom-0 left-0 w-full h-0 group-hover:h-[100%] transition-all duration-200">
                    <div class="overflow-hidden w-full h-full flex items-center justify-center text-lg text-white p-2">
                        <span class="p-2 m-1 border-solid border-white border-[1px] rounded shadow text-white hover:bg-white hover:border-red-500 hover:border-[2px] hover:text-indigo-950 hover:cursor-pointer" @click="isVisible=true">
                            <Icon icon="ic:outline-info" width="20" />
                            <Icon icon="mdi:eye" width="20" />
                        </span>
                        <span class="p-2 m-1 border-solid border-white border-[1px] rounded shadow text-white hover:bg-white hover:border-red-500 hover:border-[2px] hover:text-indigo-950  hover:cursor-pointer">                            
                            <Icon icon="grommet-icons:gallery" width="20" />
                            <Icon icon="mdi:eye" width="20" />
                        </span>
                        <span class="p-2 m-1 border-solid border-white border-[1px] rounded shadow text-white" :class="{'hover:bg-white hover:border-red-500 hover:border-[2px] hover:text-black hover:cursor-pointer': project.github}">                            
                            <Icon icon="iconamoon:link-external-bold" width="20" />
                            <Icon :icon="!project.url ? 'mdi:eye-off' : 'mdi:eye'" width="20" />
                        </span>
                        <span class="p-2 m-1 border-solid border-white border-[1px] rounded shadow text-white" :class="{'hover:bg-white hover:border-red-500 hover:border-[2px] hover:text-black hover:cursor-pointer': project.github}">                            
                            <Icon icon="mdi:github" width="20" />
                            <Icon :icon="!project.github ? 'mdi:eye-off' : 'mdi:eye'" width="20" />
                        </span>
                    </div>                
                </div>
            </div>
        </div>
        
    </div>
    <Modal v-model:visible="isVisible" :title="'Project '+project.title" :cancelButton="{text: ''}">
        <div>your content...</div>
    </Modal>

    <GDialog v-model="dialogState" max-width="500">
    <div class="wrapper">
      <div class="content">
        <div class="title">Content</div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Porro, ratione!
        </p>
      </div>

      <div class="actions">
        <button
          class="btn btn--outline-gray"
          @click="dialogState = false"
        >
          Submit
        </button>
      </div>
    </div>
  </GDialog>
  <button @click="dialogState = true">
    Open Dialog
  </button>


  <button @click="runModal">Open modal</button>
    
</template>

<style scoped>

.wrapper {
  color: #000;
}

.content {
  padding: 20px;
}

.title {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
}

.actions {
  display: flex;
  justify-content: flex-end;
  padding: 10px 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
}

</style>