<script setup>

    import { onMounted } from 'vue';
    import CardSkill from '../CardSkill.vue';

    let skills;
    let cont;

    onMounted(()=>{
        skills = document.getElementsByClassName('skill');
        cont = 0;
    })


	const right_mover = ()=>{
        if(cont==(skills.length-1)) cont = 0;
        else cont++;

        for(const skill of skills){
            skill.style.left = ((-1)*((cont*skill.offsetWidth)+(cont*15))) + 'px';
		}
	}

	const left_mover = ()=>{
        if(cont==0) cont = skills.length-1;
        else cont--;      
        for(const skill of skills){
            skill.style.left = ((-1)*((cont*skill.offsetWidth)-(cont*15))) + 'px';
		}
	}


</script>

<template>
    <section class="min-h-[calc(100vh-110px)] pt-[120px] px-2 SkillsSection">
        
        <div class="w-full flex items-center">
            <div class="w-[20%] h-[1px] bg-red-600">&nbsp;</div>
            <h2 class="mx-2 font-semibold text-2xl text-indigo-950 section" id="SkillsSection">MY SKYLLS & TOOLS</h2>
            <div class="h-[1px] bg-red-600 flex-1">&nbsp;</div>
        </div>
        <div class="px-3">
            <header class="flex justify-between my-4">
                <h3 class="font-semibold text-indigo-950">Main tools & technologies</h3>
                <p class="text-semibold text-lg flex">
                    <span @click="left_mover" class="px-2 border-solid border-2 border-indigo-950 mr-1 text-sm cursor-pointer rounded-md hover:text-white hover:bg-indigo-950 flex items-center justify-center">&lt;</span>
                    <span @click="right_mover" class="px-2 border-solid border-2 border-indigo-950 text-sm cursor-pointer rounded-md hover:text-white hover:bg-indigo-950 flex items-center justify-center">&gt;</span>
                </p>
		    </header>
            <div class="px-4 py-4 bg-slate-100 rounded-xl">
                <section class="flex items-center gap-x-4 slider overflow-x-hidden">
                    <CardSkill class="skill" title="HTML" icon="mdi:language-html5" iconColor="#ff4c1e" experience="15" category="Frontend" level="90" :items="['HTML5', 'Semantic']" />

                    <CardSkill class="skill" title="CSS" icon="ion:logo-css3" iconColor="#006bc0" experience="15" category="Frontend" level="80" :items="['Media Query', 'Flexbox', 'Normalize', 'Bootstrap', 'Font Awesome', 'Animate', 'TailwindCSS', 'SASS', 'Responsible Design', 'Mobile First']" :iconsItems="[{name: 'mdi:sass', color:'#c65f91'}, {name: 'mdi:tailwind', color:'#07b0ce'}, {name: 'ri:bootstrap-line', color:'#7b11f8'}]" />

                    <CardSkill class="skill" title="Javascript" icon="tabler:brand-javascript" iconColor="#ffdf00" experience="15" category="Frontend" level="85" :items="['ES6+', 'Fetch API', 'JQuery', 'JQuery UI', 'SPA', 'DOM', 'API Rest', 'JSON', 'JWT']" :iconsItems="[ {name: 'mdi:code-json', color:'#9777a8'}, {name: 'mdi:jquery', color:'#0863a2'}]" />

                    <CardSkill class="skill" title="Design UI" icon="mdi:image-edit-outline" experience="10" category="Design" level="50" :items="['Firework', 'Figma']" :iconsItems="[ {name: 'skill-icons:figma-light'}]" />	

                    <CardSkill class="skill" title="Frameworks JS" icon="teenyicons:javascript-outline" experience="3" category="Frontend" level="65" :items="['Angular', 'React', 'Vue', 'Vue Router', 'Vuex', 'Pinia']" :iconsItems="[ {name: 'devicon:angularjs'}, {name: 'logos:react'}, {name: 'devicon:vuejs'}]" />	

                    <CardSkill class="skill" title="NodeJS" icon="devicon:nodejs" experience="4" category="Backend" level="70" :items="['API REST', 'Express', 'Mongoose', 'EJS', 'Handlebars']" :iconsItems="[ {name: 'devicon:express'}]" />                    

                    <CardSkill class="skill" title="PHP" icon="devicon:php" experience="10" category="Backend" level="80" :items="['PHP', 'PHP OO', 'CakePHP', 'Laravel', 'Smarty']" :iconsItems="[ {name: 'devicon:cakephp'}, {name: 'devicon:laravel'}]" />

                    <CardSkill class="skill" title="TypeScript" icon="devicon:typescript" experience="2" category="Backend/Frontend" level="70" /> 

                    <CardSkill class="skill" title="Java" icon="devicon:java" experience="10" category="Backend/Desktop" level="70" :items="['JSE', 'JEE', 'JSP', 'Servlets', 'Swing', 'JDBC', 'Spring Boot']" :iconsItems="[ {name: 'simple-icons:springboot', color: '#67aa3c'}]" />   
                    
                    <CardSkill class="skill" title="Python" icon="devicon:python" experience="2" category="Backend" level="40" />

                    <CardSkill class="skill" title="C++" icon="devicon:cplusplus" experience="1" category="Desktop" level="40" />   	

                    <CardSkill class="skill" title="BD" icon="bi:database" experience="10" category="Database" level="80" :items="['SQL', 'MySQL', 'PostgreSQL', 'MongoDB']" :iconsItems="[ {name: 'skill-icons:mysql-light'}, {name: 'devicon:mongodb'}]" />

                    <CardSkill class="skill" title="Tools" icon="vscode-icons:folder-type-tools" experience="4" category="Frontend/Backend" level="80" :items="['VS Code', 'Vite', 'WebPack', 'DevTools', 'Eclipse', 'Netbeans', 'Postman', 'Git', 'GitHub', 'Supabase', 'Excel']" :iconsItems="[ {name: 'skill-icons:vscode-light'}, {name: 'vscode-icons:file-type-vite'}, {name: 'skill-icons:webpack-light'}]" />

                    <CardSkill class="skill" title="Testing" icon="vscode-icons:folder-type-test" experience="1" category="Testing" level="60" :items="['Unit testing', 'Vitest', 'JUnit', 'Screen Play', 'Serenety', 'Cucumber', 'Gherkin']" />

                    <CardSkill class="skill" title="Sys Admin" icon="clarity:rack-server-solid-badged" experience="2" category="Sys Admin" level="60" :items="['Linux', 'Ubuntu Server', 'Apache', 'Tomcat', 'SSH', 'DNS']" />	

                    <CardSkill class="skill" title="Android Studio" icon="skill-icons:androidstudio-light" experience="1" category="Mobile" level="50" />	

                    <CardSkill class="skill" title="Arduino" icon="devicon:arduino" experience="1" category="Mobile" level="50" />

                    <CardSkill class="skill" title="English" icon="game-icons:usa-flag" experience="1" category="Language" level="50" />

                    <CardSkill class="skill" title="Soft Skills" icon="icon-park:personal-privacy" experience="10" category="Soft Skills" level="70" :items="['Communication', 'Organizational', 'Teamwork', 'Adaptability', 'Creativity', 'Decision-Making']" />	
                
                </section>
            </div>

        </div>

    </section>
</template>

<style scoped>
    /* .slider{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    } */

    slider::-webkit-scrollbar{
        /* display: none; */
        background-color: red;
    }
		
		
</style>