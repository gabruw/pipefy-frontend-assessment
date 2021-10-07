interface Pipe {
    id: string;
    name: string;
    icon: string;
    color: string;
    public: boolean;
    created_at: Date;
    description: string;
    cards_count: number;
}

export interface FetchPipe {
    pipe: Pipe;
}

export default Pipe;
