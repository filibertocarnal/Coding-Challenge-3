/////////////////////////////////////////////////////// coding challenge 3

/*
There are two gymnastics teams, dolphins and koalas. they compete against each other 3 times. the winner with the highest average score wins the trophy!

1.calculate the average score for each team, using the test data below.
2.compare the teams average scores to determine the winner of the competition, and print it to the console. don't forget that there can be a draw, so test for that as well (draw means that they can both have the same average score).

3. BONUS 1: include a requirment for a minimum score of 100. with this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: use a logical operator to test for the minimum score, as well as multiple else-if blocks.
4. BONUS 2: minimum score also applies to a draw! so a draw only happens when both teams have the same score and both have a score greater or equal 100 points. otherwise, no team wins the trophy.

TEST DATA 1: dolphines score 96, 108, and 89. koalas score 88, 91, and 110
TEST DATA BONUS 1: dolphines score 97, 112, 101. koalas score 109, 95, 123
TEST DATA BONUS 2: dolphines score 97, 112, 101. koalas score 109, 95 , 106
*/

const dolphinesAverageScoreTD1 = 110//(96 + 108 + 89)/3;
const dolphinesAverageScoreTDB1 = (97 + 112 + 101)/3;
const dolphinesAverageScoreTDB2 = dolphinesAverageScoreTDB1;

const koalasAverageScoreTD1 = 110//(88 + 91 + 110)/3;
const koalasAverageScoreTDB1 = (109 + 95 + 123)/3;
const koalasAverageScoreTDB2 = (109 + 95 + 106)/3;

const scoreMinD = dolphinesAverageScoreTD1 >= 100;
const scoreMinK = koalasAverageScoreTD1 >= 100;

const scoreMinDB1 = dolphinesAverageScoreTDB1 >= 100;
const scoreMinKB1 = koalasAverageScoreTDB1 >= 100;

const scoreMinDB2 = dolphinesAverageScoreTDB2 >= 100;
const scoreMinKB2 = koalasAverageScoreTDB2 >= 100;



