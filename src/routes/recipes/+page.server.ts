import recipes from '$lib/server/recipes.json' with { type: "json" };
import type { Recipe } from '$lib/types.js';
import type { PageServerLoad } from './$types.js';

export const load: PageServerLoad = async () => {
    let tsRecipes: Recipe[] = []
    recipes.forEach((datum) => {
        let recipe: Recipe = {
            title: datum.title,
            link: datum.link,
            src: datum.src,
            rating: Number(datum.tags),
            tags: datum.tags,
            ingredients: datum.ingredients,
            instructions: datum.instructions,
            notes: datum.notes
        }
        tsRecipes.push(recipe)
    })
    return { tsRecipes };
};