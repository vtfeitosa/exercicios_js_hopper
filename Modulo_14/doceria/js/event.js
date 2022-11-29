export default function createEvent(url){
    const myEvent = new CustomEvent('onstatechange', {detail: {url: url}})
    return myEvent;
}