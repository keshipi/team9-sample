import type { Word } from "~/types/word";

export const useWords = () => {
  const wordList = useState<Word[]>("wordList", () => [
    {
      word: "apple",
      meaning: "りんご",
      audio: null,
      registrationDate: "2023/11/04",
      isRemembered: false,
      examples: [
        {
          sentence: "I love to eat apples.",
          translation: "りんごを食べるのが好きです。",
          Audios: null,
        },
        {
          sentence: "The apple tree is full of fruit.",
          translation: "りんごの木は実でいっぱいです。",
          Audios: null,
        },
      ],
    },
    {
      word: "banana",
      meaning: "バナナ",
      audio: null,
      registrationDate: "2023/11/04",
      isRemembered: false,
      examples: [
        {
          sentence: "I have a banana for breakfast every day.",
          translation: "毎日朝食にバナナを食べます。",
          Audios: null,
        },
        {
          sentence: "He likes to make banana smoothies.",
          translation: "バナナスムージーを作るのが好きです。",
          Audios: null,
        },
      ],
    },
    {
      word: "carrot",
      meaning: "にんじん",
      audio: null,
      registrationDate: "2023/11/04",
      isRemembered: false,
      examples: [
        {
          sentence: "Carrots are orange and crunchy.",
          translation: "にんじんはオレンジ色でサクサクしています。",
          Audios: null,
        },
        {
          sentence: "I like to dip carrots in ranch dressing.",
          translation: "にんじんをランチドレッシングにつけるのが好きです。",
          Audios: null,
        },
      ],
    },
    {
      word: "dog",
      meaning: "犬",
      audio: null,
      registrationDate: "2023/11/04",
      isRemembered: false,
      examples: [
        {
          sentence: "I have a pet dog named Max.",
          translation: "私はMaxという名前のペットの犬がいます。",
          Audios: null,
        },
        {
          sentence: "Dogs are known for their loyalty.",
          translation: "犬は忠誠心で知られています。",
          Audios: null,
        },
      ],
    },
    {
      word: "elephant",
      meaning: "象",
      audio: null,
      registrationDate: "2023/11/04",
      isRemembered: false,
      examples: [
        {
          sentence: "Elephants are the largest land animals on Earth.",
          translation: "象は地球上で最も大きな陸上動物です。",
          Audios: null,
        },
        {
          sentence: "People ride elephants in some countries.",
          translation: "一部の国では象に乗ります。",
          Audios: null,
        },
      ],
    },
    {
      word: "flower",
      meaning: "花",
      audio: null,
      registrationDate: "2023/11/04",
      isRemembered: false,
      examples: [
        {
          sentence: "The garden is full of colorful flowers.",
          translation: "庭は色とりどりの花でいっぱいです。",
          Audios: null,
        },
        {
          sentence: "She received a bouquet of flowers for her birthday.",
          translation: "彼女は誕生日に花束をもらいました。",
          Audios: null,
        },
      ],
    },
    {
      word: "grape",
      meaning: "ぶどう",
      audio: null,
      registrationDate: "2023/11/04",
      isRemembered: false,
      examples: [
        {
          sentence: "Grapes can be red, green, or purple.",
          translation: "ぶどうは赤、緑、または紫であり得ます。",
          Audios: null,
        },
        {
          sentence: "She made grape juice from fresh grapes.",
          translation: "彼女は新鮮なぶどうからぶどうジュースを作りました。",
          Audios: null,
        },
      ],
    },
    {
      word: "house",
      meaning: "家",
      audio: null,
      registrationDate: "2023/11/04",
      isRemembered: false,
      examples: [
        {
          sentence: "My house is painted blue.",
          translation: "私の家は青で塗られています。",
          Audios: null,
        },
        {
          sentence: "They are looking to buy a new house.",
          translation: "彼らは新しい家を購入しようとしています。",
          Audios: null,
        },
      ],
    },
    {
      word: "ice cream",
      meaning: "アイスクリーム",
      audio: null,
      registrationDate: "2023/11/04",
      isRemembered: false,
      examples: [
        {
          sentence: "I scream for ice cream!",
          translation: "アイスクリームを求めて叫びます！",
          Audios: null,
        },
        {
          sentence: "They had a scoop of chocolate ice cream.",
          translation:
            "彼らはチョコレートアイスクリームの一すくいを食べました。",
          Audios: null,
        },
      ],
    },
    {
      word: "jacket",
      meaning: "ジャケット",
      audio: null,
      registrationDate: "2023/11/04",
      isRemembered: false,
      examples: [
        {
          sentence: "He wore a jacket to stay warm in the cold weather.",
          translation: "彼は寒い天候で温かく保つためにジャケットを着ました。",
          Audios: null,
        },
        {
          sentence: "She bought a stylish leather jacket.",
          translation: "彼女はおしゃれな革ジャケットを買いました。",
          Audios: null,
        },
      ],
    },
  ]);

  const findIndexWord = (word: string) => {
    const index = wordList.value.findIndex((item) => item.word === word);
    if (index === -1) {
      console.log("Word not found");
    }
    return index;
  };

  const fetchWord = (word: string): Word => {
    const result = wordList.value.filter((item) => item.word === word);
    if (!result[0]) {
      console.log("Word not found");
    }
    return result[0];
  };

  const updateWord = (word: Word) => {
    const targetIndex = findIndexWord(word.word);
    wordList.value[targetIndex] = word;
  };

  const deleteWord = (word: string) => {
    const targetIndex = findIndexWord(word)
    wordList.value.splice(targetIndex, 1)    
  }

  return {
    wordList: readonly(wordList),
    fetchWord,
    updateWord,
    deleteWord,
  };

};
