
for (let i = 0; i < 3; i++) {
    let row = [];
    for (let j = 0; j < 3; j++) {
        if ((i + j) % 2 === 0) {
            row.push('x');
        } else {
            row.push('o');
        }
    }
    console.log(row.join(' '));
}