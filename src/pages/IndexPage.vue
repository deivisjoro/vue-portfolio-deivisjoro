<script setup>
    import MainLayout from '../layouts/MainLayout.vue';

    import HomeSection from '../components/sections/HomeSection.vue';
    import AboutSection from '../components/sections/AboutSection.vue';
    import EducationSection from '../components/sections/EducationSection.vue';
    import SkillsSection from '../components/sections/SkillsSection.vue';
    import ExperienceSection from '../components/sections/ExperienceSection.vue';
    import ProjectsSection from '../components/sections/ProjectsSection.vue';
    import ContactSection from '../components/sections/ContactSection.vue';
    
    import { onMounted } from 'vue';
    import { useRouter } from 'vue-router';

    import { useUserStore } from '../stores/user';

    const router = useRouter();
    const userStore = useUserStore();
    userStore.isLoading = true;

    onMounted(()=>{
        setTimeout(()=>{
            userStore.isLoading = false;
        }, 250)

        const links = document.querySelectorAll('#MainMenu a');
        const sections = document.querySelectorAll('.section');
        // console.log(sections);
        const observer = new IntersectionObserver((entries, observer)=>{
            entries.forEach(section=>{
                if(section.isIntersecting){
                    const id = '#'+section.target.id;
                    //router.push(id);
                    links.forEach(link=>{
                        link.classList.remove('active');
                        if(link.attributes.href.nodeValue === id){
                            link.classList.add('active');                        
                        }
                    })

                    // setTimeout(()=>{
                    //     userStore.isLoading = false;
                    // }, 50)
                }
            })
        }, {
            threshold: .8,
            rootMargin: '0px',
        });

        sections.forEach(section => {
            observer.observe(section);
        })
    })
</script>

<template>
    <MainLayout>
        <div id="HomePage" class="max-w-[1200px] mx-auto py-3 bg-white rounded-lg">
            
            <div class="">
                <HomeSection />

                <AboutSection />

                <EducationSection />

                <SkillsSection />

                <ExperienceSection />

                <ProjectsSection />

                <ContactSection /> 
            </div>           

        </div>
    </MainLayout>
</template>