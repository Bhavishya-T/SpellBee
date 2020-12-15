class Create{

    async spell(word){
        const resp = await fetch(`https://voicerss-text-to-speech.p.rapidapi.com/?key=2f4fcb6bbb714773bafaaf73fdc9a73a&src=${word}&hl=en-us&c=mp3&r=-5`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "7523e5365fmsh2313c4f4d238723p168f7fjsnc4ea12119088",
                "x-rapidapi-host": "voicerss-text-to-speech.p.rapidapi.com"
            }
        })
        return resp.body;
    }

    async gtword(w){
        const respo = await fetch(`https://wordsapiv1.p.rapidapi.com/words/${w}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "7523e5365fmsh2313c4f4d238723p168f7fjsnc4ea12119088",
                "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
            }
        })
        let re = await respo.json();
        return re;
    }
}


