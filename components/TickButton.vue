<template>
  <font-awesome-icon
    v-if="!props.isRemembered"
    :icon="['fas', 'circle-check']"
    style="color: #d4d4d4"
    @click="handleClick"
  />
  <font-awesome-icon
    v-else
    :icon="['fas', 'circle-check']"
    style="color: #8ddda5"
    @click="handleClick"
  />
</template>

<script setup lang="ts">
interface Props {
  isRemembered: boolean;
}
const props = defineProps<Props>();

interface Emits {
  (e: "emitToggle", value: boolean): void;
}
const emit = defineEmits<Emits>();

const handleClick = () => {
  emit("emitToggle", !props.isRemembered);
};
</script>
