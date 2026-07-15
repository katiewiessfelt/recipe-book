// node inspect import-recipies.js recipes.html

import fs from 'fs';
import { JSDOM } from 'jsdom';

const file = process.argv[2];

if (!file) {
    console.error('Usage: node importRecipes.js <html-file>');
    process.exit(1);
}

const html = fs.readFileSync(file, 'utf8');

const dom = new JSDOM(html);
const document = dom.window.document;

const recipes = [];

document.querySelectorAll('.recipe').forEach((recipe, index) => {
    let src = recipe.querySelector('[class="recipeImage"]')?.src.trim()
    src = src?.replace('images', 'images/recipe-images')
    recipes.push({
        title: recipe.querySelector('[id="name"]')?.textContent.trim(),
        link: recipe.querySelector('[id="original_link"]')?.href.trim(),
        src: src,
        tags: [...recipe.querySelectorAll('[class="recipeCategory"]')].map(tag => tag.textContent.trim()),
        madeThis: recipe.querySelector('[id="made_this"]')?.textContent.trim(),
        rating: Number(recipe.querySelector('[id="ratingValue"]')?.textContent.trim()),
        ingredients: [...recipe.querySelectorAll('[id="recipeIngredients"] li')].map(li => li.textContent.trim()),
        instructions: [...recipe.querySelectorAll('[id="recipeIngredients"] li')].map(li => li.textContent.trim()),
        notes: [...recipe.querySelectorAll('[id="recipeNotes"] li')].map(li => li.textContent.trim())
    });
});


fs.writeFileSync(
    'recipes.json',
    JSON.stringify(recipes, null, 2),
    'utf8'
);