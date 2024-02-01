Installation
To run the application locally, follow these steps:

bash
Copy code
# Install dependencies
npm install

# Run the application
npm run serve
Visit http://localhost:8080 in your browser to see the application.

Folder Structure
src/
assets/: Contains language files and other static assets.
components/: Vue components used in the application.
views/: Vue views or pages.
main.js: Entry point of the application.
Internationalization
The application uses vue-i18n for managing translations. Language files are stored in the src/assets/lang folder.

Components
Home.vue
The main view component that includes a language switcher and renders the Form component. It handles the dynamic loading of form data based on the selected language.

Form.vue
A component responsible for rendering the dynamic form based on the provided JSON data. It includes a form submission method and basic styling.

Usage
To use the application:

Run the application using npm run serve.
Visit http://localhost:8080 in your browser.
Switch between languages using the language switcher.
Language Switcher
The language switcher allows users to change the application language dynamically. It uses a dropdown menu with language options.

Customization
Customize the application by modifying the form data JSON files, adjusting language codes, and updating styling in the components.

Contributing
Contributions are welcome! If you find any issues or have suggestions, please open an issue or submit a pull request.
