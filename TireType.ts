enum tiretype {"Snow", "HighPerformance", "Economical"};

export class TireType {
    constructor (protected name : string) {
        static var tiretypenames = [
            {
                id: 1,
                type: tiretype.Snow
            },
            {
                id: 2,
                type: tiretype.HighPerformance
            },
            {
                id: 1,
                type: tiretype.Economical
            }
        ];
    }
}