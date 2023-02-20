// 3.
/* Science Subjects - Physics, Chemistry, Biology, Technical Drawing 
Social Science Subjects - Accounting, Commerce, Marketing, Geography
Arts Subjects - Government, Economics, Literature, History
General Subjects - English, Mathematics
 */

let StudentType = 'Arts';

if (StudentType === 'Science') {
    console.log('English, Mathematics, Physics, Chemistry, Biology, Technical Drawing');
} else if(StudentType === 'SocialSciences') {
    console.log('English, Mathematics, Accounting, Commerce, Marketing, Geography');
} else if (StudentType === 'Arts') {
    console.log('English, Mathematics, Government, Economics, Literature, History');
} else {
    console.log('English, Mathematics');
}
// output = English, Mathematics, Government, Economics, Literature, History



//5.
let num = 20;
let nearestPowerOfTwo = num => {
    if (num < 0) {
        num *= -1;
    }
    let base = 1;
    while (base < num) {
        if (num - base < Math.floor(base / 2)) {
            return base;
        };
        base *= 2;    
    };
    return base;
};
console.log(nearestPowerOfTwo(num));
// output =16

console.log('The number 16 is the power of 2 nearest to 20');
// output = The number 16 is the power of 2 nearest to 20
