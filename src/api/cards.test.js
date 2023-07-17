import {fetchCards} from "./cards";
import { CARDS } from "../constants";

global.fetch = jest.fn()

it('fetch cards', async  () => {
    fetch.mockResolvedValue({
        json: () => Promise.resolve(CARDS)
    })
    const cards = await fetchCards()
    expect(cards).toEqual(CARDS)
}); 