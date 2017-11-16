export interface Training {
    id: number;
    name: string;
    imageUrl?: string;
    description?: string;
    discontinued: boolean;
    nextRun: string;
}
