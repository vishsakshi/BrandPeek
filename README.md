# BrandPeek – React Native App

## Overview
BrandPeek is a polished brand discovery mobile application built using React Native and Expo.  
The app displays a list of top brands with a beautiful radial gradient background and allows users to view detailed information about each brand.

## Tech Stack
- **React Native** (Expo SDK ~54.0)
- **React Navigation** (Native Stack Navigator)
- **Expo Linear Gradient** & **React Native SVG** (for gradient backgrounds)
- **Axios** (for API calls)
- **MockAPI** (for backend data)

## Backend API

### Why MockAPI?
MockAPI was used to quickly create RESTful endpoints and focus on frontend logic, API integration, and UI implementation without backend complexity.

**API Endpoints:**
- `GET /api/brands` - Fetch list of all brands
- `GET /api/brands/:id` - Fetch detailed information for a specific brand

**Base URL:** `https://6953a3b7a319a928023c1c63.mockapi.io/api`

## Project Structure

```
BrandPeek/
├── src/
│   ├── api/
│   │   └── brandsApi.js          # API service layer with error handling
│   ├── components/
│   │   ├── BrandCard.js          # Reusable brand card component
│   │   ├── ErrorView.js          # Error state component with retry
│   │   ├── Loader.js             # Loading spinner component
│   │   └── SpotlightBackground.js # Radial gradient background
│   ├── constants/
│   │   └── brandImages.js        # Brand logo image mappings
│   ├── navigation/
│   │   └── AppNavigator.js       # Navigation configuration
│   ├── screens/
│   │   ├── HomeScreen.js         # Main screen with brand list
│   │   └── BrandDetailScreen.js  # Brand detail view
│   └── styles/
│       └── gradients.js          # Gradient style definitions
├── assets/
│   ├── brands/                   # Brand logo images
│   └── fonts/                    # Custom Poppins fonts
├── App.js                        # Root app component
├── index.js                      # Expo entry point (registerRootComponent)
├── app.json                      # Expo configuration
├── package.json                  # Dependencies
└── README.md                     # Project documentation



```

### Why This Structure?
1. **Separation of Concerns**: API logic, UI components, and screens are clearly separated
2. **Reusability**: Components like `BrandCard`, `Loader`, and `ErrorView` can be reused across screens
3. **Maintainability**: Centralized constants and styles make updates easier
4. **Scalability**: Easy to add new screens, components, or API endpoints
5. **Industry Standard**: Follows common React Native project organization patterns

## Features
-**Radial Gradient Background**: Custom SVG-based gradient matching the design specification
-**Brand Listing**: Fetches and displays 5-10 brands from API
-**Brand Detail View**: The screen fetches full brand data dynamically using the brand ID from API (no static data)
-**Loading States**: Spinner with background during data fetching
-**Error Handling**: User-friendly error messages with retry functionality
-**Navigation**: Smooth transitions between screens
-**Responsive Design**: Works on various screen sizes
-**Custom Fonts**: Poppins font family for better typography

## Setup & Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- Expo Go app on your mobile device (iOS/Android)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/vishsakshi/BrandPeek.git
   cd BrandPeek
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Run on device**
   - Scan the QR code with Expo Go app (iOS Camera or Android Expo Go)
   - Or press `i` for iOS simulator / `a` for Android emulator

### Alternative: Build APK
```bash
# Install EAS CLI
npm install -g eas-cli

# Configure and build
eas build --platform android --profile preview
```

## Expo Go Link
The Expo Go QR code or APK build link will be shared as part of the submission.

## UI/UX Highlights
- **Gradient Background**: Radial gradient created with React Native SVG for precise control
- **Visual Hierarchy**: Clear typography scale and spacing
- **Smooth Interactions**: Touch feedback on brand cards
- **Error Recovery**: Retry buttons for failed API calls
- **Loading Feedback**: Clear loading indicators

## Error Handling
- Network timeout (10 seconds)
- 404 errors (resource not found)
- Generic error messages with retry functionality
- Graceful fallbacks when API fails

## Notes
- **Backend**: MockAPI service for brand data
- **Project Structure**: Feature-based organization with reusable components
- **Deployment**: Ready for Expo Go sharing and APK building

## Assignment Checklist
- GitHub repo with full code
- README with setup instructions
- API integration with error handling
- Loading and error states
- Radial gradient background
- Navigation between screens
- Clean code structure
- Expo Go deployment ready


For questions or issues, please refer to the repository.
