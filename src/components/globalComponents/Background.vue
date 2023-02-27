<template>
        <div class="transition" :style="{ 'background-image': gradient }">
            <img v-if="this.$route.path == '/'" class="bg homeBG" src="/homeBG.svg" alt="Background">
            <img v-if="this.$route.path == '/music'" class="bg musicBG" src="/musicBG.svg" alt="Background">
            <img v-if="this.$route.path == '/story'" class="bg storyBG" src="/storyBGTop.svg" alt="Background">
            <img v-if="this.$route.path == '/story'" class="bg storyBG" src="/storyBGTop.svg" alt="Background" style="rotate: 180deg; transform: scaleX(-1);">
            <img v-if="this.$route.path == '/lessons'" class="bg lessonsBG" src="/lessonsBG.svg" alt="Background">
            <img v-if="this.$route.path == '/contact'" class="bg contactBG" src="/contactBG.svg" alt="Background">
        </div>
</template>


<script>
export default {
computed: {
    gradient() {
    const gradientMap = {
        '/': 'linear-gradient(-25deg, #070D1A, #22252E,  #471569)',
        '/contact': 'linear-gradient(-25deg, #070D1A, #22252E,  #3E1869)',
        '/story': 'linear-gradient(-25deg, #070D1A, #22252E, #4C2E5F)',
        '/music': 'linear-gradient(-25deg, #070D1A , #22252E, #662A72)',
        '/lessons': 'linear-gradient(-25deg, #070D1A , #22252E, #3A2C48)',
    };
    return gradientMap[this.$route.path] || 'linear-gradient(-25deg, #662A72, #22252E, #070D1A)';
},
}
};
</script>

<style scoped>
.transition{
    background-image: linear-gradient(-25deg, #662A72, #22252E, #070D1A);
    transition: 3s ease-in-out;
    width: 100%;
    height: 100%;
    position: absolute;
}

.bgImg{
    width: 100%;
}

.homeBG{
    width: 100%;
}

.storyBG{
    margin-top: 40px;
    width: 100%;
}

.musicBG{
    position: absolute;
    top: 0;
    width: 100%;
}

.lessonsBG{
    width: 90vw;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 50px;
}

.contactBG{
    left: 50%;
    transform: translateX(-50%);
    margin-top: 50px;
    width: 90vw;
}

@media (max-width: 1023px){
    .bg{
        display: none;
    }
}
</style>
