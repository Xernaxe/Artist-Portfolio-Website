<template>
        <div class="transition" :style="{ 'background-image': gradient }">
            <!-- <img class="bgImg" :src="`${this.$route.path}BG.svg`"> -->
            <img v-if="this.$route.path == '/'" class="homeBG" src="/homeBG.svg" alt="Background">
            <img v-if="this.$route.path == '/music'" class="musicBG" src="/musicBG.svg" alt="Background">
            <img v-if="this.$route.path == '/story'" class="storyBG" src="/storyBG.svg" alt="Background">
            <img v-if="this.$route.path == '/lessons'" class="lessonsBG" src="/lessonsBG.svg" alt="Background">
            <img v-if="this.$route.path == '/contact'" class="contactBG" src="/contactBG.svg" alt="Background">
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
    // console.log(this.$route.path)
    return gradientMap[this.$route.path] || 'linear-gradient(-25deg, #662A72, #22252E, #070D1A)';
},
    backgroundA() {
    return `${this.$route.path + 'BG.svg'}`
}
}
};
</script>

<style scoped>
.transition{
    background-image: linear-gradient(-25deg, #662A72, #22252E, #070D1A);
    transition: background-image 3s ease-in-out;
    width: 100%;
    height: 100%;
    position: absolute;
}

.bgImg{
    width: 100vw;
}

.homeBG{
    width: 100vw;
}

.storyBG{
    margin-top: 40px;
    width: 100vw;
}

.musicBG{
    position: absolute;
    top: 0;
    rotate: 180deg;
    width: 100vw;
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
</style>
