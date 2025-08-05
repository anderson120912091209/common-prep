
declare module 'programs' {
    export interface Program {
        id: number;
        title: string;
        description: string;
        image: string;
        stats: {
            students: number;
            rating: number;
            lessons: number;
        };
    }

    export const programs: Program[];
}