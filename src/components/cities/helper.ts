export enum ColNum {
	Mobile = 3,
	Web = 6
}

export function getColumns(isMobile: boolean) {
	return isMobile ? ColNum.Mobile : ColNum.Web;
}

export function getPages(totalItems: number, perPage: number) {
	return Math.ceil(totalItems / perPage);
}
