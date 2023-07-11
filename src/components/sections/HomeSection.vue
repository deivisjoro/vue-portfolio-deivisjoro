<script setup>
    import { ref } from 'vue';
    import { loadFull } from 'tsparticles';

    const particlesInit = async engine => {
        await loadFull(engine);
    };

    const particlesLoaded = async container => {
    };

    
    const array = ref(["Javascript", "Java", "PHP", "SQL", "Linux", "Node", "Angular", "Vue", "React", "Git", "GitHub"]);
</script>

<template>
    <section class="flex min-h-[calc(100vh-150px)] py-2 px-2 section" id="HomeSection">
        <div class="flex items-center md:flex-row flex-col justify-between w-full z-[2]">
            <div class="md:w-full">
                <div>
                    <div class="mb-2 text-indigo-950 text-2xl font-medium leading-5 flex justify-center md:justify-start">
                        Hi <span class="wave">👋</span>, i'm
                    </div>

                    <div class="my-4 opacity-100 transform-none flex justify-center md:justify-start">
                        <div class="w-[300px] h-[68px] overflow-hidden relative flex justify-center md:justify-start">
                            
                            <img src="/fullname.svg" alt="image fullname" class="absolute z-[1] top-0 left-0 right-0">
                        
                            <video autoplay muted loop="" preload="auto" class="absolute z-0 top-0 left-[1px] right-[1px] w-[100%] h-[100%]"><source src="/gradient.mp4">
                            </video>
                        </div>
                    </div>
                    
                    <!-- inicio-->
                    <!-- <div class="relative w-[300px] h-[80px]">
                        <video autoplay muted loop class="clipped-video w-[100%] h-auto">
                            <source src="/gradient.mp4" type="video/mp4">
                        </video>
                        <svg class="w-[100%] h-[100%] svg">
                            <clipPath id="container-overlay" class="w-[100%] h-[100%]">
                                <text id="text-overlay" x="0" y="0" dy="1.58em" fill="#ff0000">Deivis Rodriguez</text>
                            </clipPath>
                        </svg>

                    </div> -->
                    <!-- fin -->
                    <p class="text-3xl mb-1 text-amber-500 font-medium role flex justify-center md:justify-start">
                        I Develop Software
                    </p>
                    <div class="description flex justify-center md:justify-start flex-col text-indigo-950">
                        <p class="text-lg font-light leading-6 flex justify-center md:justify-start md:text-justify text-center">I'am a Full stack web developer, System admin, Developer Apps Desktop, freelancer with experience for over 15 years. My expertise is creating applications with the javascript ecosystem and many more</p>
                        <p class="text-lg font-light leading-6 flex justify-center md:justify-start md:text-justify text-center">
                            I have also worked in teaching and research
                        </p>
                        <p class="text-lg font-light leading-6 mb-3 flex justify-center md:justify-start mt-2">Based in Cerete, Colombia</p>
                    </div>
                    <div class="mt-4 btn-cv flex justify-center md:justify-start">
                        <button class=" border-solid border-indigo-600 border text-indigo-950 bg-indigo-300 rounded-lg p-2 hover:bg-indigo-950 hover:text-white">
                            Download CV
                        </button>
                    </div>
                </div>
            </div>
            <div class="md:w-[300px] w-[50%] md:mt-0 mt-8 mx-1">
                <div class="home-img">
                    <div class="shape-circle">
                        <div class="image">
                            <img src="/me.png" alt="image me" />
                        </div>
                    </div>
                </div>
                <div class="mt-2" id="typewriter">
                    <div class="flex items-center justify-center text-indigo-950 font-medium text-lg">Experience with</div> 
                    <div class="flex items-center justify-center text-xl text-amber-500 font-bold">
                        <VueWriter :array="array" />
                    </div>
                </div>
            </div>
        </div>     
        <Particles
            id="tsparticles"
            :particlesInit="particlesInit"
            :particlesLoaded="particlesLoaded"
            :options="{
                    style: {
                        position: 'absolute',
                        margin: '140px 0 0 0',
                        height: 'calc(100vh - 150px)'
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: 'push'
                            },
                            onHover: {
                                enable: true,
                                mode: 'repulse'
                            },
                            resize: true
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40
                            },
                            push: {
                                quantity: 4
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: '#CCCCCC'
                        },
                        links: {
                            color: '#DDDDDD',
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1
                        },
                        collisions: {
                            enable: true
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outMode: 'bounce',
                            random: false,
                            speed: 2,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800
                            },
                            value: 80
                        },
                        opacity: {
                            value: 0.5
                        },
                        shape: {
                            type: 'circle'
                        },
                        size: {
                            random: true,
                            value: 5
                        }
                    },
                    detectRetina: true
                }"
        />
    </section>
