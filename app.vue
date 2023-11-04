<script setup lang="ts">
const wordArray = [
  {
    word: "apple",
    meaning: "りんご",
    registrationDate: "2023/11/04",
  },
  {
    word: "banana",
    meaning: "バナナ",
    registrationDate: "2023/11/04",
  },
  {
    word: "carrot",
    meaning: "にんじん",
    registrationDate: "2023/11/04",
  },
  {
    word: "dog",
    meaning: "犬",
    registrationDate: "2023/11/04",
  },
  {
    word: "elephant",
    meaning: "象",
    registrationDate: "2023/11/04",
  },
  {
    word: "flower",
    meaning: "花",
    registrationDate: "2023/11/04",
  },
  {
    word: "grape",
    meaning: "ぶどう",
    registrationDate: "2023/11/04",
  },
  {
    word: "house",
    meaning: "家",
    registrationDate: "2023/11/04",
  },
  {
    word: "ice cream",
    meaning: "アイスクリーム",
    registrationDate: "2023/11/04",
  },
  {
    word: "jacket",
    meaning: "ジャケット",
    registrationDate: "2023/11/04",
  },
];
</script>

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
          v-for="(word, index) in wordArray"
          :key="index"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        >
          <td class="px-6 py-4">{{ word.word }}</td>
          <td class="px-6 py-4">
            <font-awesome-icon :icon="['fas', 'volume-high']"/>
          </td>
          <td class="px-6 py-4">{{ word.meaning }}</td>
          <td class="px-6 py-4">{{ word.registrationDate }}</td>
          <td class="px-6 py-4"><input type="check" /></td>
          <td class="px-6 py-4"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
