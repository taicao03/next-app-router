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

export interface Creator {
  fields: {
    ids: [];
    category_ids: [];
  };
}
