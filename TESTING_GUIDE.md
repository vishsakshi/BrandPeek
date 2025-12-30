# 🧪 BrandPeek - Complete Testing Guide

This guide will help you test all scenarios, especially error cases, to ensure your app works perfectly for the internship submission.

---

## 📋 Pre-Testing Setup

### 1. Start the Development Server
```bash
cd BrandPeek
npm start
```

### 2. Open on Device
- **Option A**: Scan QR code with Expo Go app
- **Option B**: Press `i` for iOS simulator or `a` for Android emulator

### 3. Test Tools Needed
- Your phone with Expo Go installed
- Ability to toggle WiFi/Mobile Data on/off
- Browser to check API (optional)

---

## ✅ Test Scenario 1: Normal Flow (Happy Path)

### Steps:
1. Open the app
2. Wait for brands to load
3. Tap on a brand card
4. View brand details
5. Tap "Follow" button
6. Go back to home screen

### Expected Results:
- ✅ **Home Screen**:
  - Radial gradient background visible
  - "Top Brands Today" header appears
  - "Discover leading global brands" subtitle
  - 5-10 brand cards displayed with logos and names
  - Each card shows brand name and tagline
  - Cards are tappable

- ✅ **Loading State** (brief moment):
  - White spinner appears in center
  - "Loading brands..." text below spinner
  - Gradient background visible behind loader

- ✅ **Brand Detail Screen**:
  - Same gradient background
  - Brand logo displayed (large, centered)
  - Brand name in large white text
  - Description text
  - "Brand Overview" section with:
    - Founded year
    - Industry
    - Headquarters
  - Tags displayed (if available)
  - White "Follow" button at bottom
  - Smooth navigation transition

- ✅ **Navigation**:
  - Back button works (swipe or back button)
  - Returns to home screen
  - Home screen still shows loaded brands

---

## ⚠️ Test Scenario 2: Network Error (No Internet)

### Steps:
1. **Before opening app**: Turn off WiFi and Mobile Data
2. Open the app
3. Wait and observe
4. Tap "Retry" button
5. Turn internet back on
6. Tap "Retry" again

### Expected Results:

- ✅ **Initial Load**:
  - Brief loading spinner appears
  - Then error screen shows:
    - ⚠️ Warning icon (emoji)
    - Error message: "Failed to fetch brands" or similar
    - "Retry" button appears
    - Gradient background still visible

- ✅ **Retry Without Internet**:
  - Loading spinner appears again
  - Error message returns
  - App doesn't crash

- ✅ **Retry With Internet**:
  - Loading spinner appears
  - Brands load successfully
  - Home screen displays normally

---

## ⚠️ Test Scenario 3: Slow Network / Timeout

### Steps:
1. Use a slow network (throttle connection if possible)
2. Open the app
3. Observe loading behavior

### Expected Results:
- ✅ Loading spinner shows for up to 10 seconds
- ✅ If timeout occurs:
  - Error message appears
  - "Retry" button available
  - App remains stable

---

## ⚠️ Test Scenario 4: API Returns Empty Array

### How to Test:
**Option A**: Modify API temporarily
- In `src/api/brandsApi.js`, temporarily return `[]`:
```javascript
export async function getBrands() {
  // Temporarily return empty array
  return [];
}
```

**Option B**: Check if MockAPI returns empty (unlikely)

### Expected Results:
- ✅ App loads successfully
- ✅ No crash
- ✅ Home screen shows:
  - Header "Top Brands Today"
  - Subtitle
  - No brand cards (empty list)
  - No error message (empty is valid)

---

## ⚠️ Test Scenario 5: Brand Detail - Network Error

### Steps:
1. Load home screen successfully (with internet)
2. Turn off internet
3. Tap on a brand card
4. Observe what happens

### Expected Results:
- ✅ Navigation to detail screen happens
- ✅ Loading spinner appears
- ✅ Error screen shows:
  - ⚠️ Warning icon
  - Error message: "Failed to load brand details" or "Brand not found"
  - "Retry" button available
  - Gradient background visible

- ✅ **Retry Flow**:
  - Turn internet back on
  - Tap "Retry"
  - Brand details load successfully

---

## ⚠️ Test Scenario 6: Brand Detail - Invalid ID (404)

### How to Test:
**Option A**: Modify navigation temporarily
- In `HomeScreen.js`, change navigation to pass invalid ID:
```javascript
navigation.navigate("BrandDetail", { brand: { id: 99999 } });
```

