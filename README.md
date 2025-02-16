# Insulin Calculator

Insulin Calculator is a web application designed to help people with diabetes calculate their insulin doses based on the carbohydrate content of foods. The app allows users to search for products, view nutritional information, and calculate the required insulin units based on serving size and individual insulin-to-carb ratios.

## Features

- Product search using the Open Food Facts database
- Bilingual support (English and Spanish)
- Display of nutritional information for selected products
- Calculation of insulin units based on carbohydrate content
- Responsive design with light and dark mode support

## Technologies Used

- Next.js 13 (App Router)
- React
- TypeScript
- Tailwind CSS
- shadcn/ui components
- next-themes for theme management

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   \`\`\`
   git clone https://github.com/yourusername/insulin-calculator.git
   cd insulin-calculator
   \`\`\`

2. Install the dependencies:
   \`\`\`
   npm install
   \`\`\`

3. Run the development server:
   \`\`\`
   npm run dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

1. Select your preferred language (English or Spanish) using the language selector in the top-left corner.
2. Enter a product name in the search bar and click the "Search Product" button.
3. From the search results, click on a product to view its nutritional information.
4. Enter your serving size (in grams) and your insulin-to-carb ratio.
5. Click the "Calculate Insulin Units" button to get the recommended insulin dose.

## Project Structure

- \`app/\`: Contains the main application pages and layout
- \`components/\`: Reusable React components
- \`contexts/\`: React context for language management
- \`utils/\`: Utility functions and translations

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Disclaimer

This application is for informational purposes only and is not a substitute for professional medical advice. Always consult with a healthcare professional before making any changes to your insulin regimen.

## License

This project is open source and available under the [MIT License](LICENSE).

