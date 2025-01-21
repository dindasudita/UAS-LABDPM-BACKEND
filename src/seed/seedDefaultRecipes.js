const Recipe = require('../models/recipe');

const defaultRecipes = [
    {
        name: 'Nasi Goreng',
        ingredients: ['Nasi', 'Telur', 'Kecap', 'Bawang Putih', 'Minyak Goreng'],
        steps: ['Panaskan minyak', 'Tumis bawang', 'Masukkan telur', 'Tambahkan nasi & kecap', 'Aduk rata'],
        image: '/assets/images/nasi-goreng.jpg', // Path lokal
    },
    {
        name: 'Mie Goreng',
        ingredients: ['Mie', 'Sayur', 'Kecap', 'Bawang Merah', 'Telur'],
        steps: ['Rebus mie', 'Tumis bawang & telur', 'Masukkan mie & kecap', 'Aduk hingga matang'],
        image: '/assets/images/mie-goreng.jpg', // Path lokal
    },
    {
        name: 'Sate Ayam',
        ingredients: ['Ayam', 'Kecap', 'Bumbu Kacang', 'Tusuk Sate', 'Jeruk Nipis'],
        steps: ['Potong ayam', 'Tusuk dengan tusuk sate', 'Lumuri bumbu', 'Panggang hingga matang'],
        image: '/assets/images/sate-ayam.jpg', // Path lokal
    },
];

const seedDefaultRecipes = async () => {
    try {
        await Recipe.deleteMany(); // Hapus semua resep lama
        await Recipe.insertMany(defaultRecipes); // Tambahkan resep default
        console.log('Default recipes seeded successfully');
    } catch (error) {
        console.error('Error seeding default recipes:', error);
    }
};

module.exports = seedDefaultRecipes;
