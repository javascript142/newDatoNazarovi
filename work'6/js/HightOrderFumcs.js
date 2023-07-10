        let fruits = ['apple', 'orange','mango apple ' ,'mango', 'orange' ,'grund'];

        let fillterFruits = [];
        for (let fruit of fruits) {
            if (fruit !== 'apple'){
                fillterFruits.push(fruit);
            }
        }
        // console.log(fillterFruits);

        let fillterFruitsV1 = fruits.filter(fruits => !fruits.includes('apple')); // ! amas ro moachoreb gafiltravs da magas dagitovebs da ro aq magas achorebs  
        console.log(fillterFruitsV1);

        let fillterFruitsV2 = fruits.filter(function (fruit) {
            if (fruit !== 'apple'){
                return true;    
            }
        })
        // console.log(fillterFruitsV2);

        let particparts = [
            "jon",
            "mike",
            "bob",
        ];

        let announcements = particparts.map(particparts => {
            return `${particparts} has joined `; // template string 
        });

        // console.log(particparts);
        // console.log(announcements);

        // forEach
        particparts.forEach(particparts => {
            // console.log(`${particparts} has joined `); //
        });
        // reduce 
        let numbers = [1,2,3,4,5,6,7]
        let sum = numbers.reduce((aacumulator, bacumulator) => {
            // console.log(aacumulator , bacumulator)
            return aacumulator + bacumulator;
        })
        // console.log(sum);

        // every 
        let aiAllFruits = fruits.every(fruits => {
            return fruits.includes('apple');

        });
        // console.log(aiAllFruits);

        // some 
        let usernames = ['jon', 'jane', 'bob',];
        let userPrompt = prompt('enter your name')
        let isSomeApple = fruits.some(fruits =>{
            return fruits.includes('apple') 
        })
        // console.log(isSomeApple);
        if (isSomeApple == true) {
            alert('Please enter')
        }

