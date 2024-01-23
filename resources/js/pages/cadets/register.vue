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
        <section class="w-full h-[calc(100%-2.75rem)] flex flex-col items-center bg-gray-100 overflow-hidden">
            <!-- Main -->
            <div class="h-full w-full transition-all md:max-w-[80%] border bg-white flex flex-col overflow-auto">
                <div class="h-[calc(100%-10-rem)] w-full pb-2 flex-1">
                    <!-- Heading -->
                    <div class="font-medium text-gray-700 p-2 px-4 border border-b text-center text-lg">
                        Cadet Registration
                    </div>
                    <!-- Body -->
                    <div class="flex flex-wrap gap-y-2 font-bold text-gray-500 pt-2">
                        <div class="px-2 space-y-1.5 w-full md:w-[30%]">
                            <p class="font-medium text-gray-500">Username</p>
                            <input type="text" class="border rounded-lg bg-gray-50 px-2 py-1 w-full">
                        </div>
                        <div class="px-2 space-y-1.5 w-full md:w-[40%]">
                            <p class="font-medium text-gray-500">First Name</p>
                            <input type="text" class="border rounded-lg bg-gray-50 px-2 py-1 w-full">
                        </div>
                        <div class="px-2 space-y-1.5 w-full md:w-[30%]">
                            <p class="font-medium text-gray-500">Last Name</p>
                            <input type="text" class="border rounded-lg bg-gray-50 px-2 py-1 w-full">
                        </div>
                        <div class="px-2 space-y-1.5 w-full md:w-[60%]">
                            <p class="font-medium text-gray-500">Email</p>
                            <input type="text" class="border rounded-lg bg-gray-50 px-2 py-1 w-full">
                        </div>
                        <div class="px-2 space-y-1.5 w-full md:w-[40%]">
                            <p class="font-medium text-gray-500">Password</p>
                            <input type="password" class="border rounded-lg bg-gray-50 px-2 py-1 w-full">
                        </div>
                    </div>
                </div>
                <div class="flex justify-center p-2">
                    <button class="btn-success">Submit</button>
                </div>
            </div>
            <!-- Footer -->
            <div class="italic text-center text-sm py-2 text-gray-500">
                Made By Jurie Tylier Pedrogas
            </div>
        </section>
    </div>
</template>