</template>

<style scoped>
    .wave {
        animation-name: wave-animation;
        animation-duration: 2.5s;  
        animation-iteration-count: infinite;  
        transform-origin: 70% 70%;      
        display: inline-block;
    }

    @keyframes wave-animation {
        0% { transform: rotate( 0.0deg) }
        10% { transform: rotate(14.0deg) } 
        20% { transform: rotate(-8.0deg) }
        30% { transform: rotate(14.0deg) }
        40% { transform: rotate(-4.0deg) }
        50% { transform: rotate(10.0deg) }
        60% { transform: rotate( 0.0deg) }  
        100% { transform: rotate( 0.0deg) }
    }

    /* .clipped-video {
        -webkit-clip-path: url(#container-overlay);
        clip-path: url(#container-overlay);
    }

    .svg{
        display: block;
        position: absolute;
        top: 0;
    }

    text{
        font-weight: bold;
        font-size: 2rem;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    } */

    @keyframes slideRight {
        0% {
            opacity: 0;
            transform: translateX(-100px);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideLeft {
        0% {
            opacity: 0;
            transform: translateX(100px);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideTop {
        0% {
            opacity: 0;
            transform: translateY(200px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes zoomIn {
        0% {
            opacity: 0;
            transform: scale(0);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }

    @keyframes floatImage {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-20px);
        }
        100% {
            transform: translateY(0);
        }
    }

    .role{
        opacity: 0;
        animation: slideRight 1s ease forwards;
    }

    .description{
        opacity: 0;
        animation: slideLeft 1.5s ease forwards;
    }

    .btn-cv{
        opacity: 0;
        animation: slideTop 0.5s ease forwards;
        animation-delay: 1s;
    }

    .home-img{
        width: 100%;        
        aspect-ratio: 1 / 1;
        opacity: 0;
        animation: zoomIn 1s ease forwards, floatImage 4s ease-in-out infinite;
        animation-delay: 1s, 2s;
    }

    #typewriter{
        opacity: 0;
        animation: zoomIn 1s ease forwards;
        animation-delay: 1.4s;
    }

    .shape-circle {
        width: 100%;
        aspect-ratio: 1 / 1;
        background-color: #1e1b4b;
        border-radius: 50%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .shape-circle::after{
        content: '';
        position: absolute;
        width: 90%;
        aspect-ratio: 1 / 1;
        background: white;
        border-radius: 50%;
    }

    .image{
        position: relative;
        width: 90%;
        aspect-ratio: 1 / 1;
        z-index: 1;
        border-radius: 50%;
        overflow: hidden;
    }

    .image img{
        width: 100%;
        object-fit: cover;
        position: absolute;
        left: 50%;
        top: 10px;
        transform: translateX(-50%);
    }

    span.typed-text {
        color: #d2b94b;
    }

    .blinking-cursor {
        font-size: 6rem;
        color: #2c3e50;
        -webkit-animation: 1s blink step-end infinite;
        -moz-animation: 1s blink step-end infinite;
        -ms-animation: 1s blink step-end infinite;
        -o-animation: 1s blink step-end infinite;
        animation: 1s blink step-end infinite;
    }

    @keyframes blink {
        from,
        to {
            color: transparent;
        }
        50% {
            color: #2c3e50;
        }
    }

    @-moz-keyframes blink {
        from,
        to {
            color: transparent;
        }
        50% {
            color: #2c3e50;
        }
    }

    @-webkit-keyframes blink {
        from,
        to {
            color: transparent;
        }
        50% {
            color: #2c3e50;
        }
    }

    @-ms-keyframes blink {
        from,
        to {
            color: transparent;
        }
        50% {
            color: #2c3e50;
        }
    }

    @-o-keyframes blink {
        from,
        to {
            color: transparent;
        }
        50% {
            color: #2c3e50;
        }
    }
</style>