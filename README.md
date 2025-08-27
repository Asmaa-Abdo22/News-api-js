# 📰 Overview  
A modern, responsive news application that fetches and displays news articles from various countries and categories using a news API.  

## 🚀 Setup Instructions  
This project requires a **NewsAPI API Key** to work.  

1. Get your free API key from [NewsAPI.org](https://newsapi.org).  
2. Open the project code and replace `YOUR_API_KEY_HERE` in `script.js` with your own API key:

   
   ```js
   const response = await fetch(
     `https://newsapi.org/v2/top-headlines?country=${countrycode}&category=${category}&apiKey=YOUR_API_KEY_HERE`
   );
## 📸 Screenshot  
![Screenshot](https://github.com/user-attachments/assets/8025f9c1-ace8-4aea-ae60-2f76ffedc836)  

## 🛠️ Technologies Used  
- **HTML5**  
- **CSS3**  
- **JavaScript (ES6+)**  
- **Bootstrap 5**  
- **FontAwesome Icons**  
- **News API (external API integration)**  

## ✨ Features  
- 🌍 **Multi-Country News**: Switch between news from United States, Egypt, Japan, and France  
- 📰 **Category Filtering**: Browse news by Business, Sports, Health, and General categories  
- 📱 **Responsive Design**: Mobile-friendly interface with collapsible sidebar  
- 🎨 **Modern UI**: Clean, professional news layout with card-based design  
- 📌 **Fixed Navigation**: Sticky navbar for easy access to country filters  
- 📂 **Sidebar Navigation**: Collapsible category sidebar for mobile devices  

⚠️ **Note**:  
If no news articles are displayed, it may be due to API restrictions, rate limits, or lack of available news for the selected country/category.  

---
👩‍💻 Developed by [Asmaa Abdo](https://github.com/asmaa-abdo22)  