**Option B**: Manually test with non-existent brand ID

### Expected Results:
- ✅ Error screen appears
- ✅ Error message: "Brand not found"
- ✅ "Retry" button available
- ✅ App doesn't crash
- ✅ Can navigate back

---

## ⚠️ Test Scenario 7: API Server Down / 500 Error

### How to Test:
**Option A**: Use wrong API URL temporarily
- In `src/api/brandsApi.js`, change URL:
```javascript
const API_BASE_URL = "https://invalid-url-that-does-not-exist.com/api";
```

**Option B**: MockAPI might be down (rare)

### Expected Results:
- ✅ Error message appears
- ✅ Specific error or generic "Failed to fetch brands"
- ✅ "Retry" button available
- ✅ App remains stable
- ✅ No white screen or crash

---

## 🔄 Test Scenario 8: App Reload / Refresh

### Steps:
1. Load app successfully
2. Navigate to brand detail
3. Reload app (shake device → "Reload" in Expo Go)
4. Or close and reopen app

### Expected Results:
- ✅ App reloads to home screen
- ✅ Fresh API call made
- ✅ Loading state appears
- ✅ Brands load again
- ✅ No cached errors

---

## 📱 Test Scenario 9: Different Screen Sizes

### Steps:
1. Test on different devices/simulators:
   - Small phone (iPhone SE)
   - Large phone (iPhone Pro Max)
   - Tablet (if available)

### Expected Results:
- ✅ Gradient covers full screen
- ✅ Text is readable
- ✅ Brand cards fit properly
- ✅ No content cut off
- ✅ SafeAreaView works (no notch overlap)

---

## 🎨 Test Scenario 10: UI/UX Details

### Visual Checks:
- ✅ **Gradient Background**:
  - Radial gradient visible on all screens
  - Dark blue/black gradient from top to bottom
  - Matches screenshot (if provided)

- ✅ **Typography**:
  - "Top Brands Today" is bold and large
  - Brand names are readable
  - Descriptions are clear

- ✅ **Spacing**:
  - Cards have proper padding
  - Content doesn't touch screen edges
  - Good visual hierarchy

- ✅ **Interactions**:
  - Cards respond to touch (visual feedback)
  - Follow button is tappable
  - Smooth scrolling

---

## 🔍 Test Scenario 11: Edge Cases

### 11.1: Very Long Brand Names
**Expected**: Text wraps or truncates gracefully

### 11.2: Very Long Descriptions
**Expected**: Text scrolls properly, doesn't break layout

### 11.3: Missing Brand Logo
**Expected**: Placeholder or empty space (no crash)

### 11.4: Rapid Navigation
**Steps**: Quickly tap multiple brands
**Expected**: No crashes, navigation works smoothly

### 11.5: Background/Foreground
**Steps**: 
1. Open app
2. Switch to another app
3. Come back
**Expected**: App resumes normally

---

## 📊 Test Scenario 12: Performance

### Checks:
- ✅ App loads within 2-3 seconds (with good internet)
- ✅ Smooth scrolling (60fps)
- ✅ No lag when tapping cards
- ✅ Images load reasonably fast
- ✅ No memory leaks (use for 5+ minutes)

---

## 🐛 Common Issues to Watch For

### ❌ Red Flags (Should NOT Happen):
1. **White Screen of Death**: App shows blank white screen
2. **Crash**: App closes unexpectedly
3. **Infinite Loading**: Spinner never stops
4. **No Error Message**: App just hangs on error
5. **Broken Navigation**: Can't go back or navigate
6. **Missing Background**: Gradient doesn't show
7. **Overlapping Text**: Content overlaps or cuts off
8. **Unresponsive Buttons**: Buttons don't respond to taps

### ✅ Green Flags (Should Happen):
1. **Graceful Errors**: Always shows error message
2. **Retry Works**: Can recover from errors
3. **Loading States**: Always shows loading indicator
4. **Smooth Navigation**: Transitions are smooth
5. **Consistent UI**: Same gradient on all screens
6. **Responsive**: App responds to all interactions

---

## 📝 Testing Checklist

Print this checklist and mark each item:

### Home Screen
- [ ] Gradient background visible
- [ ] Header "Top Brands Today" shows
- [ ] Subtitle shows
- [ ] Brands load successfully
- [ ] Loading spinner appears during load
- [ ] Error screen shows if API fails
- [ ] Retry button works
- [ ] Brand cards are tappable
- [ ] Cards show logos and names

