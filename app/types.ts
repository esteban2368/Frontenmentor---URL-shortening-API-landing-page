export interface ShortenedLinks{
    id:string;
    url: string;
    shortenLink: string
}

export interface setShortenedLinks {
    stateForm: any | null;
    onShortenedLinksChange: (newLink : ShortenedLinks[] | null) => void;
    shortenedLinks: ShortenedLinks[] | null
}