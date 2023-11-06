import { writeFile } from "fs/promises";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  // Google TTS APIのエンドポイント
  const apiEndpoint = "https://translate.google.com/translate_tts";
  // クエリパラメータ
  const params = {
    ie: "UTF-8",
    total: 1,
    idx: 0,
    textlen: query.text.length,
    client: "tw-ob",
    q: query.text,
    tl: "en-US",
  };
  // クエリパラメータを文字列に変換
  const queryString = new URLSearchParams(params).toString();
  // APIエンドポイントとクエリパラメータを結合
  const apiUrl = `${apiEndpoint}?${queryString}`;

  // 音声ファイルをダウンロード
  const res = await fetch(apiUrl);
  const arrayBuffer = await res.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const fileName = `audios/${Date.now()}.mp3`;
  await writeFile(`./public/${fileName}`, buffer);
  return {
    fileName: fileName,
  };
});
