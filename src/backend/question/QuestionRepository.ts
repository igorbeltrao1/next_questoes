import { Question } from "@/core/model/Question";
import { PrismaClient } from "@prisma/client";

export default class QuestionRepository {
    private static db: PrismaClient = new PrismaClient();

    static async getAll(): Promise<Question[]> {
        const questions = await this.db.question.findMany({
            include: {
                alternatives: true,  
            },
        });
        return questions;
    }

    static async save(question: Question): Promise<Question> {
        const result = await this.db.question.upsert({
          include: {alternatives: true},
            where: { id: question.id },
            update: {
                statment: question.statment, 
                type: question.type,
                difficulty: question.difficulty,
                image: question.image,
                category: question.category,
                year: question.year,
                alternatives: {
                    set: question.alternatives.map(alt => ({
                        id: alt.id,
                        text: alt.text,
                        isCorrect: alt.isCorrect,
                        questionId: alt.questionId,
                    })),
                },
            },
            create: {
                id: question.id,
                statment: question.statment,  
                type: question.type,
                difficulty: question.difficulty,
                image: question.image,
                category: question.category,
                year: question.year,
                alternatives: {
                    create: question.alternatives.map(alt => ({
                        id: alt.id,
                        text: alt.text,
                        isCorrect: alt.isCorrect,
                        questionId: alt.questionId,
                    })),
                },
            },
        });
        return result;
    }
    static async getById(id: string): Promise<Question | null>{
      const question = await this.db.question.findUnique({
        include: {alternatives: true},
        where: {id},
      })
      return question
    }
    static async deleteQuestion(id: string): Promise<void>{
      await this.db.question.delete({
        include:{alternatives: true},
        where: {id},
      })

    }
}