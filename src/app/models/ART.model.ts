import { Team } from './team.model'
import { User } from './User.model';

export class ART{
    artid: number;
    artName: string;
    teams: Team[];
    member: User[];
}