<template>
    <div class="w-full h-screen grid place-items-center space-x-1">
        <div class="w-96 space-y-2">
            <div class="text-center">
            </div>
            <div class="w-full base-content pb-4">
            <div class="flex items-center  pb-4">
                <img :src="logo" alt="Logo" class="w-12 h-12">
                <div class="">
                    <p class="font-bold text-lg">Sign in</p>
                    <p class="text-xs">to Continue</p>
                </div>
            </div>
            <div class="space-y-2">
                <div class="">
                    <label for="username">Username</label>
                    <input id="username" type="text" class="input w-full font-bold" placeholder="Input Username">
                </div>
                <div class="">
                    <label for="password">Password</label>
                    <div class="relative">
                        <input id="password" :type="canSee ? 'text' : 'password'" class="input w-full font-bold" placeholder="Input Password">
                        <button @click="handleCanSeePassword" class="absolute top-0 right-2 h-full">
                            <svg v-if="canSee" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg>
                            <svg v-if="!canSee" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="">
                    <button class="button bg-green-700 mt-2 w-full">Login</button>
                </div>
            </div>
            </div>
            <div class="w-full">
                <p class="text-xs font-extralight text-center italic">This App is maintain by TR Software Service</p>
            </div>
        </div>
    </div>
</template>
<script>
import Logo from '../../assets/logo.png'
    export default{
        data(){
            return{
                logo:Logo,
                canSee:false
            }
        },
        methods:{
            handleCanSeePassword(){
                this.canSee = !this.canSee
            }
        }
    }
</script>