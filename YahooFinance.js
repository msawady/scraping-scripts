import fetch from "node-fetch";
import { JSDOM } from "jsdom";

const selector = '#quote-header-info > div.My\\(6px\\).Pos\\(r\\).smartphone_Mt\\(6px\\) > div.D\\(ib\\).Va\\(m\\).Maw\\(65\\%\\).Ov\\(h\\) > div > span.Trsdu\\(0\\.3s\\).Fw\\(b\\).Fz\\(36px\\).Mb\\(-4px\\).D\\(ib\\)'
export async function run(sym) {
    const res = await fetch(`https://finance.yahoo.com/quote/${sym}`)
    const html = await res.text();
    const dom = new JSDOM(html);
    const document = dom.window.document;
    const price = document.querySelector(selector).textContent.trim();

    console.log(price);
}
