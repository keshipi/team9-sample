export interface Word {
  word: string;
  meaning: string;
  audio: string | null;
  registrationDate: string;
  isRemembered: boolean;
  examples: {
    sentence: string;
    translation: string;
    Audios: string | null;
  }[];
}
