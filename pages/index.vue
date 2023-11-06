<template>
  <div>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">英単語</th>
          <th scope="col" class="px-6 py-3">発音</th>
          <th scope="col" class="px-6 py-3">日本語</th>
          <th scope="col" class="px-6 py-3">登録日</th>
          <th scope="col" class="px-6 py-3">覚えた</th>
          <th scope="col" class="px-6 py-3"></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in wordList"
          :key="index"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        >
          <td class="px-6 py-4">
            <nuxt-link :to="{ path: 'detail', query: { word: item.word } }">{{
              item.word
            }}</nuxt-link>
          </td>
          <td class="px-6 py-4">
            <play-button :text="item.word"></play-button>
          </td>
          <td class="px-6 py-4">{{ item.meaning }}</td>
          <td class="px-6 py-4">{{ item.registrationDate }}</td>
          <td class="px-6 py-4">
            <tick-button
              :is-remembered="item.isRemembered"
              @emit-toggle="toggleIsRemembered($event, item.word)"
            ></tick-button>
          </td>
          <td class="px-6 py-4"><font-awesome-icon :icon="['fas', 'xmark']" style="color: #212121;" @click="handleXMarkClick(item.word)"/></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
const { wordList, fetchWord, updateWord, deleteWord } = useWords();

const toggleIsRemembered = (toggled: boolean, word: string) => {
  const item = fetchWord(word);
  updateWord({ ...item, isRemembered: toggled });
};

const handleXMarkClick = (word: string) => {
    deleteWord(word)
}
</script>
