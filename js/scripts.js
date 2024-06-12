function showTips(destination) {
    const destinationInfo = {
        Paris: {
            tips: [
                "Visit the Eiffel Tower at night for a breathtaking view of the city lights.",
                "Explore the charming streets of Montmartre and discover hidden gems like the artists' square.",
                "Indulge in delicious French pastries at local bakeries and patisseries."
            ],
            warnings: [
                "Beware of pickpockets in crowded tourist areas like the Eiffel Tower and the Louvre.",
                "Watch out for scams, such as people asking for donations or selling fake goods."
            ]
        },
        Tokyo: {
            tips: [
                "Experience the vibrant energy of Shibuya Crossing, one of the busiest intersections in the world.",
                "Visit a traditional Japanese tea house in the serene gardens of Meiji Shrine.",
                "Try authentic ramen at a local noodle shop for a taste of Tokyo's culinary scene."
            ],
            warnings: [
                "Be mindful of cultural norms and etiquette, such as bowing when greeting others.",
                "Be cautious when crossing streets, as traffic may come from unexpected directions."
            ]
        },
        NewYork: {
            tips: [
                "Take a walk along the High Line, an elevated park built on a historic railway line.",
                "Catch a live performance at the iconic Radio City Music Hall, home of the Rockettes.",
                "Explore the diverse neighborhoods of Brooklyn, known for its street art and eclectic vibe."
            ],
            warnings: [
                "Stay vigilant in crowded areas and be aware of your surroundings to avoid potential threats.",
                "Use caution when using public transportation, especially late at night."
            ]
        },
        Sydney: {
            tips: [
                "Enjoy a ferry ride to Manly Beach for stunning views of the Sydney Opera House and Harbour Bridge.",
                "Take a coastal walk from Bondi to Coogee and stop for a swim at one of the pristine beaches along the way.",
                "Visit the Royal Botanic Garden for a peaceful retreat in the heart of the city."
            ],
            warnings: [
                "Be cautious of strong currents and riptides when swimming at the beaches.",
                "Protect yourself from the sun by wearing sunscreen and staying hydrated, especially during the summer."
            ]
        },
        Rome: {
            tips: [
                "Explore the ancient ruins of the Roman Forum and imagine life in the heart of the Roman Empire.",
                "Throw a coin into the Trevi Fountain to ensure your return to Rome, according to legend.",
                "Indulge in gelato from a local gelateria and savor the authentic flavors of Italy."
            ],
            warnings: [
                "Be cautious of traffic when crossing streets, as drivers may not always yield to pedestrians.",
                "Watch out for pickpockets in crowded tourist areas like the Colosseum and the Vatican."
            ]
        }
    };

    if (destinationInfo.hasOwnProperty(destination)) {
        const tips = destinationInfo[destination].tips;
        const warnings = destinationInfo[destination].warnings;

        let message = `Insider Tips for ${destination}:\n\n`;
        message += tips.map((tip, index) => `${index + 1}. ${tip}`).join('\n');
        message += '\n\nWarnings:\n\n';
        message += warnings.map((warning, index) => `${index + 1}. ${warning}`).join('\n');

        alert(message);
    } else {
        alert(`Sorry, no insider tips and warnings available for ${destination}.`);
    }
}