if((dolphinesAverageScoreTD1 === koalasAverageScoreTD1) && ((scoreMinD)&&(scoreMinK))) {
    console.log(`TEST DATA 1: both dolphines(${dolphinesAverageScoreTD1}), and koalas(${koalasAverageScoreTD1}) average score were the same. They both met the 100 point minimum requirment.`)
//add else if that sends error in console for both being draw but not meeting the min 100 score requirement: DONE

} else if((dolphinesAverageScoreTD1 === koalasAverageScoreTD1) && ((dolphinesAverageScoreTD1 !== scoreMinD)&&(koalasAverageScoreTD1 !== scoreMinK))) {
console.log(`TEST DATA 1: although both dolphines(${dolphinesAverageScoreTD1}), and koalas(${koalasAverageScoreTD1}) average score were the same, they did not meet the 100 point minimum requirment, neither win.`);


} else if((dolphinesAverageScoreTD1 > koalasAverageScoreTD1) && (dolphinesAverageScoreTD1 >= 100)) {
    console.log(`TEST DATA 1: dolphines(${dolphinesAverageScoreTD1}) have a higher score than the koalas(${koalasAverageScoreTD1}), and met the 100 score minimum.`);
//add else if that sends error in console explaining although dolphines won, they didn't meet the minimum requirment of 100.


} else if((dolphinesAverageScoreTD1 > koalasAverageScoreTD1) && (dolphinesAverageScoreTD1 !== scoreMinD)) {
    console.log(`TEST DATA 1: although the dolphines(${dolphinesAverageScoreTD1}) score was higher than the koalas(${koalasAverageScoreTD1}), they did not meet the 100 point minimum requirment, neither win.`);


} else if((koalasAverageScoreTD1 > dolphinesAverageScoreTD1) && (koalasAverageScoreTD1 >= 100)) {
    console.log(`TEST DATA 1: koalas(${koalasAverageScoreTD1}) have a higher score than the dolphines(${dolphinesAverageScoreTD1}), and met the 100 score minimum.`);

//add else if that sends error in console explaining although dolhines won, they didnt meet the minimum requirment of 100.

} else if((koalasAverageScoreTD1 > dolphinesAverageScoreTD1) && (koalasAverageScoreTD1 !== scoreMinK)) {
    console.log(`TEST DATA 1: although the koalas(${koalasAverageScoreTD1}) score was higher than the dolphines(${dolphinesAverageScoreTD1}), they did not meet the 100 point minimum requirment, neither win.`);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if((dolphinesAverageScoreTDB1 === koalasAverageScoreTDB1) && ((scoreMinDB1)&&(scoreMinKB1))) {
    console.log(`TEST DATA BONUS 1: both dolphines(${dolphinesAverageScoreTDB1}), and koalas(${koalasAverageScoreTDB1}) average score were the same. They both met the 100 point minimum requirment.`)
//add else if that sends error in console for both being draw but not meeting the min 100 score requirement: DONE

} else if((dolphinesAverageScoreTDB1 === koalasAverageScoreTDB1) && ((dolphinesAverageScoreTDB1 !== scoreMinDB1)&&(koalasAverageScoreTDB1 !== scoreMinKB1))) {
console.log(`TEST DATA BONUS 1: although both dolphines(${dolphinesAverageScoreTDB1}), and koalas(${koalasAverageScoreTDB1}) average score were the same, they did not meet the 100 point minimum requirment, neither win.`);


} else if((dolphinesAverageScoreTDB1 > koalasAverageScoreTDB1) && (dolphinesAverageScoreTDB1 >= 100)) {
    console.log(`TEST DATA BONUS 1: dolphines(${dolphinesAverageScoreTDB1}) have a higher score than the koalas(${koalasAverageScoreTDB1}), and met the 100 score minimum.`);
//add else if that sends error in console explaining although dolphines won, they didn't meet the minimum requirment of 100.


} else if((dolphinesAverageScoreTDB1 > koalasAverageScoreTDB1) && (dolphinesAverageScoreTDB1 !== scoreMinDB1)) {
    console.log(`TEST DATA BONUS 1: although the dolphines(${dolphinesAverageScoreTDB1}) score was higher than the koalas(${koalasAverageScoreTDB1}), they did not meet the 100 point minimum requirment, neither win.`);


} else if((koalasAverageScoreTDB1 > dolphinesAverageScoreTDB1) && (koalasAverageScoreTDB1 >= 100)) {
    console.log(`TEST DATA BONUS 1: koalas(${koalasAverageScoreTDB1}) have a higher score than the dolphines(${dolphinesAverageScoreTDB1}), and met the 100 score minimum.`);

//add else if that sends error in console explaining although dolhines won, they didnt meet the minimum requirment of 100.

} else if((koalasAverageScoreTDB1 > dolphinesAverageScoreTDB1) && (koalasAverageScoreTDB1 !== scoreMinKB1)) {
    console.log(`TEST DATA BONUS 1: although the koalas(${koalasAverageScoreTDB1}) score was higher than the dolphines(${dolphinesAverageScoreTDB1}), they did not meet the 100 point minimum requirment, neither win.`);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if((dolphinesAverageScoreTDB2 === koalasAverageScoreTDB2) && ((scoreMinDB2)&&(scoreMinKB2))) {
    console.log(`TEST DATA BONUS 2: both dolphines(${dolphinesAverageScoreTDB2}), and koalas(${koalasAverageScoreTDB2}) average score were the same. They both met the 100 point minimum requirment.`)
//add else if that sends error in console for both being draw but not meeting the min 100 score requirement: DONE

} else if((dolphinesAverageScoreTDB2 === koalasAverageScoreTDB2) && ((dolphinesAverageScoreTDB2 !== scoreMinDB2)&&(koalasAverageScoreTDB2 !== scoreMinKB2))) {
console.log(`TEST DATA BONUS 2: although both dolphines(${dolphinesAverageScoreTDB2}), and koalas(${koalasAverageScoreTDB2}) average score were the same, they did not meet the 100 point minimum requirment, neither win.`);


} else if((dolphinesAverageScoreTDB2 > koalasAverageScoreTDB2) && (dolphinesAverageScoreTDB2 >= 100)) {
    console.log(`TEST DATA BONUS 2: dolphines(${dolphinesAverageScoreTDB2}) have a higher score than the koalas(${koalasAverageScoreTDB2}), and met the 100 score minimum.`);
//add else if that sends error in console explaining although dolphines won, they didn't meet the minimum requirment of 100.


} else if((dolphinesAverageScoreTDB2 > koalasAverageScoreTDB2) && (dolphinesAverageScoreTDB2 !== scoreMinDB2)) {
    console.log(`TEST DATA BONUS 2: although the dolphines(${dolphinesAverageScoreTDB2}) score was higher than the koalas(${koalasAverageScoreTDB2}), they did not meet the 100 point minimum requirment, neither win.`);


} else if((koalasAverageScoreTDB2 > dolphinesAverageScoreTDB2) && (koalasAverageScoreTDB2 >= 100)) {
    console.log(`TEST DATA BONUS 2: koalas(${koalasAverageScoreTDB2}) have a higher score than the dolphines(${dolphinesAverageScoreTDB2}), and met the 100 score minimum.`);

//add else if that sends error in console explaining although dolhines won, they didnt meet the minimum requirment of 100.

} else if((koalasAverageScoreTDB2 > dolphinesAverageScoreTDB2) && (koalasAverageScoreTDB2 !== scoreMinKB2)) {
    console.log(`TEST DATA 1: although the koalas(${koalasAverageScoreTDB2}) score was higher than the dolphines(${dolphinesAverageScoreTDB2}), they did not meet the 100 point minimum requirment, neither win.`);
}