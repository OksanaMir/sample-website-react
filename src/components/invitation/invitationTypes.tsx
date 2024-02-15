export type LineOfText = {
	line: string;
};

export type Image = {
	path: string;
	alt: string;
};

export type InvitationObjTypes = {
	id: number;
	name: string;
	isFirst?: boolean;
	isStart?: boolean;
	header?: string;
	heading1?: string;
	heading2?: string;
	text: LineOfText[];
	image?: Image;
};
