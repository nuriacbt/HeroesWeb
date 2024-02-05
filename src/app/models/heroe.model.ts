export interface Heroe {
    id: string;
    name: string;
    imageUrl: string;
    intelligence: number;
    speed: number;
    combat: number;
}

export const CREATE_MODE = 'create';
export const EDIT_MODE = 'edit'; 
