<script setup>
    import { ref } from "vue";
    import ItemMenu from "../ItemMenu.vue";
    import SectionTimeline from "../SectionTimeline.vue";

    const itemActive = ref(1);
    const viewAll = ref(false);

    const items = [
        {
            id: 1,
            name: 'Development',
            elements: [
                {rol: 'Developer', time: '2022-2023', company: 'Freelancer', description: ''},
                {rol: 'Frontend Developer', time: '2021', company: 'Conocimiento Corporativo', description: ''},
                {rol: 'Developer Java', time: '2020', company: 'Camu San Pelayo', description: ''},
                {rol: 'Web developer', time: '2005 - 2015', company: 'Group SOCRATES', description: ''},
                {rol: 'Web developer', time: '2011 - 2013', company: 'DataSistemas', description: ''},                
                {rol: 'Web developer', time: '2011', company: 'LFM S.A.S', description: ''}, 
                {rol: 'Web developer', time: '2009 - 2010', company: 'ATR Software', description: ''},  
                {rol: 'Web developer', time: '2009 - 2010', company: 'Com Center', description: ''},                             
            ]
        },
        {
            id: 2,
            name: 'IT Professional',
            elements: [
                {rol: 'Web developer / Webmaster / Trainer', time: '2007 - 2010', company: 'University of Cordoba - ODESAD', description: ''},
                {rol: 'Field manager', time: '2015', company: 'University of Cordoba - Scheme computers to educate', description: ''},
            ]
        },
        {
            id: 3,
            name: 'Research',
            elements: [
                {rol: 'Assistant researcher', time: '2004 - 2015', company: 'Group SOCRATES', description: ''},
                {rol: 'Young researcher', time: '2011 - 2012', company: 'COLCIENCIAS', description: ''},
                {rol: 'Co researcher', time: '2013 - 2014', company: 'University of Cordoba', description: ''}
            ]
        },
        {
            id: 4,
            name: 'Training',
            elements: [
                {rol: 'Trainer TI - Digital Monteria', time: '2010', company: 'University of Cordoba', description: ''},
                {rol: 'Trainer TI - Digital Cordoba', time: '2010', company: 'University of Cordoba', description: ''},
                {rol: 'Trainer TI - Digital Citizen', time: '2012', company: 'University of Cordoba', description: ''},
                {rol: 'Trainer TI - Teachers Puerto Libertador', time: '2012', company: 'Foundation San Isidro - Cerromatoso', description: ''},
                {rol: 'Trainer TI - Sailing with the TI', time: '2013', company: 'University of Cordoba', description: ''}
            ]
        },
        {
            id: 5,
            name: 'Teaching',
            elements: [
                {rol: 'Teacher', time: '2021 - 2022', company: 'University Autonomous of Bucaramanga', description: ''},
                {rol: 'Teacher', time: '2015 - 2022', company: 'Secretary of Education of Monteria', description: ''},
                {rol: 'Teacher', time: '2011 - 2021', company: 'University of Cordoba', description: ''},                
                {rol: 'Teacher', time: '2021', company: 'University of Caldas', description: ''},                
                {rol: 'Teacher', time: '2009 - 2013', company: 'University San Martin', description: ''},
            ]
        },
    ]

    
    const fnOpenView = (item) => {
        itemActive.value = item;
        viewAll.value = false;
        if(item===6){
            viewAll.value = true;
        }
    }

    
  
</script>

<template>
    <section class="min-h-[calc(100vh-110px)] pt-[120px] px-2 ExperienceSection">
        
        <div class="w-full flex items-center">
            <div class="w-[20%] h-[1px] bg-red-600">&nbsp;</div>
            <h2 class="mx-2 font-semibold text-2xl text-indigo-950 section" id="ExperienceSection">EXPERIENCE</h2>
            <div class="h-[1px] bg-red-600 flex-1">&nbsp;</div>
        </div>

        <div class="flex mt-10 md:flex-row flex-col md:mb-10 mb-0">
            <div>
                <nav class="nav-experience">
                <ul
                    class="text-center font-semibold text-xs md:text-sm text-stone-500 md:border-r md:border-b-0 border-b border-solid border-slate-400 flex md:flex-col flex-row w-100 flex-wrap"
                >
                    <ItemMenu :itemActive="itemActive" text="Development" item="1" @openView="fnOpenView($event)" />

                    <ItemMenu :itemActive="itemActive" text="IT Professional" item="2" @openView="fnOpenView($event)" />

                    <ItemMenu :itemActive="itemActive" text="Research" item="3" @openView="fnOpenView($event)" />

                    <ItemMenu :itemActive="itemActive" text="Training" item="4" @openView="fnOpenView($event)" />

                    <ItemMenu :itemActive="itemActive" text="Teaching" item="5" @openView="fnOpenView($event)" />

                    <ItemMenu :itemActive="itemActive" text="View All" item="6" @openView="fnOpenView($event)" />
                </ul>
                </nav>
            </div>
            <div class="w-full">
                <template v-for="item in items" :key="'experience'+item">
                    <SectionTimeline v-if="itemActive==item.id || viewAll" :description="item.name" :items="item.elements"  /> 
                </template>
                
            </div>
        </div>

    </section>
</template>