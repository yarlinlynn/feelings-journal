
# Feelings Journal 🌿

A simple personal feelings journal web application that allows users to record their thoughts, feelings, or experiences and return to previous entries whenever they revisit the website.

## 🌱 Project Overview

**Feelings Journal** is a front-end web application designed to provide a simple and calming space for users to reflect on their day.

The application is built around three main screens/components:

1. **Loading / Welcome Screen**

   * Introduces the application.
   * Provides a button to begin writing a journal entry.
   * Clicking the button takes the user to the entry form.

2. **Entry Form Screen**

   * Allows the user to enter information about their feelings and experiences using input fields.
   * When the user clicks the **Save** button, the entered information is collected into an individual JavaScript object.
   * The object is added to an array containing the user's journal entries.
   * The entries are then saved to the browser's `localStorage`.

3. **Journal / Entries Screen**

   * Retrieves previously saved entries from `localStorage`.
   * Renders the saved journal entries to the DOM.
   * Allows the user to view their previous entries when they return to the website.

## Data Storage

The application uses the browser's **localStorage** API to persist journal entries.
Each journal entry is represented as an individual JavaScript object and stored as part of an array.

A simplified example of the data structure is:

```js
{
  date: "2026-10-04",
  feeling: "Happy",
  entry: "Today was a really good day."
}
```

The array of entries is converted to JSON before being stored in localStorage.

When the application loads again, the stored JSON data is retrieved, converted back into JavaScript objects, and rendered to the DOM.

This means journal entries can remain available after the user closes the browser or returns to the website later.

> **Note:** Because the project uses browser localStorage, journal entries are stored locally in the user's browser. They are not stored in a remote database or synced between different devices.

## 🛠️ Technologies Used

* HTML5
* JavaScript
* Tailwind CSS
* Browser localStorage
* GitHub Pages

## 🧩 JavaScript Components

The application is structured around reusable JavaScript components/screens.

The main functionality includes:

* Switching between screens/components.
* Collecting user input from form fields.
* Creating journal entry objects.
* Adding entries to an array.
* Saving entries to localStorage.
* Retrieving saved entries.
* Rendering journal entries dynamically to the DOM.

## 🎨 Design & Inspiration

The design and concept of this project were inspired by the **Daily Feelings** project by **Btelgeuse**:

> Inspired by [Btelgeuse/APP---Daily-Feelings](https://github.com/Btelgeuse/APP---Daily-Feelings).

The project was used as inspiration for the overall feelings-journal concept and visual direction, including the use of imagery.

All original code and implementation for **Feelings Journal** is my own work.
Credit and thanks to **Btelgeuse** for the original inspiration:

<br/>

## 📁 Project Structure

The project currently follows a Vite-based structure:

```text
feelings-journal/
├── .github/
│   └── workflows/
├── images/
├── public/
├── src/
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```


### Running the Project Locally

Clone the repository:
```bash
git clone https://github.com/yarlinlynn/feelings-journal.git
```

Navigate into the project:
```bash
cd feelings-journal
```

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

## 🎯 Project Goals

The main goals of this project are to:

* Practice building interactive interfaces with JavaScript.
* Work with reusable components/screens.
* Understand DOM manipulation.
* Practice handling form input.
* Learn how to create and manage arrays of objects.
* Use localStorage for client-side data persistence.
* Render stored data dynamically to the DOM.
* Build and deploy a front-end application using GitHub Pages.
* Create a simple and enjoyable user experience for personal reflection.


## 📄 License

This project is open-source and free to use.

