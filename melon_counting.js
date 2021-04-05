melons_to_add = ['Ogen', 'Horned Melon', 'Watermelon', 'Casaba',
                 'Sharlyn', 'Xigua', 'Ogen', 'Christmas', 'Christmas',
                 'Christmas', 'Christmas', 'Watermelon', 'Sharlyn', 'Xigua',
                 'Cantaloupe', 'Christmas', 'Watermelon', 'Christmas',
                 'Sharlyn', 'Christmas', 'Cantaloupe', 'Casaba', 'Cantaloupe',
                 'Santa Claus', 'Horned Melon', 'Watermelon', 'Ogen',
                 'Horned Melon', 'Cantaloupe', 'Xigua', 'Horned Melon', 'Sharlyn',
                 'Horned Melon', 'Sharlyn', 'Cantaloupe', 'Christmas',
                 'Horned Melon', 'Horned Melon', 'Horned Melon', 'Xigua', 'Xigua',
                 'Watermelon', 'Cantaloupe', 'Casaba', 'Cantaloupe', 'Casaba',
                 'Watermelon', 'Santa Claus', 'Casaba']


//take in aan array and return an object of number 
//of melons by melon type
function countMelons (melonArray){

    melonCounts = {};
    let melon;
    for (melon of melonArray){
       if (melonCounts[melon] !== undefined){
        melonCounts[melon] += 1;  
       } 
       else{
        melonCounts[melon] = 1;
       }
    }
    console.log(melonCounts);
    return melonCounts;
}
countMelons(melons_to_add);

//output 
// { Ogen: 3,
//     'Horned Melon': 8,
//     Watermelon: 6,
//     Casaba: 5,
//     Sharlyn: 5,
//     Xigua: 5,
//     Christmas: 8,
//     Cantaloupe: 7,
//     'Santa Claus': 2 }