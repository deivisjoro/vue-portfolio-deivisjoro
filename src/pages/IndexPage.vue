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

    import { useUserStore } from '../stores/user';

    const userStore = useUserStore();
    userStore.isLoading = true;

    onMounted(()=>{
        setTimeout(()=>{
            userStore.isLoading = false;
        }, 250)
    })
</script>

<template>
    <MainLayout>
        <div id="HomePage" class="max-w-[1200px] mx-auto px-3 py-3 bg-white rounded-lg">
            
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