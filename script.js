
const affirmations = {
    const day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const message = [
    'I approach this day with clarity',
    'I approach today with an open mind',
    'I can overcome any challenge',
    'I have a strong support network',
    'I can achieve anything I want',
    'I open myself up to abundance',
    'My actions allow me to live in prosperity',
    'I embrace each day with boundless energy',
    'I take steps to nurture a healthy relationship with myself',
    'I am exactly where I need to be right now',
    'I believe in the person I am and the person I am becoming',
    'Everything I need, I already posses',
    'All the answers I seek I know are within me',
    'I give myself permission to play everyday',
    'I welcome new adventures',
    'I am making space for more succes, love and wealth to come into my life',
    'I release all negative energy that is holding me back',
    'I am smart. I am confident. I am kind',
    'I am proud of how far I have come and excited for how far I am yet to go',
    'I have the power to create the life I want',
    'I am worthy of love, respect and belonging'
]
const action = [
    'go outside and ground yourself to the earth',
    'wake up early and watch the sun rise',
    'go for a swim in the ocean',
    'take a walk in the park and watch the trees',
    'watch the sunset',
    'smile at a stranger',
    'say hello to someone who is alone',
    'read a book',
    'call a loved one you havent spoken to in a while',
    'call an old friend to see how they are',
    'take deep breaths',
    'exercise',
    'water your plants',
    'create a painting',
    'write in your journal',
    'eat an apple',
    'meditate',
    'go cloud watching',
    'take another route to work',
    'unplug for an hour',
    'go to bed early',
]
};

function getRandomMessage() {
    const randomDayIndex = Math.floor(Math.random() * affirmations.day.length);
    const randomMessageIndex = Math.floor(Math.random() * affirmations.message.length);
    const randomActionIndex = Math.floor(Math.random() * affirmations.action.length);

    const day = affirmations.day[randomDayIndex];
    const message = affirmations.message[randomMessageIndex];
    const action = affirmations.action[randomActionIndex];

    return `On ${day}, ${message}`. You should ${action}.`;
}
console.log(generateRandomMessage());
