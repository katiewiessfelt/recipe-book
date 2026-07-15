export interface Recipe {
    title: string,
    link?: string,
    src?: string,
    rating: number,
    tags: string[],
    ingredients: string[],
    instructions?: string[],
    notes?: string[]
}