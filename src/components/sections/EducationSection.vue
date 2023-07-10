<script setup>
    import { computed, ref } from "vue";
    import ItemMenuEducation from "../ItemMenuEducation.vue";

    const itemActive = ref(1);
    const viewAll = ref(false);

    const fnOpenView = (item) => {
        itemActive.value = item;
        viewAll.value = false;
        if(item===7){
            viewAll.value = true;
        }
    }

    const courses = ref([
        {
            id: 1,
            title: 'Strengthening Technology in Education',
            time: '2008 - 40 hours',
            company: 'SENA'
        },
        {
            id: 2,
            title: 'Programming Web pages with HTML and JavaScript',
            time: '2008 - 40 hours',
            company: 'SENA'
        },
        {
            id: 3,
            title: 'Variables and Control structures in Object Oriented Programming: Java',
            time: '2008 - 40 hours',
            company: 'SENA'
        },
        {
            id: 4,
            title: 'Development of applications with Graphical Interface, Handling of Events, Classes and Objects: Java',
            time: '2008 - 40 hours',
            company: 'SENA'
        },
        {
            id: 5,
            title: 'Digital Citizen',
            time: '2013 - 40 hours',
            company: 'MinTIC'
        },
        {
            id: 6,
            title: 'Web and Mobile Development with HTML5, CSS3 and jQuery',
            time: '2013',
            company: 'MinTIC'
        },
        {
            id: 7,
            title: 'Fundamentals of assembly and maintenance of computers for technical support processes',
            time: '2013 - 60 hours',
            company: 'SENA'
        },
        {
            id: 8,
            title: 'Techno-pedagogical training in virtual learning environments Blackboard 9.1',
            time: '2013 - 60 hours',
            company: 'SENA'
        },
        {
            id: 9,
            title: 'English dot works level 1',
            time: '2013 - 60 hours',
            company: 'SENA'
        },
        {
            id: 10,
            title: 'Digital Learner',
            time: '2013 - 60 hours',
            company: 'SENA'
        },
        {
            id: 11,
            title: 'Training Seminar for IT School Counselors',
            time: '2017 - 40 hours',
            company: 'MinTIC'
        },
        {
            id: 12,
            title: 'Programming Fundamentals for Teachers',
            time: '2020 - 40 hours',
            company: 'Free University of Colombia'
        },
        {
            id: 13,
            title: 'TIC pedagogical strategies for virtual teaching',
            time: '2020 - 40 hours',
            company: 'University of Cordoba'
        },
        {
            id: 14,
            title: 'Computational Thinking from the Coding for Kids Initiative',
            time: '2021 - 30 hours',
            company: 'MinTIC - British Council'
        },
        {
            id: 15,
            title: 'Programming with Java Standard',
            time: '2023 - 40 hours',
            company: 'Movistar Telephone Foundation'
        },
        {
            id: 16,
            title: 'Programming with JavaScript',
            time: '2023 - 40 hours',
            company: 'Movistar Telephone Foundation'
        },
    ]);

    const perPage = ref(5);
    const pages = ref(Math.ceil(courses.value.length / perPage.value));
    const page = ref(0);

    const coursesByShow = computed(()=>{
        const start = page.value * perPage.value;
        const end = (page.value * perPage.value) + perPage.value;
        const list = courses.value.slice(start, end);
        return list;
    })

    const startIndex = computed(()=>{
        return (page.value * perPage.value)+1;
    })

    const endIndex = computed(()=>{
        let result = (page.value * perPage.value) + perPage.value;
        if(result>courses.value.length)
            result = courses.value.length;
        return result;
    })

    const fnChangePage = (p)=>{
        page.value = (p-1);
    }
  
</script>

