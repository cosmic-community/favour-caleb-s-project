// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Image structure used by Cosmic file metafields
export interface CosmicImage {
  url: string;
  imgix_url: string;
}

// Category object
export interface Category extends CosmicObject {
  type: 'categories';
  metadata: {
    name?: string;
    description?: string;
  };
}

// Project object
export interface Project extends CosmicObject {
  type: 'projects';
  metadata: {
    title?: string;
    description?: string;
    client?: string;
    category?: Category;
    main_image?: CosmicImage;
    gallery?: CosmicImage[];
    completion_date?: string;
  };
}

// Cosmic API response wrapper
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

// Type guards
export function isProject(obj: CosmicObject): obj is Project {
  return obj.type === 'projects';
}

export function isCategory(obj: CosmicObject): obj is Category {
  return obj.type === 'categories';
}