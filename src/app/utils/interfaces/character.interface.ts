export interface ICharacter {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: IBaseRelation,
  location: IBaseRelation,
  image: string,
  episode: string[],
  url: string,
  created: string
}


interface IBaseRelation {
  id?: number,
  name: string
}
