import { Tag } from "./Tag";

export interface Project {
    id: number;
    name: string;
    summary: string;
    description: string;
    projectLink: string;
    projectLink2: string;
    pictures: string[];
    tags: Tag[];
}