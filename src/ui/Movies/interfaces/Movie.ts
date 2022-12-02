export interface Movie {
    description: string;
    images: PosterArt;
    releaseYear: number;
    title: string;
}

export interface PosterArt {
    height: number;
    url: string;
    width: number;
}