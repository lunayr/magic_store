interface products {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
}

export const products = [
  {
    id: 1,
    name: "Magic Wand",
    price: 29.99,
    description:
      "Perfect for beginners. Made from finest oak wood. This wand is handcrafted by the most experienced wandmakers, ensuring perfect balance and magical conductivity. Each wand is unique and bonds with its owner.",

    category: "wands",
    image: "https://placehold.co/800x400",
    ratings: { count: 24, average: 4.5 },
  },
  {
    id: 2,
    name: "Crystal Ball",
    price: 49.99,
    description:
      "See into the future with this genuine crystal sphere. A high-quality crystal ball made from pure quartz crystal. Perfect for divination and seeing hidden truths. Includes a velvet stand and instruction manual.",
    category: "divination",
    image: "https://placehold.co/200x200",
    ratings: { count: 18, average: 4.0 },
  },
  {
    id: 3,
    name: "Spell Book",
    price: 39.99,
    description:
      "Contains 101 essential spells for everyday use. A comprehensive collection of time-tested spells. Includes clear instructions and safety guidelines from experienced wizards. Perfect for beginners.",
    category: "books",
    image: "https://placehold.co/800x400",
    popularity: 95,
    ratings: { count: 32, average: 4.6 },
  },
  {
    id: 4,
    name: "Enchanted Rings",
    price: 19.99,
    description:
      "Set of 3 rings with protective enchantments. Each ring in this set carries unique protective enchantments. Crafted from sterling silver with embedded magical gems. Adjustable size.",
    category: "jewelry",
    image: "https://placehold.co/800x400",
    ratings: { count: 15, average: 4.3 },
  },
  {
    id: 5,
    name: "Potion Making Kit",
    price: 59.99,
    description:
      "Complete beginner's kit for brewing magical potions. Everything you need to start brewing potions. Includes cauldron, basic ingredients, measuring tools, and a detailed guidebook for 20 starter potions.",
    category: "potions",
    image: "https://placehold.co/800x400",
    ratings: { count: 28, average: 4.5 },
  },
  {
    id: 6,
    name: "Flying Carpet",
    price: 149.99,
    description:
      "Traditional flying carpet with built-in safety features. Handwoven flying carpet with anti-fall enchantments and automatic altitude control. Perfect for leisure flights and magical transportation.",
    category: "transportation",
    image: "https://placehold.co/800x400",
    ratings: { count: 12, average: 4.0 },
  },
  {
    id: 7,
    name: "Magical Herbs Set",
    price: 34.99,
    description:
      "Collection of 12 essential magical herbs and fungi. Carefully selected and preserved magical plants. Perfect for potion-making and spellcasting. Includes guide for proper storage and usage.",
    category: "ingredients",
    image: "https://placehold.co/800x400",
    ratings: { count: 22, average: 4.5 },
  },
  {
    id: 8,
    name: "Enchanted Quill",
    price: 24.99,
    description:
      "Self-inking quill with spell-check capabilities. Never run out of ink with this enchanted quill. Features automatic spell-checking and neat handwriting enhancement. Comes with a protective case.",
    category: "stationery",
    image: "https://placehold.co/800x400",
    ratings: { count: 20, average: 4.25 },
  },
  {
    id: 9,
    name: "Wizard's Chess Set",
    price: 79.99,
    description:
      "Interactive chess set with animated pieces. Traditional wizard's chess set with voice-commanded pieces. Made from marble and enchanted wood. Pieces repair themselves if damaged.",
    category: "games",
    image: "https://placehold.co/800x400",
    ratings: { count: 30, average: 4.7 },
  },
  {
    id: 10,
    name: "Invisibility Cloak",
    price: 199.99,
    description:
      "High-quality invisibility cloak with long-lasting enchantment. Premium invisibility cloak made from the finest materials. Provides complete invisibility for up to 12 hours. Machine washable on gentle cycle.",
    category: "clothing",
    image: "https://placehold.co/800x400",
    ratings: { count: 16, average: 4.7 },
  },
  {
    id: 11,
    name: "Magic Mirror",
    price: 89.99,
    description: "Interactive mirror with truth-telling capabilities.",
    longDescription:
      "Enchanted mirror that provides honest answers and advice. Features mood lighting and anti-fog spell. Perfect for daily consultations.",
    category: "divination",
    image: "https://placehold.co/800x400",
    ratings: { count: 25, average: 4.4 },
  },
  {
    id: 12,
    name: "Dragon Scale Gloves",
    price: 44.99,
    description:
      "Heat-resistant gloves made from genuine dragon scales. Protective gloves perfect for handling hot objects and magical creatures. Provides protection up to 1000°F. Water and spell resistant.",
    category: "accessories",
    image: "https://placehold.co/800x400",
    ratings: { count: 19, average: 4.3 },
  },
];
