
import { emotions } from "../utils/data.js";

export function emotionButtons() {
    return `
        ${emotions.map( (emotion) => `
            <button type="button" class="emotion-btn" aria-label="${emotion.name}" data-color="${emotion.color}" aria-pressed="false">
                <img src="./images/${emotion.image}" alt="${emotion.name}" loading="lazy" />
                <p aria-hidden="true">${emotion.name}</p>
            </button>
        `).join("")}
    `;
}


