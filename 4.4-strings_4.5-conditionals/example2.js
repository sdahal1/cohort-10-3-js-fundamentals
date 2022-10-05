function showTopSongs(songs) {
    let result;
    // if i have no songs in eh playlist, say "you have no songs"
    // if(songs.length === 0){
    //     result = "You have no songs";
    // }else if(songs.length === 1){
    //     //if i have only 1 song: say-> the one and only songNameHere is our best song!
    //     result = `The one and only ${songs[0].title} is our best song!`
    // }else if(songs.length === 2){
    //     //if i have only 2 songs: say-> dynamic duo of song1Name and song2name
    //     result = `dynamic duo of ${songs[0].title} and ${songs[1].title}`
    // }else{
    //     //if i have more than 2 songs: say-> We go a full house today! There are songCountHere in this playlist: All songs names here
    //     let titles = []
    //     for(let i = 0; i<songs.length; i++){
    //         let currentTitle = songs[i].title;
    //         titles.push(currentTitle)
    //     }
    //     // console.log(titles.join(', '))

    //     result = `We got a full house today! There are ${songs.length} in this playlist: ${titles.join(', ')}`
    // }

    
    switch (songs.length) {
        case 0: {
            result = "You have no songs";
            break;
        }
        case 1: {
            result = `The one and only ${songs[0].title} is our best song!`;
            break;
        }
        case 2: {
            result = `dynamic duo of ${songs[0].title} and ${songs[1].title}`;
            break;
        }

        default: {
            let titles = [];
            for (let i = 0; i < songs.length; i++) {
                let currentTitle = songs[i].title;
                titles.push(currentTitle);
            }
            // console.log(titles.join(', '))

            result = `We got a full house today! There are ${songs.length} in this playlist: ${titles.join(", ")}`;

            break;
        }
    }

    return result;
    
}

let robsPlaylist = [
    {
        title: "Good Life",
        artist: "Kanye",
        albums: ["A", "B", "C"],
    },
    {
        title: "Hussle and Motivate",
        artist: "Nipsey Hussle",
        albums: ["D", "E", "F"],
    },
    {
        title: "My Life",
        artist: "Mystic",
        albums: ["G", "H", "I"],
    },
    {
        title: "Rainbow in the dark",
        artist: "Dio",
        albums: ["J", "K", "L"],
    },
];

let anothaOne = [];

console.log(showTopSongs(robsPlaylist));


