import { renderEntries } from "./renderEntries.js";

export function desktopEntries(entries) {
    if(entries === 0) {
        return `<p>No entries saved yet.</p>`;
    }

    return `
        <div class="flex flex-col gap-4 pl-1 pr-1">
            <p>desktop screen</p>
            ${entries.map( (entry) => renderEntries(entry)).join("")}
        </div>
    `
}