export enum genre {'pop', 'rock', 'jazz', 'classical', 'regge', 'hiphop', 'indie'};

export var audioData = () => {
let audioData = [
    {
        id:0,
        name: "z1",
        genre: genre.hiphop
    },
    {
        id:1,
        name: "a1",
        genre: genre.jazz
    },
    {
        id:2,
        name: "b1",
        genre: genre.regge
    },
    {
        id:3,
        name: "c1",
        genre: genre.rock
    },
    {
        id:4,
        name: "d1",
        genre: genre.indie
    },
    {
        id:5,
        name: "e1",
        genre: genre.pop
    }
];
return audioData;
};