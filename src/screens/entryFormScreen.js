
import { journalEntryForm } from "../components/journalEntryForm";

export function EntryFormScreen() {
    return `
        <section id="form-screen" aria-labelledby="entry-form-title" style="background-color: #a89bd1;"
            class="flex flex-col items-center justify-center w-full md:h-screen p-4 text-center transition-colors duration-[400ms] ease-in-out" 
        >

            ${journalEntryForm()}
        </section>
    `;
}



                
                    
                    
                    
                    
                    
                    


                