

const topics = ["HTML", 'CSS', 'Git', 'Javascript'];
const randomTopic = topics[Math.floor(Math.random() * topics.length)];
function listTopics() {
    for (let index = 0; index < topics.length; index++) {
        console.log(topics[index]);
    }
}

function selectTopic() {
    if (randomTopic === 'HTML') {
        console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
        console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
        console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
        console.log("Let's study JavaScript!");
    } else {
        console.log('Please try again!');
    }
}

console.log('Here are the topics we learned through Prework:');
listTopics();

console.log('Which topic should we study first?');
selectTopic();

