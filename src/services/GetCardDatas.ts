export type CardData = {
    question:string,
    answer:string,
    point:number,
    onNextCard: () => void,
    id:number
}

export const fetchCards = async (): Promise<CardData[]> => {
    return await fetch("cards.json").then(res => res.json());
}