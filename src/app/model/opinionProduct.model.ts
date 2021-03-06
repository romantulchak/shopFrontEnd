import { Product } from './product.model';
import { User } from './user.model';
import { Replay } from './replay.model';

export class OpinionProduct{
    id?: number;
    commentToProduct: Product;
    user?: User;
    text: string;
    advantages: string;
    dateTime?: string;
    disadvantages: string;
    rating:number;
    likes?: any[];
    meLiked?: boolean;
    meDisliked?:boolean;
    dislikes?: any[];
    replays?: Replay[];
}