<template>
  <section
    class="min-h-[calc(100vh-110px)] pt-[120px] px-2 section"
    id="EducationSection"
  >
    <div class="w-full flex items-center">
      <div class="w-[20%] h-[1px] bg-red-600">&nbsp;</div>
      <h2 class="mx-2 font-semibold text-2xl text-indigo-950">EDUCATION</h2>
      <div class="w-full h-[1px] bg-red-600">&nbsp;</div>
    </div>
    <div class="flex mt-10 md:flex-row flex-col md:mb-10 mb-0">
      <div>
        <nav class="nav-education">
          <ul
            class="text-center font-semibold text-xs md:text-sm text-stone-500 md:border-r md:border-b-0 border-b border-solid border-slate-400 flex md:flex-col flex-row w-100 flex-wrap"
          >
            <ItemMenuEducation :itemActive="itemActive" text="High Schools" item="1" @openView="fnOpenView($event)" />

            <ItemMenuEducation :itemActive="itemActive" text="Technical" item="2" @openView="fnOpenView($event)" />

            <ItemMenuEducation :itemActive="itemActive" text="University Degrees" item="3" @openView="fnOpenView($event)" />

            <ItemMenuEducation :itemActive="itemActive" text="University Postgraduates" item="4" @openView="fnOpenView($event)" />

            <ItemMenuEducation :itemActive="itemActive" text="Further Training" item="5" @openView="fnOpenView($event)" />

            <ItemMenuEducation :itemActive="itemActive" text="Short Courses" item="6" @openView="fnOpenView($event)" />

            <ItemMenuEducation :itemActive="itemActive" text="View All" item="7" @openView="fnOpenView($event)" />
          </ul>
        </nav>
      </div>
      <div class="w-full">
        <div class="md:ml-20 ml-5" v-if="itemActive===1 || viewAll">
          <h3 class="text-red-500 underline py-4 text-xl font-semibold">High Schools</h3>
          <ol class="relative border-l border-gray-200 dark:border-gray-700">
            <li class="mb-10 ml-6">
              <span
                class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
              >
                <svg
                  class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                  />
                </svg>
              </span>
              <h4
                class="flex items-center mb-1 text-lg font-semibold text-indigo-950"
              >
                Academic Bachelor
              </h4>
              <time
                class="block mb-2 text-sm font-normal leading-none text-gray-500"
                >1995 - 2001</time
              >
              <p class="mb-4 text-base font-normal text-gray-400">
                Institucion Educativa Marceliano Polo
              </p>
            </li>
          </ol>
        </div>

        <div class="md:ml-20 ml-5" v-if="itemActive===2 || viewAll">
          <h3 class="text-red-500 underline py-4 text-xl font-semibold">Technical</h3>
          <ol class="relative border-l border-gray-200 dark:border-gray-700">
            <li class="mb-10 ml-6">
              <span
                class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
              >
                <svg
                  class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                  />
                </svg>
              </span>
              <h4
                class="flex items-center mb-1 text-lg font-semibold text-indigo-950"
              >
                Technologist in Analysis and Development of Information Systems
              </h4>
              <time
                class="block mb-2 text-sm font-normal leading-none text-gray-500"
                >2013 - 2020</time
              >
              <p class="mb-4 text-base font-normal text-gray-400">
                SENA
              </p>
            </li>
          </ol>
        </div>

        <div class="md:ml-20 ml-5" v-if="itemActive===3 || viewAll">
          <h3 class="text-red-500 underline py-4 text-xl font-semibold">University Degrees</h3>
          <ol class="relative border-l border-gray-200 dark:border-gray-700">
            <li class="mb-10 ml-6">
              <span
                class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
              >
                <svg
                  class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                  />
                </svg>
              </span>
              <h4
                class="flex items-center mb-1 text-lg font-semibold text-indigo-950"
              >
                Degree in Computer Science and Audiovisual Media
              </h4>
              <time
                class="block mb-2 text-sm font-normal leading-none text-gray-500"
                >2002 - 2008</time
              >
              <p class="mb-4 text-base font-normal text-gray-400">
                University of Cordoba
              </p>
            </li>
            <li class="mb-10 ml-6">
              <span
                class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
              >
                <svg
                  class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                  />
                </svg>
              </span>
              <h4
                class="flex items-center mb-1 text-lg font-semibold text-indigo-950"
              >
                Systems Engineer
              </h4>
              <time
                class="block mb-2 text-sm font-normal leading-none text-gray-500"
                >2013 - 2017</time
              >
              <p class="mb-4 text-base font-normal text-gray-400">
                University of Cartagena 
              </p>
            </li>
          </ol>
        </div>

        <div class="md:ml-20 ml-5" v-if="itemActive===4 || viewAll">
          <h3 class="text-red-500 underline py-4 text-xl font-semibold">University Postgraduates</h3>
          <ol class="relative border-l border-gray-200 dark:border-gray-700">
            <li class="mb-10 ml-6">
              <span
                class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
              >
                <svg
                  class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                  />
                </svg>
              </span>
              <h4
                class="flex items-center mb-1 text-lg font-semibold text-indigo-950"
              >
                Specialist in IT and Telematics
              </h4>
              <time
                class="block mb-2 text-sm font-normal leading-none text-gray-500"
                >2009 - 2010</time
              >
              <p class="mb-4 text-base font-normal text-gray-400">
                University Foundation of the Andean Area
              </p>
            </li>
            <li class="mb-10 ml-6">
              <span
                class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
              >
                <svg
                  class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                  />
                </svg>
              </span>
              <h4
                class="flex items-center mb-1 text-lg font-semibold text-indigo-950"
              >
                Specialist in Administration of Educational Informatics
              </h4>
              <time
                class="block mb-2 text-sm font-normal leading-none text-gray-500"
                >2012 - 2013</time
              >
              <p class="mb-4 text-base font-normal text-gray-400">
                University of Santander
              </p>
            </li>
            <li class="mb-10 ml-6">
              <span
                class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
              >
                <svg
                  class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                  />
                </svg>
              </span>
              <h4
                class="flex items-center mb-1 text-lg font-semibold text-indigo-950"
              >
                Master in Educational Technology Management
              </h4>
              <time
                class="block mb-2 text-sm font-normal leading-none text-gray-500"
                >2014 - 2015</time
              >
              <p class="mb-4 text-base font-normal text-gray-400">
                University of Santander
              </p>
            </li>
          </ol>
        </div>

        <div class="md:ml-20 ml-5" v-if="itemActive===5 || viewAll">
          <h3 class="text-red-500 underline py-4 text-xl font-semibold">Further training</h3>
          <ol class="relative border-l border-gray-200 dark:border-gray-700">
            <li class="mb-10 ml-6">
              <span
                class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
              >
                <svg
                  class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                  />
                </svg>
              </span>
              <h4
                class="flex items-center mb-1 text-lg font-semibold text-indigo-950"
              >
              San Martin University Foundation
              </h4>
              <time
                class="block mb-2 text-sm font-normal leading-none text-gray-500"
                >2013 - 140 hours</time
              >
              <p class="mb-4 text-base font-normal text-gray-400">
                Diploma in university teaching and pedagogy by competences
              </p>
            </li>
            <li class="mb-10 ml-6">
              <span
                class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
              >
                <svg
                  class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                  />
                </svg>
              </span>
              <h4
                class="flex items-center mb-1 text-lg font-semibold text-indigo-950"
              >
                Diploma for teachers in the pedagogical use of TIC with an impact on student learning
              </h4>
              <time
                class="block mb-2 text-sm font-normal leading-none text-gray-500"
                >2016 - 120 hours</time
              >
              <p class="mb-4 text-base font-normal text-gray-400">
                Technological University of Pereira
              </p>
            </li>
            <li class="mb-10 ml-6">
              <span
                class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
              >
                <svg
                  class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                  />
                </svg>
              </span>
              <h4
                class="flex items-center mb-1 text-lg font-semibold text-indigo-950"
              >
               Diploma for teachers of technology and computer science, in the pedagogical use of TIC, with an impact on student learning - TECNOTIC
              </h4>
              <time
                class="block mb-2 text-sm font-normal leading-none text-gray-500"
                >2016 - 120 hours</time
              >
              <p class="mb-4 text-base font-normal text-gray-400">
                Consortium T&T - Catedra
              </p>
            </li>
            <li class="mb-10 ml-6">
              <span
                class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
              >
                <svg
                  class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                  />
                </svg>
              </span>
              <h4
                class="flex items-center mb-1 text-lg font-semibold text-indigo-950"
              >
                Diploma in planning courses based on learning results for mediated contexts with information and communication technologies
              </h4>
              <time
                class="block mb-2 text-sm font-normal leading-none text-gray-500"
                >2020 - 120 hours</time
              >
              <p class="mb-4 text-base font-normal text-gray-400">
                University of Cordoba
              </p>
            </li>
            <li class="mb-10 ml-6">
              <span
                class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
              >
                <svg
                  class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                  />
                </svg>
              </span>
              <h4
                class="flex items-center mb-1 text-lg font-semibold text-indigo-950"
              >
                Diploma in Elearning: appropriation and use of information and communication technologies in education
              </h4>
              <time
                class="block mb-2 text-sm font-normal leading-none text-gray-500"
                >2015 - 120 hours</time
              >
              <p class="mb-4 text-base font-normal text-gray-400">
                Antonio de Arevalo Technology Foundation
              </p>
            </li>
          </ol>
        </div>

        <div class="md:ml-20 ml-5" v-if="itemActive===6 || viewAll">
            <div class="flex items-center justify-between">

                <h3 class="text-red-500 underline py-4 text-xl font-semibold">
                    Short Courses
                </h3>

                <div class="mt-2 text-center flex items-center justify-between">
                    <div class="text-xs">
                        Showing {{ startIndex }} to {{ endIndex }} of {{ courses.length }}
                    </div>
                    <div class="flex justify-end">
                        <a href="#" @click.prevent="fnChangePage(i)" v-for="i in pages" :key="'page'+i" class="text-sm mx-1 px-1 border-solid border-2 border-indigo-950 inline-block hover:bg-amber-500 hover:text-white" :class="{'bg-indigo-950 text-white': ((page+1)===i)}">
                            {{ i }}
                        </a>
                    </div>
                </div>
            </div>
            <ol class="relative border-l border-gray-200 dark:border-gray-700">
                <li v-for="course in coursesByShow" :key="course.id" class="mb-10 ml-6">
                    <span
                    class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
                >
                    <svg
                    class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    >
                    <path
                        d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                    />
                    </svg>
                </span>
                <h4
                    class="flex items-center mb-1 text-lg font-semibold text-indigo-950"
                >
                    [{{ course.id }}] - {{ course.title }}
                </h4>
                <time
                    class="block mb-2 text-sm font-normal leading-none text-gray-500"
                    >{{ course.time }}</time
                >
                <p class="mb-4 text-base font-normal text-gray-400">
                    {{ course.company }}
                </p>
                </li>
            </ol>
        </div>
      </div>
    </div>
  </section>
</template>
