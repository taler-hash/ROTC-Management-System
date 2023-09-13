<template>
    <div class="w-full h-screen grid place-items-center space-x-1">
        <div class="w-96 space-y-2 ">
            
            <div v-for="error in getError('noAccount')" :key="error" class="w-full button bg-rose-700 text-white flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                    <path fill-rule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                </svg>
                <p>{{ error.message }}</p>
            </div>
            <div class="w-full base-content relative pb-4 overflow-hidden">
                <!-- Loading -->
                <div v-if="isSubmitting" class="w-full h-full bg-gray-400/25 absolute top-0 left-0 z-50 grid place-items-center">
                    <div
                        class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-green-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                        role="status">
                        <span
                            class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                            >Loading...</span
                        >
                    </div>
                </div>
                <!-- Inputs -->
                <div class="flex items-center pb-4">
                    <img :src="logo" alt="Logo" class="w-12 h-12">
                    <div class="">
                        <p class="font-bold text-lg">ROTC</p>
                        <p class="text-xs">Consolacion Campus</p>
                    </div>
                </div>
                <div class="space-y-2">
                    <div class="">
                        <label for="username">Username</label>
                        <input v-model="username" id="username" type="text" class="input w-full font-bold" placeholder="Input Username">
                        <span v-for="error in getError('username')" :key="error" class="text-sm text-rose-600">{{ error.message }}</span>
                    </div>
                    <div class="">
                        <label for="password">Password</label>
                        <div class="relative">
                            <input @keyup.enter="handleSubmit" v-model="password" id="password" :type="canSee ? 'text' : 'password'" class="input w-full font-bold" placeholder="Input Password">
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
                        <span v-for="error in getError('password')" :key="error" class="text-sm text-rose-600">{{ error.message }}</span>
                    </div>
                    <div class="">
                        <button @click="handleSubmit" class="button bg-green-700 mt-2 w-full">Login</button>
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
import axios from 'axios'

    export default{
        data(){
            return{
                username:null,
                password:null,
                logo:Logo,
                canSee:false,
                errors:[],
                isSubmitting:false,
            }
        },
        methods:{
            handleCanSeePassword(){
                this.canSee = !this.canSee
            },

            getError(type){

                return this.errors.filter((i)=> i.field === type)
            },

            handleSubmit(){
                this.errors = []
                this.isSubmitting = true

                axios.post('login',{
                    username:this.username,
                    password:this.password
                })
                .then((res)=>{
                    console.log(res.data)
                    this.$router.push({name:'dashboard'})
                })
                .catch((err)=>{
                    console.log(err)
                    if(err.response.status === 422){
                        this.errors = err.response.data.errors

                    }else if(err.response.status === 401){
                        
                        this.errors = err.response.data
                    }
                    
                })
                .finally(()=>{
                    this.isSubmitting = false
                })
            }
        }
    }
</script>