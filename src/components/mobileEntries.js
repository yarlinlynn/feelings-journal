import { renderEntries } from "./renderEntries.js";

export function mobileEntries(entries) {
    if(entries === 0) {
        return `<p>No entries saved yet.</p>`;
    }

    return `
        <div class="flex flex-col gap-4 pl-1 pr-1">
            <p>mobile screen</p>

            ${entries.map( (entry) => renderEntries(entry)).join("")}
        </div>
    `
}

// <div class="bg-[url('/images/notebook.png')] bg-no-repeat bg-[-14rem_-8rem] bg-[175%] h-[70vh]">
