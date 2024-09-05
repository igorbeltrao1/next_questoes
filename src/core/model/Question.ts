import { Alternative } from "./Alternative";

export interface Question {
    id: string;
    statment: string;
    type: string;
    difficulty: string;
    image: string;
    category: string;
    year: number;
    alternatives: Alternative[];
  }