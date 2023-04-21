// // 1. მისალმების ტექსტი
let userFirstNamee = 'მიშა';
let userLoggedInn = true;
if(userLoggedInn){
    console.log( 'სალ ამი ' + userFirstNamee);
}

// // ——————————————————————

// // 2. ონლაინ მაღაზია
let userBalance = 150;
let cartTotal = 200;
let x = cartTotal - userBalance;
if (userBalance >= cartTotal){
    console.log('გადახდა წარმატებით შესრულდა');
}else{
    console.log('თქვენ არ გაქვთ საკმარისი თანხა, გთხოვთ დამატებით ჩარიცხოთ' + x + 'ლარი')
}

// // ——————————————————————

// // 3. გამოცდის ქულა
let maxScore = 80;
let exambarrier = 60;
let studentScore = 55;
if (studentScore >= barrier && studentScore < 80){
    console.log(`გილოცავთ, თქვენ გადალახეთ ${exambarrier} ქულიანი ბარიერი ${studentScore} ქულით`);
}else{
    console.log(`ვწუხვარ, თქვენ ვერ გადალახეთ ${exambarrier} ქულიანი ბარიერი ${studentScore} ქულით`);
}


// // ——————————————————————

// // 4. მიტანის სერვისი
let shippingIsPossible = false;
let string = ['თქვენს მისამართზე მიტანის სერვისი ხელმისაწვდომი', ' არის'];

if(shippingIsPossible){
    console.log(string.join(' '));
}else{
    string[1] = 'არ არის'
    console.log(string.join(' '));
}

// // ——————————————————————

// // 5. პოლიტკორექტული მისალმება-დამშვიდობების მექანიზმი
let userLoggedIn = false;
let userFirstName = 'ნიკა';
let userIsFemale = false;

if(userLoggedIn){
    if(userIsFemale){
        console.log(`სალამი ქალბატონო ${userFirstName}`);
    }else{
        console.log(`სალამი ბატონო ${userFirstName}`);
    }
}else{
    if(userIsFemale){
        console.log(`დროებით ქალბატონო ${userFirstName}`);
    }else{
        console.log(`დრპებით ბატონო ${userFirstName}`);
    }
}


// Array exercises
// =====================

// 6. ChatGPT-ის ლიმიტომეტრი
let userQuestions=[]
if(userQuestions.length > 24){
    console.log('შემდეგი კითხვის დასმას შეძლებთ 3 საათში');
}

// ——————————————————————

// 7. ფიტნეს აპლიკაცია
let userWeights =[100, 95 , 92 , 89, 85];
let goal = 70;
let y = (userWeights[userWeights.length-1]) - goal
console.log(`შედეგის მიღწევამდე დაგრჩა ${y} კილო`);

// ——————————————————————

// 8. როგორ სწავლობს ჩემი ბიჭი?
let gigossTestResults = [20, 30, 25, 10, 29]
let progressOfGigo = gigossTestResults[gigossTestResults.length-1] - gigossTestResults[0];
if ( progressOfGigo < 10 && progressOfGigo > 0){
    console.log(`რავიცი, ნიჭიერია მარა ზარმაცი`);
}else if ( progressOfGigo >= 10){
    console.log(`კარგი შვილი გყავთ ქალბატონო, ნუ ნერვიულობთ`);
}else{
    console.log(`უხ გიგო გიგოოო`)
}

// ——————————————————————

// 9. როგორ სწავლობს ჩემი ბიჭი? ვერსია 2
let gigosTestResults = [20, 30, 25, 10, 22]
let progress = gigosTestResults[gigosTestResults.length-1] - gigosTestResults[0];
if ( progress >= 2 && progress < 5 && progress > 1){
    console.log(`რავიცი, ნიჭიერია მარა ზარმაცი`);
}else if ( progress >= 5){
    console.log(`კარგი შვილი გყავთ ქალბატონო, ნუ ნერვიულობთ`);
}else{
    console.log(`უხ გიგო გიგოოო`)
}

// ——————————————————————

// 10. ეროვნულები
let gigosResults = ['მათემატიკა' , 'უნარები', 'ფიზიკა', 'ქართული']
gigosResults[0] = 26;
gigosResults[1] = 30;
gigosResults[2] = 15;
gigosResults[3] = 55;
let barrier = gigosResults.every(element => element >= 25);

if (barrier) {
  console.log("ყოჩაღ გიგო, შენ ჩააბარე ყველა გამოცდა");
} else {
  console.log("სამწუხაროდ შენ ვერ ჩააბარე ყველა გამოცდა");
}