### Brand Detail Screen
- [ ] Gradient background visible
- [ ] Brand logo displays
- [ ] Brand name shows
- [ ] Description shows
- [ ] Brand details (founded, industry, etc.) show
- [ ] Tags display (if available)
- [ ] Follow button visible and tappable
- [ ] Loading spinner shows during load
- [ ] Error screen shows if API fails
- [ ] Retry button works
- [ ] Back navigation works

### Error Scenarios
- [ ] No internet → Error shows
- [ ] Slow network → Timeout handled
- [ ] Invalid brand ID → Error shows
- [ ] API down → Error shows
- [ ] All errors have retry button
- [ ] Retry actually works

### Navigation
- [ ] Home → Detail works
- [ ] Detail → Home (back) works
- [ ] Can navigate multiple times
- [ ] No navigation stack issues

### Visual/UX
- [ ] Gradient matches design
- [ ] Text is readable
- [ ] Spacing is good
- [ ] No content cut off
- [ ] SafeAreaView works
- [ ] Smooth animations

---

## 🎥 Screen Recording Tips

When recording your 2-minute video:

### Minute 1: Code Walkthrough
1. **Show folder structure** (10 seconds)
   - Open VS Code/editor
   - Show `src/` folder
   - Explain: "Here's my organized structure with screens, components, API, etc."

2. **Show key files** (20 seconds)
   - Open `brandsApi.js`: "API layer with error handling"
   - Open `HomeScreen.js`: "Main screen with loading and error states"
   - Open `ErrorView.js`: "Reusable error component with retry"

3. **Explain decisions** (30 seconds)
   - "I chose MockAPI because..."
   - "I structured folders this way because..."

### Minute 2: Live Demo
1. **Normal flow** (20 seconds)
   - Open app
   - Show brands loading
   - Tap brand → show details
   - "As you can see, API calls work perfectly"

2. **Error handling** (30 seconds)
   - Turn off internet
   - Show error screen
   - Tap retry (still no internet)
   - Turn internet back on
   - Tap retry → shows success
   - "Error handling works with retry functionality"

3. **Wrap up** (10 seconds)
   - "App is ready for Expo Go deployment"
   - Show QR code or link

---

## 🔧 Quick Test Commands

### Test with Different Scenarios:

**1. Test with Network Throttling (Chrome DevTools):**
- Open Chrome DevTools
- Network tab → Throttling → Slow 3G
- Test app behavior

**2. Test API Directly:**
```bash
# Check if API is working
curl https://6953a3b7a319a928023c1c63.mockapi.io/api/brands

# Check specific brand
curl https://6953a3b7a319a928023c1c63.mockapi.io/api/brands/1
```

**3. Simulate Errors (Temporary Code Changes):**

**Test Network Error:**
```javascript
// In brandsApi.js, temporarily add:
export async function getBrands() {
  throw new Error("Network error");
}
```

**Test Empty Response:**
```javascript
export async function getBrands() {
  return [];
}
```

**Test 404:**
```javascript
export async function getBrandById(id) {
  throw new Error("Brand not found");
}
```

**Remember**: Revert these changes after testing!

---

## ✅ Final Pre-Submission Checklist

Before submitting, ensure:

- [ ] All test scenarios pass
- [ ] No crashes in any scenario
- [ ] Error messages are user-friendly
- [ ] Retry functionality works
- [ ] Loading states show properly
- [ ] Navigation is smooth
- [ ] Gradient background is correct
- [ ] App works on both iOS and Android
- [ ] Expo Go link/QR code works
- [ ] README is complete
- [ ] Code is clean (no commented code)
- [ ] Screen recording is ready (2 minutes)
- [ ] GitHub repo is up to date

---

## 🆘 Troubleshooting

### Issue: App shows white screen
**Solution**: Check console for errors, ensure all imports are correct

### Issue: Gradient doesn't show
**Solution**: Verify `SpotlightBackground` is imported and rendered

### Issue: API calls fail even with internet
**Solution**: Check API URL, verify MockAPI is accessible

### Issue: Navigation doesn't work
**Solution**: Ensure `AppNavigator` is properly set up in `App.js`

### Issue: Fonts not loading
**Solution**: Check `App.js` font loading, ensure fonts are in `assets/fonts/`

---

## 📞 Need Help?

If you encounter issues during testing:
1. Check the console/terminal for error messages
2. Verify all dependencies are installed (`npm install`)
3. Ensure Expo Go app is up to date
4. Try clearing cache: `expo start -c`

---

**Good luck with your testing! 🚀**

