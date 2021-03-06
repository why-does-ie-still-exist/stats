export class MatchData {
	public year: string;
	public eventCode: string;
	public teamNumber: string;
	public matchNumber: string;

	public isFailure: boolean;
	public failureReason: string;
	public isSwitch: boolean;
	public isScale: boolean;
	public isVault: boolean;
	public isFoul: boolean;
	public foulCount: string;
	public foulReason: string;
	public cubeCount: string;
}

export class EventTeamData {
	public year: string;
	public eventCode: string;
	public teamNumber: string;

	public matchCount: number;
	public failureCount: number;
	public scale: boolean;
	public switch_cap: boolean;
	public vault: boolean;
	public foulCount: number;
	public cubeAverage: number;
}
