<template>
  <div class="w-full h-full">
    <!-- Navbar -->
    <nav class="w-full transition-all px-2 md:px-32 py-2 border border-b shadow-sm shadow-gray-400 bg-white">
      <div class="flex justify-between items-center text-gray-600">
        <div class="font-medium">CTU-CC ROTCU</div>
        <div class="text-xs text-gray-400">Need Help</div>
      </div>
    </nav>
    <!-- Registration Section -->
    <section class="relative w-full h-[calc(100%-2.75rem)] flex flex-col items-center bg-gray-100 overflow-hidden">
      <!-- Main -->
      <Transition name="fade">
        <div v-if="vouched && !registered"
          class="h-full w-full transition-all md:max-w-[1400px] border bg-white flex flex-col overflow-auto"
          :class="[!vouched || !registered ? 'absolute' : '']">
          <div class="h-[calc(100%-10-rem)] w-full pb-2 flex-1">
            <!-- Heading -->
            <div class="font-medium text-gray-700 p-2 px-4 border border-b text-center text-lg">
              Cadet Registration
            </div>
            <!-- Body -->
            <div class="flex flex-wrap gap-y-2 font-bold text-gray-500 pt-2">
              <div class="px-2 space-y-1.5 w-full md:w-[30%]">
                <p class="font-medium text-gray-500">
                  Username
                  <span class=" text-rose-500 align-middle">*</span>
                </p>
                <input v-model="input.user_name" type="text" class="border rounded-lg bg-gray-50 px-2 py-1 w-full"
                  placeholder="Input Username">
                <span v-for="error in errors.user_name" class="text-xs font-normal text-rose-600 opacity-75">
                  {{ error }}
                </span>
              </div>
              <div class="px-2 space-y-1.5 w-full md:w-[40%]">
                <p class="font-medium text-gray-500">
                  First Name
                  <span class="text-rose-500 align-middle">*</span>
                </p>
                <input v-model="input.first_name" type="text" class="border rounded-lg bg-gray-50 px-2 py-1 w-full"
                  placeholder="Input First name">
                <span v-for="error in errors.first_name" class="text-xs font-normal text-rose-600 opacity-75">
                  {{ error }}
                </span>
                <span v-for="error in errors.full_name" class="text-xs font-normal text-rose-600 opacity-75">
                  {{ error }}
                </span>
              </div>
              <div class="px-2 space-y-1.5 w-full md:w-[30%]">
                <p class="font-medium text-gray-500">
                  Last Name
                  <span class="text-rose-500 align-middle">*</span>
                </p>
                <input v-model="input.last_name" type="text" class="border rounded-lg bg-gray-50 px-2 py-1 w-full"
                  placeholder="Input Last name">
                <span v-for="error in errors.last_name" class="text-xs font-normal text-rose-600 opacity-75">
                  {{ error }}
                </span>
              </div>
              <div class="px-2 space-y-1.5 w-full md:w-[60%]">
                <p class="font-medium text-gray-500">
                  Email
                  <span class="text-rose-500 align-middle">*</span>
                </p>
                <input v-model="input.email" type="text" class="border rounded-lg bg-gray-50 px-2 py-1 w-full"
                  placeholder="Input Email">
                <span v-for="error in errors.email" class="text-xs font-normal text-rose-600 opacity-75">
                  {{ error }}
                </span>
              </div>
              <div class="px-2 space-y-1.5 w-full md:w-[40%]">
                <p class="font-medium text-gray-500">
                  Password
                  <span class="text-rose-500 align-middle">*</span>
                </p>
                <div class="flex items-center space-x-1">
                  <input v-model="input.password" type="password" class="border rounded-lg bg-gray-50 px-2 py-1 w-full"
                    placeholder="Input Password">
                  <button class="p-1 px-2 rounded-lg border bg-gray-100">
                    <svg v-if="!isShowPassword" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <svg v-if="isShowPassword" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                  </button>
                </div>
                <span v-for="error in errors.password" class="text-xs font-normal text-rose-600 opacity-75">
                  {{ error }}
                </span>
              </div>
            </div>
          </div>
          <div class="flex justify-center p-2">
            <button @click="handleSubmit()" class="btn-success">Submit</button>
          </div>
        </div>
      </Transition>

      <!-- Voucher modal -->
      <Transition name="slide-top" appear>
        <div v-if="!registered && !vouched" class="w-full h-full md:max-w-[1400px] grid place-items-center"
          :class="[vouched ? 'absolute' : '']">
          <div class="w-96 h-fit p-4 rounded-lg bg-white border space-y-4">
            <!-- Header -->
            <div class="font-medium">
              Enter Registration Voucher
            </div>
            <!-- Body -->
            <div class="w-full">
              <div class="px-2 space-y-1.5 w-full">
                <p class="font-medium text-gray-500">Voucher</p>
                <input v-model="input.user_name" type="text"
                  class="border rounded-lg bg-gray-50 px-2 py-1 w-full font-bold" placeholder="Input Voucher">
                <span v-for="error in errors.user_name" class="text-xs font-normal text-rose-600 opacity-75">
                  {{ error }}
                </span>
              </div>
            </div>
            <!-- Footer -->
            <div class="grid place-items-center">
              <button @click="handleSubmitVoucher()" class="btn-success">Submit</button>
            </div>
          </div>
        </div>
      </Transition>

      <!-- Success Message -->
      <Transition name="slide-top">
        <div v-if="registered" class="w-full h-full md:max-w-[1400px] grid place-items-center z-50" :class="[!registered ? 'absolute' : '']">
          <div class="w-96 h-fit p-4 rounded-lg bg-white border space-y-4">
            <!-- Message -->
            <div class="flex flex-col items-center pt-4">
              <!-- Icon -->
              <div class="text-gray-700 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                  stroke="currentColor" class="w-14 h-14">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <p class="font-medium text-lg text-gray-500">Successfully Registered</p>
              <p class="font-bold text-xl text-gray-500 pt-1">You are now a ROTC Cadet!</p>
              <p class="text-gray-400 italic text-sm">This will automatically refresh after 10 seconds</p>
            </div>
            <!-- Footer -->
            <div class="grid place-items-center pt-4">
              <button @click="handleSubmitVoucher()" class="btn-success">Ok</button>
            </div>
          </div>
        </div>
      </Transition>

      <!-- Loading Screen -->
      <div v-if="isSubmit" class="absolute w-full h-full bg-gray-400/25">
        <loadingScreen />
      </div>
      <!-- Footer -->
      <div class="italic text-center text-sm py-2 text-gray-500">
        Made By Jurie Tylier Pedrogas
      </div>
    </section>
  </div>
</template>
<script>
import axios from 'axios'
import loadingScreen from '../../../components/loadingScreen.vue'

export default {
  components: {
    loadingScreen: loadingScreen
  },
  data() {
    return {
      isSubmit: false,
      vouched: false,
      isShowPassword: false,
      registered: false,

      input: {
        first_name: null,
        last_name: null,
        full_name: null,
        user_name: null,
        email: null,
        password: null
      },
      errors: {}
    }
  },

  methods: {
    async handleSubmit() {
      try {
        this.isSubmit = true

        await axios.post('/api/cadet/store', this.input)

        this.registered = true
      } catch (err) {
        console.log(err)
        const res = err.response

        if (res.status === 422) {
          this.errors = err.response.data.errors
        }
      } finally {
        this.isSubmit = false
      }
    },

    async handleSubmitVoucher() {
      this.vouched = true
    }
  }
}
</script>
<style scoped>
.slide-top-enter-active,
.slide-top-leave-active {
  transition: all 0.7s;
}

.slide-top-enter-from,
.slide-top-leave-to {
  transform: translateY(-5%);
  opacity: 0;
}


.fade-enter-active,
.fade-leave-active {
  transition: all 1s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>