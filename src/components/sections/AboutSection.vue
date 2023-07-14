<script setup>
    import { Icon } from '@iconify/vue';

</script>

<template>
    <section class="min-h-[calc(100vh-110px)] pt-[120px] px-2 AboutSection">
        <div class="w-full flex items-center">
            <div class="w-[20%] h-[1px] bg-red-600">
                &nbsp;
            </div>
            <h2 class="mx-2 font-semibold text-2xl text-indigo-950 section" id="AboutSection">ABOUT</h2>
            <div class="w-full h-[1px] bg-red-600">
                &nbsp;
            </div>
        </div>
        <div class="text-indigo-950 mx-2 px-2 mt-3 text-sm flex items-center w-full flex-col md:flex-row">
            <div class="text-white mr-4">
                <div class="flex md:flex-col flex-row">
                    <div class="relative w-[100px] h-[100px] bg-indigo-950 rounded-full text-center md:m-[20px] m-[10px] flex items-center justify-center">
                        <div>
                            <h5 class="absolute top-[-5px] left-0 w-[35px] h-[35px] bg-amber-400 rounded-full leading-[5px] font-medium  flex items-center justify-center">15+</h5>
                        </div>
                        <div>
                            <h3>Years of Experience</h3>
                        </div>
                    </div>
                    <div class="relative w-[100px] h-[100px] bg-indigo-950 rounded-full text-center md:m-[20px] m-[10px] flex items-center justify-center">
                        <div>
                            <h5 class="absolute top-[-5px] left-0 w-[35px] h-[35px] bg-amber-400 rounded-full font-medium flex items-center justify-center">50+</h5>
                        </div>
                        <div>
                            <h3>Projects Done</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="px-3">
                <div class="mt-2 flex items-center">                    
                    <p class="text-justify">
                        Hello, my name is Deivis Rodriguez Ortiz, I have a degree in Computer Science and Systems Engineer and I love programming, especially web application development projects.
                    </p>
                    <Icon icon="line-md:account-alert" class="ml-2 w-[50px] h-[50px]" /> 
                </div>
                <div class="mt-2 flex items-center">
                    
                    <p class="text-justify">
                        My interest in programming began in my university days, in 2002, where I started working with Turbo Pascal, applying my knowledge in the creation of console applications, with this I learned the logic to continue in the world of programming, then I went to Borland Delphi where I learned about desktop applications, working with SQL and relational databases, finally in mid-2003 I started working with Java
                    </p>
                    <Icon icon="basil:university-outline" class="ml-2 w-[100px] h-[100px]" /> 
                </div>
    
                <div class="mt-2 flex items-center">
                    
                    <p class="text-justify">
                        With the rise of technology, I began in the internet world to develop applications for this environment, offering solutions implementing applications in the educational sector, many of these applications developed with the LAMP stack, working heavily with PHP and MySQL and the basic technologies of web development.
                    </p>
                    <Icon icon="bi:person-workspace" class="ml-2 w-[50px] h-[50px]" /> 
                </div>
    
                <div class="mt-2 flex items-center">                    
                    <p class="text-justify">
                        Now, I mainly develop MERN, MEAN, and MEVN stack applications, also with relational databases such as MySQL and PostgreSQL, I have been using Java for more than 10 years and I have a medium knowledge of Python, I have developed several apps with PHP (native PHP , CakePHP, Laravel), I have worked managing Linux servers with Ubuntu Server, I work with Git, Github, unit tests, I have a basic level of English, I am open to new opportunities.
                    </p>
                    <Icon icon="mdi:projector-screen-outline" class="ml-2 w-[100px] h-[100px]" /> 
                </div>
            </div>
        </div>
    </section>
</template>