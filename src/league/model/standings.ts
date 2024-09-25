//generate standings model from json response

export class Standings {
    public has_next: boolean;
    public page: number;
    public results: number;
    public total_results: number;
    public has_previous: boolean;
    public page_size: number;
    public total_pages: number;
    public standings: Standing[];
}