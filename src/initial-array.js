import okStatus from './images/ok.png';
import clockStatus from './images/time.png';
import minusStatus from './images/minus.png';
import winStatus from './images/coins.png';
import backStatus from './images/backward.png';

export const betsArr = [
    {
        id: '00000',
        time: '18:53:36',
        name: 'Offside or Free Kick or Goal Kick',
        // {
            // off: 'Offside',
            // kick: 'Kick',
            // goal: 'Goal',
            // free: 'FreeKick',
            // corner: 'CornerKick'
        // },
        sum: '100$',
        paid: '2.200$',
        statusIcon: {okStatus},
        coef: 2.7,
        events: [
            {
                event: "Bet Received",
                time: "18:36",
                sum: "-100$"
            },
            {
                event: "Bet Accepted",
                time: "18:36",
                sum: "-100$"
            },

        ]
    },
    {
        id: '00001',
        time: '18:53:36',
        name: 'Goal or Goal Kick',
        // {
        //     off: 'Offside',
        //     kick: 'Kick',
        //     goal: 'Goal',
        //     free: 'FreeKick',
        //     corner: 'CornerKick'
        // },
        sum: '100$',
        paid: '2.200$',
        statusIcon: {clockStatus},
        coef: 2.7,
        events: [
            {
                event: "Bet Received",
                time: "18:36",
                sum: "-100$"
            },
            {
                event: "Bet Accepted",
                time: "18:36",
                sum: "-100$"
            },
        ]
    },
    {
        id: '00002',
        time: '18:53:36',
        name: 'Goal',
        // {
        //     off: 'Offside',
        //     kick: 'Kick',
        //     goal: 'Goal',
        //     free: 'FreeKick',
        //     corner: 'CornerKick'
        // },
        sum: '100$',
        paid: '2.200$',
        statusIcon: {winStatus},
        coef: 2.7,
        events: [
            {
                event: "Bet Received",
                time: "18:36",
                sum: "-100$"
            },
            {
                event: "Bet Accepted",
                time: "18:36",
                sum: "0"
            },
            {
                event: "Bet Win",
                time: "18:36",
                sum: "+2 500$"
            },

        ]
    },
    {
        id: '00003',
        time: '18:53:36',
        name: 'Offside',
        // {
        //     off: 'Offside',
        //     kick: 'Kick',
        //     goal: 'Goal',
        //     free: 'FreeKick',
        //     corner: 'CornerKick'
        // },
        sum: '100$',
        paid: '2.200$',
        statusIcon: {backStatus},
        coef: 2.7,
        events: [
            {
                event: "Bet Received",
                time: "18:36",
                sum: "-100$"
            },
            {
                event: "Bet Accepted",
                time: "18:36",
                sum: "0"
            },
        ]
    },
    {
        id: '00004',
        time: '18:53:36',
        name: 'Free Kick or Corner kick',
        // {
        //     off: 'Offside',
        //     kick: 'Kick',
        //     goal: 'Goal',
        //     free: 'FreeKick',
        //     corner: 'CornerKick'
        // },
        sum: '100$',
        paid: '2.200$',
        statusIcon: {minusStatus},
        coef: 2.7,
        events: [
            {
                event: "Bet Received",
                time: "18:36",
                sum: "-100$"
            },
            {
                event: "Bet Accepted",
                time: "18:36",
                sum: "0"
            },
        ]
    },
    {
        id: '00005',
        time: '18:53:36',
        name: 'Free Kick or Corner kick',
        // {
        //     off: 'Offside',
        //     kick: 'Kick',
        //     goal: 'Goal',
        //     free: 'FreeKick',
        //     corner: 'CornerKick'
        // },
        sum: '100$',
        paid: '2.200$',
        statusIcon: {minusStatus},
        coef: 2.7,
        events: [
            {
                event: "Bet Received",
                time: "18:36",
                sum: "-100$"
            },
            {
                event: "Bet Accepted",
                time: "18:36",
                sum: "0"
            },
        ]
    },
    {
        id: '00006',
        time: '18:53:36',
        name: 'Free Kick or Corner kick',
        //  {
        //     off: 'Offside',
        //     kick: 'Kick',
        //     goal: 'Goal',
        //     free: 'FreeKick',
        //     corner: 'CornerKick'
        // },
        sum: '100$',
        paid: '2.200$',
        statusIcon: {minusStatus},
        coef: 2.7,
        events: [
            {
                event: "Bet Received",
                time: "18:36",
                sum: "-100$"
            },
            {
                event: "Bet Accepted",
                time: "18:36",
                sum: "0"
            },
        ]
    }
]