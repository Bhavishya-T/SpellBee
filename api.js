class WordAPI{
    
    async getword(w){
        let link='';
        let d = w.difficulty;
        console.log(d);
        switch(d){
            case 'easy':
                let chance = Math.random()*3;
                if(chance>=0 && chance<1){
                    console.log('easy 1');
                    link = "https://wordsapiv1.p.rapidapi.com/words/?letterPattern=%5E%5Ba-zA-Z%5D%2B%24&lettersmin=4&lettersMax=6&limit=1&frequencymin=4&frequencymax=6&random=true";
                }
                if(chance>=1 && chance<2){
                    console.log('easy 2');
                    link = "https://wordsapiv1.p.rapidapi.com/words/?letterPattern=%5E%5Ba-zA-Z%5D%2B%24&lettersmin=6&lettersMax=8&limit=1&frequencymin=6&frequencymax=7&random=true";
                }
                if(chance>=2 && chance<=3){
                    console.log('easy 3');
                    link = "https://wordsapiv1.p.rapidapi.com/words/?letterPattern=%5E%5Ba-zA-Z%5D%2B%24&lettersmin=8&lettersMax=10&limit=1&frequencymin=5&frequencymax=8.03&random=true";
                }
                break;
            case 'medium':
                let ch = Math.random()*2;
                if(ch>=0 && ch<1){
                    link = "https://wordsapiv1.p.rapidapi.com/words/?letterPattern=%5E%5Ba-zA-Z%5D%2B%24&lettersmin=6&lettersMax=8&limit=1&frequencymin=3&frequencymax=4&random=true";
                }
                if(ch>=1 && ch<=2){
                    link = "https://wordsapiv1.p.rapidapi.com/words/?letterPattern=%5E%5Ba-zA-Z%5D%2B%24&lettersmin=8&lettersMax=12&limit=1&frequencymin=4&frequencymax=7&random=true";
                }
                break;
            case 'hard':
                link = "https://wordsapiv1.p.rapidapi.com/words/?letterPattern=%5E%5Ba-zA-Z%5D%2B%24&lettersmin=8&lettersMax=14&frequencymin=1.74&frequencymax=3&random=true";
                break;
            case 'mixed':
                link = "https://wordsapiv1.p.rapidapi.com/words/?letterPattern=%5E%5Ba-zA-Z%5D%2B%24&random=true";
                break;

        }
        let wordresponse = await fetch(link, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "7523e5365fmsh2313c4f4d238723p168f7fjsnc4ea12119088",
                "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
            }
        });
        
        let response = await wordresponse.json();
        return response.word;
    }
}