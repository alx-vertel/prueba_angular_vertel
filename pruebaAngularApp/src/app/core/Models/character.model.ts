export interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
  gender: string;
  origin: Location;
  location: Location;
  created: string;
  status: string;
}

interface Location {
  name: string;
  url: string;
}
