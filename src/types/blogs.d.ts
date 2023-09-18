export interface Blog {
  id?: number;
  title: string;
  content: string;
}

export interface Pokemon {
  name: string;
  url: string;
}

export interface Test {
  name: string;
  avatar: string;
  age: string;
  description: string;
}

export interface Contact {
  name: string;
  avatar: string;
  age: string;
  description: string;
}

export interface FomatField {
  page: number;
  limit: number;
  // fields: {
  //   ids: [];
  //   category_ids: [];
  // };
}

export interface Creator {
  fields: {
    ids: [];
    category_ids: [];
  };
}
