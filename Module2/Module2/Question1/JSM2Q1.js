const num =[]

for (let i = 0; i < 5; i++) {
    let userNumber = parseInt(prompt('Enter five numbers of your choice: '));
    num.push(userNumber);
}

console.log('Your numbers in reverse order:');
for (let i = num.length -1; i >= 0; i --) {
    console.log(num[i]);
}