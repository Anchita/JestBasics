const shoppingList = [
    'eggs',
    'bread',
    'butter',
    'milk',
    'oranges',
    'bananas',
];

test('the shopping lists has milk on it',() => {
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
})