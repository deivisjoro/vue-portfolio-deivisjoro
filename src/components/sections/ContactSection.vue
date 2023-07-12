<script setup>

    import { ref } from 'vue';

    const fullname = ref(null);
    const email = ref(null);
    const message = ref(null);
    const error = ref(null);

    const fnSubmit = (e) => {

        error.value = null;
        const validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

        if(!fullname.value || fullname.value.trim().length==0){
            error.value = 'fullname';
        }
        else if(!email.value || email.value.trim().length==0){
            error.value = 'email';
        }
        else if(!validEmail.test(email.value)){
            error.value = 'invalidEmail';
        }
        else if(!message.value || message.value.trim().length==0){
            error.value = 'message';
        }

        if(error.value){
            return; 
        } 

        e.target.submit();
        
    }
</script>

<template>
    <section class="min-h-[calc(100vh-110px)] pt-[120px] px-2 ContactSection">
        <div class="w-full flex items-center">
            <div class="w-[20%] h-[1px] bg-red-600">
                &nbsp;
            </div>
            <h2 class="mx-2 font-semibold text-2xl text-indigo-950 section" id="ContactSection">CONTACT</h2>
            <div class="w-full h-[1px] bg-red-600">
                &nbsp;
            </div>
        </div>
        <div class="mt-4 flex items-center justify-center p-4">
            <form class="w-full max-w-lg" @submit.prevent="fnSubmit" action="mailto:deivisjoro@yahoo.com" method="post" enctype="text/plain">
                <input type="hidden" name="subject" value="Contact portfolio">
                <div class="flex flex-wrap -mx-3 mb-4">
                    <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="fullname">
                        Fullname
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="fullname" type="text" v-model="fullname" name="fullname">
                    <p class="text-red-500 text-xs italic" v-if="error && error==='fullname'">The fullname field is required</p>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-4">
                    <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email" name="email">
                        E-mail
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" v-model="email">
                    <p class="text-red-500 text-xs italic" v-if="error && error==='email'">The email field is required</p>
                    <p class="text-red-500 text-xs italic" v-if="error && error==='invalidEmail'">The email is not valid</p>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-4">
                    <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="message">
                        Message
                    </label>
                    <textarea class="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-36 resize-none" id="message" name="message" v-model="message"></textarea>
                    <p class="text-red-500 text-xs italic" v-if="error && error==='message'">The message field is required</p>
                    </div>
                </div>
                <div class="md:flex md:items-center">
                    <div class="md:w-1/3">
                        <button class="shadow bg-indigo-800 hover:bg-indigo-950 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                            Send
                        </button>
                    </div>
                    <div class="md:w-2/3"></div>
                </div>
            </form>
        </div>
    </section>
</template>