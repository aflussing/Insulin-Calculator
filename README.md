# Insulin Calculator WebApp

This project is a modern, responsive web application that calculates insulin dosage based on the carbohydrate content of selected food products. It integrates with the [Open Food Facts API](https://world.openfoodfacts.org/) to fetch nutritional data, and it uses [Tailwind CSS](https://tailwindcss.com/) for a modern, responsive design. The application supports both English and Spanish (with automatic detection based on the user's browser) and offers a theme switcher for light and dark modes.

## Features

- **Product Search:**  
  Search for food products by name using the Open Food Facts API.
  
- **Product Preview:**  
  Display product previews with images and store information (if available).

- **Nutritional Table:**  
  Show a detailed nutritional table for a selected product.

- **Insulin Calculation:**  
  Calculate the required insulin units based on:
  - Nutritional data (carbohydrates per 100g)
  - Serving size (grams)
  - Insulin-to-Carb ratio (grams per unit)

- **Internationalization:**  
  Automatic language detection (English/Spanish) with a dropdown to manually change the language.

- **Theme Switching:**  
  Easily toggle between a light and dark theme.

## Technologies

- **HTML/CSS/JavaScript:** Basic web technologies.
- **Tailwind CSS:** For modern and responsive design.
- **Open Food Facts API:** To retrieve nutritional data for food products.

## Getting Started

### Prerequisites

- A modern web browser.
- An internet connection to load the Tailwind CSS CDN and access the Open Food Facts API.

### Installation

1. **Clone or Download the Repository:**  
   You can clone this repository or simply copy the code from the provided HTML file.

2. **Run the Application:**  
   - Open the `index.html` file in your web browser.
   - Alternatively, paste the code into an online editor such as [CodePen](https://codepen.io/).

### Usage

1. **Search for a Product:**  
   - Enter the product name in the search field and click **"Search Product"**.
   - A list of matching products will appear, each showing a preview with an image and store information.

2. **Select a Product:**  
   - Click on a product to view its details.
   - The product details section displays an enlarged image and a nutritional table based on available data.

3. **Calculate Insulin Units:**  
   - Input the serving size (in grams) and your personal insulin-to-carb ratio.
   - Click **"Calculate Insulin Units"** to see the calculated dose.

4. **Change Language/Theme:**  
   - Use the language dropdown at the top-right to switch between English and Spanish.
   - Use the theme dropdown to toggle between light and dark modes.

## Customization

- **Internationalization:**  
  The application uses a JavaScript object to manage translations. You can add more languages or modify the existing texts as needed.

- **Theme Settings:**  
  Theme switching is achieved via Tailwind CSS dark mode. Modify or extend the styling by changing the Tailwind CSS classes in the HTML file.

- **API Integration:**  
  The Open Food Facts API is used for retrieving product data. You can customize the API queries or expand the data displayed.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests for improvements and bug fixes.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [Open Food Facts](https://world.openfoodfacts.org/) for providing the nutritional data API.
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework.
