export interface BicycleParkingFacility {
  datasetid: string;
  recordid: string;
  fields: Field;
  geometry: {type: string; coordinates: [number, number]};
}

export interface OccupancyBicycleParkingFacilities {
  nhits: number;
  parameters: Parameter;
  records: BicycleParkingFacility[];
  'face_groups': FacetGroup[];
}

interface Field {
  occupiedplaces: number;
  id: string;
  facilityname: string;
  time: string;
  freeplaces: number;
  locatie: [number, number];
  totalplaces: number;
}

interface Parameter {
  dataset: string;
  timezone: string;
  rows: number;
  start: number;
  format: string;
  facet: string[];
}

interface Facet {
  count: number;
  path: string;
  state: string;
  name: string;
}

interface FacetGroup {
  facets: Facet[];
}
