console.log('WELCOME TO THE HOBBIES SUGGESTION');

let hobbiesList = ['Play with pet', 'Play video games', 'Go jogging', 'Watching TV', 'Browsing'];

const randomHobbies = () => {
    let hobbyNum = Math.floor(Math.random() * hobbiesList.length);
    let suggestedHobby = hobbiesList[hobbyNum];
    return suggestedHobby;
}

console.log(randomHobbies());
