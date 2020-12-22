import okStatus from '../images/ok.png';
import clockStatus from '../images/time.png';
import minusStatus from '../images/minus.png';
import winStatus from '../images/coins.png';
import backStatus from '../images/backward.png';

export const betsArr = [
    {
        id: '00000',
        time: '18:53:36',
        name: 'Offside or Free Kick or Goal',
        // [
        //     {
        //         name: 'Offside',
        //         color: '#D6B2FF'
        //     },
        //     {
        //         name: 'Free Kick',
        //         color: '#A6DDFF'
        //     },
        //     {
        //         name: 'Goal Kick',
        //         color: '#85F2EF'
        //     },
        // ],
        sum: '100$',
        paid: '2.200$',
        statusIcon: okStatus,
        coef: 2.7,
        events: [
            {
                event: "Bet Accepted",
                time: "18:36",
                sum: "0",
                icon: okStatus,
                coef: 2.7,
            },
            {
                event: "Bet Received",
                time: "18:36",
                sum: "-100$",
                icon: clockStatus,
                coef: 2.7,
            },
        ]
    },
    {
        id: '00001',
        time: '18:53:36',
        name: 'Goal or Goal Kick',
        // [
        //     {
        //         name: 'Goal',
        //         color: '#FFC6A6'
        //     },
        //     {
        //         name: 'Goal Kick',
        //         color: '#85F2EF'
        //     },
        // ],
        sum: '100$',
        paid: '2.200$',
        statusIcon: clockStatus,
        icon: 'fas fa-clock',
        coef: 2.7,
        events: [
            {
                event: "Bet Accepted",
                time: "18:36",
                sum: "0",
                icon: okStatus,
                coef: 2.7,
            },
            {
                event: "Bet Received",
                time: "18:36",
                sum: "-100$",
                icon: clockStatus,
                coef: 2.7,
            },
        ]
    },
    {
        id: '00002',
        time: '18:53:36',
        name: 'Goal',
        // [
        //     {
        //         name: 'Goal',
        //         color: '#FFC6A6'
        //     }
        // ],
        sum: '100$',
        paid: '2.200$',
        statusIcon: winStatus,
        coef: 2.7,
        isWinner: true,
        events: [
            {
                event: "Bet Win",
                time: "18:36",
                sum: "+2 500$",
                icon: winStatus,
                coef: 25.5,
            },
            {
                event: "Bet Accepted",
                time: "18:36",
                sum: "0",
                icon: okStatus,
                coef: 3.54,
            },
            {
                event: "Bet Received",
                time: "18:36",
                sum: "-100$",
                icon: clockStatus,
                coef: 3.54,
            },
        ]
    },
    {
        id: '00003',
        time: '18:53:36',
        name: 'Offside',
        // [
        //     {
        //         name: 'Offside',
        //         color: '#D6B2FF'
        //     },
        // ],
        sum: '100$',
        paid: '2.200$',
        statusIcon: backStatus,
        coef: 2.7,
        events: [
            {
                event: "Bet Accepted",
                time: "18:36",
                sum: "0",
                icon: okStatus,
                coef: 2.7,
            },
            {
                event: "Bet Received",
                time: "18:36",
                sum: "-100$",
                icon: clockStatus,
                coef: 2.7,
            },
        ]
    },
    {
        id: '00004',
        time: '18:53:36',
        name: 'Free Kick or Corner Kick',
        // [
        //     {
        //         name: 'Free Kick',
        //         color: '#A6DDFF'
        //     },
        //     {
        //         name: 'Corner Kick',
        //         color: '#FEB2D5'
        //     },
        // ],
        sum: '100$',
        paid: '2.200$',
        statusIcon: minusStatus,
        coef: 2.7,
        events: [
            {
                event: "Bet Accepted",
                time: "18:36",
                sum: "0",
                icon: okStatus,
                coef: 2.7,
            },
            {
                event: "Bet Received",
                time: "18:36",
                sum: "-100$",
                icon: clockStatus,
                coef: 2.7,
            },
        ]
    },
    {
        id: '00005',
        time: '18:53:36',
        name: 'Free Kick or Corner Kick',
        // [
        //     {
        //         name: 'Free Kick',
        //         color: '#A6DDFF'
        //     },
        //     {
        //         name: 'Corner Kick',
        //         color: '#FEB2D5'
        //     },
        // ],
        sum: '100$',
        paid: '2.200$',
        statusIcon: minusStatus,
        coef: 2.7,
        events: [
            {
                event: "Bet Accepted",
                time: "18:36",
                sum: "0",
                icon: okStatus,
                coef: 2.7,
            },
            {
                event: "Bet Received",
                time: "18:36",
                sum: "-100$",
                icon: clockStatus,
                coef: 2.7,
            },
        ]
    },
    {
        id: '00006',
        time: '18:53:36',
        name: 'Free Kick or Corner Kick',
        // [
        //     {
        //         name: 'Free Kick',
        //         color: '#A6DDFF'
        //     },
        //     {
        //         name: 'Corner Kick',
        //         color: '#FEB2D5'
        //     },
        // ],
        sum: '100$',
        paid: '2.200$',
        statusIcon: minusStatus,
        coef: 2.7,
        events: [
            {
                event: "Bet Accepted",
                time: "18:36",
                sum: "0",
                icon: okStatus,
                coef: 2.7,
            },
            {
                event: "Bet Received",
                time: "18:36",
                sum: "-100$",
                icon: clockStatus,
                coef: 2.7,
            },
        ]
    },
    {
        id: '00007',
        time: '18:53:36',
        name: 'Goal',
        // [
        //     {
        //         name: 'Goal',
        //         color: '#FFC6A6'
        //     }
        // ],
        sum: '100$',
        paid: '2.200$',
        statusIcon: winStatus,
        coef: 2.7,
        isWinner: true,
        events: [
            {
                event: "Bet Win",
                time: "18:36",
                sum: "+2 500$",
                icon: winStatus,
                coef: 25.5,
            },
            {
                event: "Bet Accepted",
                time: "18:36",
                sum: "0",
                icon: okStatus,
                coef: 3.54,
            },
            {
                event: "Bet Received",
                time: "18:36",
                sum: "-100$",
                icon: clockStatus,
                coef: 3.54,
            },

        ]
    },
    {
        id: '00008',
        time: '18:53:36',
        name: 'Offside',
        // [
        //     {
        //         name: 'Offside',
        //         color: '#D6B2FF'
        //     },
        // ],
        sum: '100$',
        paid: '2.200$',
        statusIcon: backStatus,
        coef: 2.7,
        events: [
            {
                event: "Bet Accepted",
                time: "18:36",
                sum: "0",
                icon: okStatus,
                coef: 2.7,
            },
            {
                event: "Bet Received",
                time: "18:36",
                sum: "-100$",
                icon: clockStatus,
                coef: 2.7,
            },
        ]
    },
    {
        id: '00009',
        time: '18:53:36',
        name: 'Free Kick or Corner Kick',
        // [
        //     {
        //         name: 'Free Kick',
        //         color: '#A6DDFF'
        //     },
        //     {
        //         name: 'Corner Kick',
        //         color: '#FEB2D5'
        //     },
        // ],
        sum: '100$',
        paid: '2.200$',
        statusIcon: minusStatus,
        coef: 2.7,
        events: [
            {
                event: "Bet Accepted",
                time: "18:36",
                sum: "0",
                icon: okStatus,
                coef: 2.7,
            },
            {
                event: "Bet Received",
                time: "18:36",
                sum: "-100$",
                icon: clockStatus,
                coef: 2.7,
            },
        ]
    },
    {
        id: '00010',
        time: '18:53:36',
        name: 'Free Kick or Corner Kick',
        // [
        //     {
        //         name: 'Free Kick',
        //         color: '#A6DDFF'
        //     },
        //     {
        //         name: 'Corner Kick',
        //         color: '#FEB2D5'
        //     },
        // ],
        sum: '100$',
        paid: '2.200$',
        statusIcon: minusStatus,
        coef: 2.7,
        events: [
            {
                event: "Bet Accepted",
                time: "18:36",
                sum: "0",
                icon: okStatus,
                coef: 2.7,
            },
            {
                event: "Bet Received",
                time: "18:36",
                sum: "-100$",
                icon: clockStatus,
                coef: 2.7,
            },
        ]
    },
    {
        id: '00011',
        time: '18:53:36',
        name: 'Free Kick or Corner Kick',
        // [
        //     {
        //         name: 'Free Kick',
        //         color: '#A6DDFF'
        //     },
        //     {
        //         name: 'Corner Kick',
        //         color: '#FEB2D5'
        //     },
        // ],
        sum: '100$',
        paid: '2.200$',
        statusIcon: minusStatus,
        coef: 2.7,
        events: [
            {
                event: "Bet Accepted",
                time: "18:36",
                sum: "0",
                icon: okStatus,
                coef: 2.7,
            },
            {
                event: "Bet Received",
                time: "18:36",
                sum: "-100$",
                icon: clockStatus,
                coef: 2.7,
            },
        ]
    },
    {
        id: '00012',
        time: '18:53:36',
        name: 'Goal',
        // [
        //     {
        //         name: 'Goal',
        //         color: '#FFC6A6'
        //     }
        // ],
        sum: '100$',
        paid: '2.200$',
        statusIcon: winStatus,
        coef: 2.7,
        events: [
            {
                event: "Bet Win",
                time: "18:36",
                sum: "+2 500$",
                icon: winStatus,
                coef: 25.5,
            },
            {
                event: "Bet Accepted",
                time: "18:36",
                sum: "0",
                icon: okStatus,
                coef: 3.54,
            },
            {
                event: "Bet Received",
                time: "18:36",
                sum: "-100$",
                icon: clockStatus,
                coef: 3.54,
            },

        ]
    },
    {
        id: '00013',
        time: '18:53:36',
        name: 'Offside',
        // [
        //     {
        //         name: 'Offside',
        //         color: '#D6B2FF'
        //     },
        // ],
        sum: '100$',
        paid: '2.200$',
        statusIcon: backStatus,
        coef: 2.7,
        events: [
            {
                event: "Bet Accepted",
                time: "18:36",
                sum: "0",
                icon: okStatus,
                coef: 2.7,
            },
            {
                event: "Bet Received",
                time: "18:36",
                sum: "-100$",
                icon: clockStatus,
                coef: 2.7,
            },
        ]
    },
    {
        id: '00014',
        time: '18:53:36',
        name: 'Free Kick or Corner Kick',
        // [
        //     {
        //         name: 'Free Kick',
        //         color: '#A6DDFF'
        //     },
        //     {
        //         name: 'Corner Kick',
        //         color: '#FEB2D5'
        //     },
        // ],
        sum: '100$',
        paid: '2.200$',
        statusIcon: minusStatus,
        coef: 2.7,
        events: [
            {
                event: "Bet Accepted",
                time: "18:36",
                sum: "0",
                icon: okStatus,
                coef: 2.7,
            },
            {
                event: "Bet Received",
                time: "18:36",
                sum: "-100$",
                icon: clockStatus,
                coef: 2.7,
            },
        ]
    },
    {
        id: '00015',
        time: '18:53:36',
        name: 'Free Kick or Corner Kick',
        // [
        //     {
        //         name: 'Free Kick',
        //         color: '#A6DDFF'
        //     },
        //     {
        //         name: 'Corner Kick',
        //         color: '#FEB2D5'
        //     },
        // ],
        sum: '100$',
        paid: '2.200$',
        statusIcon: minusStatus,
        coef: 2.7,
        events: [
            {
                event: "Bet Accepted",
                time: "18:36",
                sum: "0",
                icon: okStatus,
                coef: 2.7,
            },
            {
                event: "Bet Received",
                time: "18:36",
                sum: "-100$",
                icon: clockStatus,
                coef: 2.7,
            },
        ]
    }
]