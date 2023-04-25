// Sidebar Imports

import {
    UilEstate,
    UilClipboardNotes,
    UilUserPlus,
    UilAmbulance,
    UilUserAlt,
    UilSignOutAlt,
} from '@iconscout/react-unicons';

// Sidebar Data
export const SidebarData = [
    {
        icon: UilEstate,
        heading: "Dashboard",
    },
    {
        icon: UilUserPlus,
        heading: "Patients",
    },
    {
        icon: UilClipboardNotes,
        heading: "Appointments",
    },
    {
        icon: UilAmbulance,
        heading: "Emergency",
    },
];


export const CardsData = [
    {
        title: 'O2 Levels',
        color: {
            backGround: 'linear-gradient(180deg, #000000 0%, #434343 100%)',
            boxshadow: '0px 10px 20px 0px #e0dede'
        },
        barValue: 90,
        value: '70',
        series: [
            {
                name: 'A',
                data: [96, 95, 96, 98, 98, 96, 97],
                
            },
            {
                name: 'B',
                data: [99, 98, 99, 99, 94, 96, 98],
            },
            {
                name: 'C',
                data: [91, 94, 95, 92, 95, 91, 94],
            },
            {
                name: 'D',
                data: [85, 87, 88, 86, 88, 90, 85],
            },
            {
                name: 'E',
                data: [91, 94, 95, 92, 95, 91, 94],
            },
            {
                name: 'F',
                data: [99, 98, 99, 99, 94, 96, 98],
            },
            {
                name: 'G',
                data: [97, 95, 98, 98, 99, 97, 96],
            },
            {
                name: 'H',
                data: [93, 95, 97, 94, 93, 98, 93],
            },
        ]
    },
    {
        title: 'Sleep Track',
        color: {
            backGround: 'linear-gradient(180deg, #000000 0%, #434343 100%)',
            boxshadow: '0px 10px 20px 0px #e0dede'
        },
        barValue: 60,
        value: '70',
        series: [
            {
                name: 'A',
                data: [6, 8, 6.5, 7.25, 5.5, 7.70, 8.31],
            },
            {
                name: 'B',
                data: [9, 7.2, 8.35, 6.1, 7.5, 8.89, 5.90],
            },
            {
                name: 'C',
                data: [4.6, 6.2, 5, 4.4, 8.76, 8.95, 8.79],
            },
            {
                name: 'D',
                data: [7.5, 7.1, 7.98, 6.8, 7, 8, 7.4],
            },
            {
                name: 'E',
                data: [9.98, 8, 11, 7.25, 8.4, 7.70, 8],
            },
            {
                name: 'F',
                data: [6.5, 7.98, 7, 5.90, 6.8, 7.8, 7.74],
            },
            {
                name: 'G',
                data: [8.09, 6, 7.03, 4.19, 7, 7.98, 6.08],
            },
            {
                name: 'H',
                data: [8.37, 8, 7, 7.25, 8.35, 8.70, 6.7],
            },
        ]
    },
    {
        title: 'Calories Burn',
        color: {
            backGround: 'linear-gradient(180deg, #000000 0%, #434343 100%)',
            boxshadow: '0px 10px 20px 0px #e0dede'
        },
        barValue: 70,
        value: '70',
        series: [
            {
                name: 'A',
                data: [96, 95, 96, 98, 98, 96, 97],
            },
            {
                name: 'A',
                data: [96, 95, 96, 98, 98, 96, 97],
            },
            {
                name: 'A',
                data: [96, 95, 96, 98, 98, 96, 97],
            },
            {
                name: 'A',
                data: [96, 95, 96, 98, 98, 96, 97],
            },
            {
                name: 'A',
                data: [96, 95, 96, 98, 98, 96, 97],
            },
            {
                name: 'A',
                data: [96, 95, 96, 98, 98, 96, 97],
            },
            {
                name: 'A',
                data: [96, 95, 96, 98, 98, 96, 97],
            },
            {
                name: 'A',
                data: [96, 95, 96, 98, 98, 96, 97],
            },
        ]
    },
    
]