<template>
  <div>
    <font-awesome-icon :icon="['fas', 'volume-high']" @click="play" />
    <audio ref="audio" :src="data?.fileName" type="audio/mp3"></audio>
  </div>
</template>

<script setup lang="ts">
interface Props {
  text: string;
}
const props = defineProps<Props>();
const { data, pending, error, refresh } = await useFetch("/api/tts", {
  query: { text: props.text },
});
const audio = ref(null);
const play = () => audio.value.play();
</script>
