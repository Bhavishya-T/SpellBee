class WordAPI{
    
    async getword(w){
        let link='';
        const d = w.difficulty;
        switch(d){
            case 'easy':
                let chance = Math.random()*3;
                if(chance>=0 && chance<1){
                    link = "https://wordsapiv1.p.rapidapi.com/words/?lettersmin=4&lettersMax=6&limit=1&frequencymin=1.74&frequencymax=4"
                }
                if(chance>=1 && chance<2){
                    link = "https://wordsapiv1.p.rapidapi.com/words/?lettersmin=6&lettersMax=8&limit=1&frequencymin=4&frequencymax=7"
                }
                if(chance>=2 && chance<=3){
                    link = "https://wordsapiv1.p.rapidapi.com/words/?lettersmin=8&lettersMax=10&limit=1&frequencymin=7&frequencymax=8.03"
                }
                break;
            case 'medium':
                let ch = Math.random()*2;
                if(ch>=0 && ch<1){
                    link = "https://wordsapiv1.p.rapidapi.com/words/?lettersmin=6&lettersMax=8&limit=1&frequencymin=1.74&frequencymax=4"
                }
                if(ch>=1 && ch<=2){
                    link = "https://wordsapiv1.p.rapidapi.com/words/?lettersmin=8&lettersMax=12&limit=1&frequencymin=3&frequencymax=7"
                }
                break;
            case 'hard':
                let c = Math.random()*2;
                if(c>=0 && c<1){
                    link = "https://wordsapiv1.p.rapidapi.com/words/?lettersmin=6&lettersMax=8&limit=1&frequencymin=1.74&frequencymax=2"
                }
                if(c>=1 && c<=2){
                    link = "https://wordsapiv1.p.rapidapi.com/words/?lettersmin=8&limit=1&frequencymin=2&frequencymax=4"
                }
                break;

        }
        const wordresponse = await fetch(link, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "7523e5365fmsh2313c4f4d238723p168f7fjsnc4ea12119088",
                "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
            }
        });

        const response = await wordresponse.json();
        return response;
    }

}