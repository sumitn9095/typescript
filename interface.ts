export interface Ivehicle {
    name: string;
    color: string;
    allWheelDrive: boolean;
    soundSystem: Iaudible;
}

export interface Iaudible {
    isPlaying: boolean;
    turnOn(): void;
    playSelection(P: number): void;
    turnOff(): void;
}

// export var aaa: Iaudible = {
//     isPlaying: false,
//     turnOn() {
//         this.isPlaying = true;
//         console.log('music playing');
//     },
//     playSelection(P : number) {
//         console.log(`ddssds ${P}`);
//         let getAllAudioData = audioData();
//         let playingSong: any[] = [];
//         for (let audioSongs of getAllAudioData) {
//             //console.log(audioSongs.name);
//             playingSong.push(audioSongs.id, audioSongs.name, audioSongs.genre);
//         }
//         if(this.isPlaying) {
//             console.log(`Track ${P} is playing`);
//         }
//     },
//     turnOff() {
//         this.isPlaying = false;
//         console.log('music has stopped');
//     },
// }


//console.log(playingSong);
