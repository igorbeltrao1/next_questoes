import { Alternative } from "@/core/model/Alternative";

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