import type { InvitationObjTypes } from './invitationTypes';

export const invitationTexts = (): InvitationObjTypes[] => [
	{
		name: 'Front page',
		id: 1,
		isFirst: true,
		heading1: 'Welcome to our comunity',
		heading2: 'If you are interested in ',
		text: [
			{ line: 'visiting new cities' },
			{ line: 'in Czechia' },
			{
				line: 'where yo can'
			}
		],
		image: { path: 'city', alt: 'city' }
	},
	{
		name: 'Museums',
		id: 2,
		isStart: true,
		text: [{ line: '...visit lots of museums,... ' }],
		image: { path: 'delivery', alt: 'delivery' }
	},
	{
		name: 'ToDo',
		id: 2,
		text: [
			{ line: '...or participate in  different sports activities,...' }
		],
		image: { path: 'find-friends', alt: 'find-friends' }
	},
	{
		name: 'ToGo',
		id: 2,
		text: [{ line: 'see beautiful nature...' }],
		image: { path: 'activities', alt: 'activities' }
	},
	{
		name: 'Beverage',
		id: 2,
		text: [{ line: ' ... and taste the best Czech beer or wine.' }],
		image: { path: 'notebook', alt: 'notebook' }
	},
	{
		name: 'WeHelp',
		id: 2,
		text: [{ line: ' And we are here to make your experience better!' }],
		image: { path: 'connected', alt: 'connected' }
	}
];
