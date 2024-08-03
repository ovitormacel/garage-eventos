import { NextApiRequest, NextApiResponse } from "next"

export type Event = {
    id: number,
    name: string,
    description: string,
    date: {
        day: number,
        month: number,
        year: number,
        hour: number,
        minutes: number,
    },
    classification: number,
    ticketPrice: number,
    cover: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    const {id} = req.query;

    let events: Event[];
    let dynamicEvent;
  
    try {
        events = await fetch("http://localhost:3000/api/getAllNextEvents").then(res => res.json());
    } catch (error) {
        events = []
    }

    if(events) {
        dynamicEvent = events.find(event => event.id == Number(id));

        if(!dynamicEvent) {
            dynamicEvent = {message: "Evento não encontrado"}
        }
    }

    res.status(200).json(dynamicEvent)
}