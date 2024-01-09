export const BAGS_DATA = [
    {
        id: 4238,
        clothType: 'linen',
        bagName: 'bag',
        bagSize: 6,
        reagents: [
            {
                id: 2589,
                name: 'cloth',
                type: 'linen',
                count: 6, 
                perBolt: 3,
                bolt: {
                    id: 2996,
                    count: 2,
                }
            },
            {
                id: 2320,
                name: 'thread',
                type: 'coarse',
                count: 3, 
                price: 10 // cp
            }
        ],
    },
    {
        id: 4240,
        clothType: 'wool',
        bagName: 'bag',
        bagSize: 8,
        reagents: [
            {
                id: 2592,
                name: 'cloth',
                type: 'wool',
                count: 9, 
                perBolt: 3,
                bolt: {
                    id: 2997,
                    count: 3,
                }
            },
            {
                id: 2321,
                name: 'thread',
                type: 'fine',
                count: 1,
                price: 1 // sp
            }
        ]
    },
    {
        id: 4245,
        clothType: 'silk',
        bagName: 'pack',
        bagSize: 10,
        reagents: [
            {
                id: 4306,
                name: 'cloth',
                type: 'silk',
                count: 12, 
                perBolt: 4,
                bolt: {
                    id: 4305,
                    count: 3
                }
            },
            {
                id: 4234,
                name: 'leather',
                type: 'heavy',
                count: 2
            },
            {
                id: 2321,
                name: 'thread',
                type: 'fine',
                count: 3,
                price: 1, // sp
            },
        ]
    },   
]