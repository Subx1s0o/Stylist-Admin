interface Translates {
  uk: string;
  en: string;
}
export type Service = {
  _id: string;
  title: Translates;
  duration_work?: Translates;
  duration_consultation: Translates;
  price: string;
  attention?: Translates;
  result: Translates;
  format: "online" | "offline";
  category: "makeup" | "style";
  file: File;
  stages: {
    "1"?: Translates;
    "2"?: Translates;
    "3"?: Translates;
    "4"?: Translates;
    "5"?: Translates;
    "6"?: Translates;
  };
};
