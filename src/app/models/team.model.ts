import { User } from './User.model'
import { chartData } from './chartData.model';

export class Team{
    artId: number;
    artName: string;
    teamId: number;
    teamName: string;
    teamMembers: User[];
    teamData: chartData[];

}