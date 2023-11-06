<template>
  <div
    class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
  >
    <h5
      class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
      {{ word.word }}
      <play-button :text="word.word"></play-button>
      <tick-button
        :is-remembered="word.isRemembered"
        @emit-toggle="toggleIsRemembered"
      ></tick-button>
    </h5>

    <p class="font-normal text-gray-700 dark:text-gray-400">
      {{ word.meaning }}
    </p>
  </div>

  <div
    class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
  >
    <div v-for="(item, index) in word.examples" :key="index">
      <p>
        {{ item.sentence }}<play-button :text="item.sentence"></play-button>
      </p>
      <p>{{ item.translation }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { fetchWord, updateWord } = useWords();

const word = fetchWord(route.query.word);

const toggleIsRemembered = (toggled: boolean) => {
  word.isRemembered = toggled;
  updateWord({ ...word, isRemembered: toggled });
};
</script>
