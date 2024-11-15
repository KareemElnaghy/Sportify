export default interface PartyPost {
	id: number;
	ownerEmail: string;
	member: string;
	eventName: string;
	sport: string;
	location: string;
	description: string;
	startTime: Date;
	endTime: Date;
}
