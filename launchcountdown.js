// let output = document.querySelector('.output');
// output.innerHTML = '';


// for (let i = 11; i >= 0, i--;) {
//     const para = document.createElement('p');
//     if (i === 10) {
//         para.textContent = 'Countdown' + ' ' + i;
//     } else if (i === 0) {
//         para.textContent = 'BLAST OFF!';
//     } else {
//         para.textContent = i;
//     }
//     output.appendChild(para);
// };

//guest list

const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: '
refused.textContent = 'Refuse: '
refused.textContent = ''
admitted.textContent = ''

for (i = 0; i < people.length, i++;) {
    if (people[i] === 'Phil' || people[i] === 'Lola') {
        refused.textContent += people[i] + ', ';
    } else {
        admitted.textContent += people[i] + ', ';
    }
};


refused.textContent = refused.textContent.slice(0, refused.textContent.length - 2) + '.';
admitted.textContent = admitted.textContent.slice(0, admitted.textContent.length - 2) + '.';