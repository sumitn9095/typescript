"use strict";
exports.__esModule = true;
var genre;
(function (genre) {
    genre[genre["pop"] = 0] = "pop";
    genre[genre["rock"] = 1] = "rock";
    genre[genre["jazz"] = 2] = "jazz";
    genre[genre["classical"] = 3] = "classical";
    genre[genre["regge"] = 4] = "regge";
    genre[genre["hiphop"] = 5] = "hiphop";
    genre[genre["indie"] = 6] = "indie";
})(genre = exports.genre || (exports.genre = {}));
;
exports.audioData = function () {
    var audioData = [
        {
            id: 0,
            name: "z1",
            genre: genre.hiphop
        },
        {
            id: 1,
            name: "a1",
            genre: genre.jazz
        },
        {
            id: 2,
            name: "b1",
            genre: genre.regge
        },
        {
            id: 3,
            name: "c1",
            genre: genre.rock
        },
        {
            id: 4,
            name: "d1",
            genre: genre.indie
        },
        {
            id: 5,
            name: "e1",
            genre: genre.pop
        }
    ];
    return audioData;
};
