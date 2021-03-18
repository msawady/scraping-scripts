import fetch from "node-fetch";
import { JSDOM } from "jsdom";

const selector = '#quote-header-info > div.My\\(6px\\).Pos\\(r\\).smartphone_Mt\\(6px\\) > div.D\\(ib\\).Va\\(m\\).Maw\\(65\\%\\).Ov\\(h\\) > div > span.Trsdu\\(0\\.3s\\).Fw\\(b\\).Fz\\(36px\\).Mb\\(-4px\\).D\\(ib\\)'
export async function price(sym) {
    const res = await fetch(`https://finance.yahoo.com/quote/${sym}`)
    const html = await res.text();
    const dom = new JSDOM(html);
    const document = dom.window.document;

    return document.querySelector(selector).textContent.trim();
}

export async function prices(syms) {
    return Promise.all(syms.map(async sym => {
        const p = await price(sym)
        return [sym, p]
    }))
}
