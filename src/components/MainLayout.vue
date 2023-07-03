<template>
    <div>
        <div class="container text-center">
            <div class="row">
                <div class="col">
                    Link 1 from Main Layout
                    <!-- <router-link to="/">Home</router-link> -->
                </div>
                <div class="col">
                    Link 2 from Main Layout
                    <!-- <router-link to="/about">About</router-link> -->
                </div>
                <div class="col">
                    Link 3 from Main Layout
                    <!-- <router-link to="/testview">Test</router-link> -->
                </div>
                <div class="col">
                    Link 4 from Main Layout
                    <!-- <router-link to="/testview">Test</router-link> -->
                </div>
            </div>
        </div>
        <div>
            <slot/>
        </div>
    </div>
</template>