interface Translates {
  uk: string;
  en: string;
}
export type Service = {
  _id: string;
  title: Translates;
  duration_work?: Translates;
  duration_consultation: Translates;
  price: number;
  attention?: Translates;
  result: Translates;
  format: "online" | "offline";
  category: "makeup" | "style";
  image: string;
  stages: {
    "1"?: Translates;
    "2"?: Translates;
    "3"?: Translates;
    "4"?: Translates;
    "5"?: Translates;
    "6"?: Translates;
  };
};

export type SendService = {
  title: string;
  duration_work?: string;
  duration_consultation: string;
  price: number;
  attention?: string;
  result: string;
  format: "online" | "offline";
  category: "makeup" | "style";
  image: string;
  stages: {
    "1"?: string;
    "2"?: string;
    "3"?: string;
    "4"?: string;
    "5"?: string;
    "6"?: string;
  };
};
