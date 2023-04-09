let ingredients_list = ['noodles', { list: ['eggs', 'flour', 'water'] }];

let ingredients_list_copy = Array.from(ingredients_list);

console.log('ingredients_list ', ingredients_list);

ingredients_list_copy[1].list = ['rice flour', 'water'];

console.log('ingredients_list[1].list ', ingredients_list[1].list);

console.log('ingredients_list ', ingredients_list);

ingredients_list_copy[0] = 'rice noodles';

console.log('ingredients_list[0] ', ingredients_list[0]);

console.log('ingredients_list_copy ', ingredients_list_copy);

console.log(' ingredients_list ', ingredients_list);
