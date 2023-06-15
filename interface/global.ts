export interface movie {
  id:number,
  title: string;
  release_date: string;
  poster_path: string;
  vote_count: number;
}

export interface movieInterface {
  movie: Array<movie>;
  mainMovie:Array<movie>
}



// export interface Authenticationinterface {
//   authentication: Array<authentication>;
// }
