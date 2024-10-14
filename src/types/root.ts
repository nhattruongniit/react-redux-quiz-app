import { IStateLeaderBoard } from "./leaderboard";
import { IStateQuestion } from "./question";

export type IRootState = {
  question: IStateQuestion;
  leaderboard: IStateLeaderBoard;
};

export type IAction = {
  type: string;
  payload: any;
};
