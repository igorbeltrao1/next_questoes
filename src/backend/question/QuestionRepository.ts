import { Question } from "@/core/model/Question";
import { PrismaClient } from "@prisma/client";

export default class QuestionRepository{
    private static db: PrismaClient = new PrismaClient()

    static async getAll(): Promise<Question[]> {
        const questions = await this.db.question.findMany({
            include: {
              alternatives: true,  
            },
          });
        
        return questions;
        
      }

    }
