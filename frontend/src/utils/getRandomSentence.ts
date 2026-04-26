const sentences: string[] = [
    "Ooooh. That seems interesting. Tell me more!",
    "Joyce enjoyed eating pancakes with ketchup.",
    "At that moment he wasn't listening to music, he was living an experience.",
    "The clock within this blog and the clock on my laptop are 1 hour different from each other.",
    "They ran around the corner to find that they had traveled back in time.",
    "Please put on these earmuffs because I can't hear you.",
    "All she wanted was the answer, but she had no idea how much she would hate it.",
    "He enjoys practicing his ballet in the bathroom.",
    "Can we go to the park?",
    "Where is the orange cat? Said the big black dog.",
    "We can make the bird fly away if we jump on something.",
    "My big yellow cat ate the little black bird.",
    "I like to read my book at school.",
    "They improved dramatically once the lead singer left.",
    "I hear that Nancy is very pretty.",
    "Sometimes you have to just give up and win by cheating.",
    "The green tea and avocado smoothie turned out exactly as would be expected.",
    "In that instant, everything changed.",
    "I currently have 4 windows open up and I don't know why.",
    "The shark-infested South Pine channel was the only way in or out.",
    "She insisted that cleaning out your closet was the key to good driving.",
    "Cats are good pets, for they are clean and are not noisy.",
    "There are over 500 starfish in the bathroom drawer.",
    "The bees decided to have a mutiny against their queen.",
    "He strives to keep the best lawn in the neighborhood.",
    "Carol drank the blood as if she were a vampire.",
    "Dan ate the clouds like cotton candy.",
    "He went on a whiskey diet and immediately lost three days.",
    "The small white buoys marked the location of hundreds of crab pots.",
    "Don't step on the broken glass.",
    "Her scream silenced the rowdy teenagers.",
];

const getRandomSentence = (): string => {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    return sentences[randomIndex];
};

export default getRandomSentence;
