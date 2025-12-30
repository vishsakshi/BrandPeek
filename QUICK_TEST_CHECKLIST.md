# Quick Testing Checklist - BrandPeek

Use this checklist while testing. Check each box as you verify it works.

---

##  NORMAL FLOW (Must Work)

### Home Screen
- [ ] App opens without crashing
- [ ] Gradient background shows (dark blue/black radial)
- [ ] "Top Brands Today" header appears
- [ ] Subtitle "Discover leading global brands" shows
- [ ] Loading spinner appears briefly
- [ ] 5-10 brand cards load and display
- [ ] Each card shows: logo + brand name + tagline
- [ ] Cards are tappable (visual feedback on press)

### Brand Detail Screen
- [ ] Tap brand card → navigates to detail screen
- [ ] Gradient background still visible
- [ ] Brand logo displays (large, centered)
- [ ] Brand name shows in large white text
- [ ] Description text displays
- [ ] "Brand Overview" section shows:
  - [ ] Founded year
  - [ ] Industry
  - [ ] Headquarters
- [ ] Tags display (if brand has tags)
- [ ] White "Follow" button at bottom
- [ ] Back button/swipe returns to home

---

##  ERROR SCENARIOS (Critical - Must Test!)

### Test 1: No Internet on App Open
**Steps:**
1. Turn OFF WiFi + Mobile Data
2. Open app
3. Wait 10 seconds

**Expected:**
- [ ] Loading spinner appears first
- [ ] Then error screen shows
- [ ] Error message: "Failed to fetch brands" or similar
- [ ] ⚠️ Warning icon visible
- [ ] "Retry" button appears
- [ ] Gradient background still visible
- [ ] App does NOT crash

**Test Retry:**
- [ ] Tap "Retry" (still no internet)
- [ ] Loading spinner shows again
- [ ] Error appears again
- [ ] Turn internet ON
- [ ] Tap "Retry"
- [ ] Brands load successfully 

---

### Test 2: Internet Fails While Viewing Brand Details
**Steps:**
1. Load home screen (with internet ON)
2. Turn OFF internet
3. Tap on a brand card
4. Wait

**Expected:**
- [ ] Navigates to detail screen
- [ ] Loading spinner appears
- [ ] Error screen shows:
  - [ ] Error message: "Failed to load brand details"
  - [ ] ⚠️ Warning icon
  - [ ] "Retry" button
- [ ] App does NOT crash

**Test Retry:**
- [ ] Turn internet ON
- [ ] Tap "Retry"
- [ ] Brand details load successfully 

---

### Test 3: Invalid Brand ID (404 Error)
**How to Test:**
Temporarily modify `HomeScreen.js` line 54:
```javascript
// Change to:
onPress={() => navigation.navigate("BrandDetail", { brand: { id: 99999 } })}
```

**Expected:**
- [ ] Error screen shows
- [ ] Error message: "Brand not found"
- [ ] "Retry" button available
- [ ] Can navigate back
- [ ] App does NOT crash

**Revert the change after testing!**

---

### Test 4: API Server Down
**How to Test:**
Temporarily modify `src/api/brandsApi.js`:
```javascript
const API_BASE_URL = "https://invalid-url.com/api";
```

**Expected:**
- [ ] Error screen shows
- [ ] Error message appears
- [ ] "Retry" button available
- [ ] App does NOT crash

**Revert the change after testing!**

---

##  VISUAL CHECKS

- [ ] Gradient background on ALL screens (home + detail)
- [ ] Text is readable (white on dark background)
- [ ] No content cut off at edges
- [ ] SafeAreaView works (no notch overlap on iPhone)
- [ ] Brand logos display correctly
- [ ] Cards have proper spacing
- [ ] Smooth scrolling
- [ ] Smooth navigation transitions

---

## PERFORMANCE CHECKS

- [ ] App loads within 3 seconds (good internet)
- [ ] Smooth scrolling (no lag)
- [ ] Tapping cards responds immediately
- [ ] No memory leaks (use app for 5 minutes)

---

## DEVICE COMPATIBILITY

Test on at least 2 devices:
- [ ] iPhone (or iOS Simulator)
- [ ] Android phone (or Android Emulator)

Both should work identically!

---

## SCREEN RECORDING CHECKLIST

Before recording, ensure:
- [ ] All normal flows work
- [ ] At least 2 error scenarios work
- [ ] You can explain folder structure
- [ ] You can show API calls working
- [ ] Recording is under 2 minutes

---

## FINAL VERIFICATION

Before submission:
- [ ] All ✅ items above are checked
- [ ] No crashes in any scenario
- [ ] Error messages are clear
- [ ] Retry buttons work
- [ ] Expo Go link/QR code works
- [ ] README is complete
- [ ] GitHub repo is updated
- [ ] Screen recording is ready

---

## 🐛 IF SOMETHING FAILS

**White Screen?**
→ Check console for errors
→ Verify all imports are correct

**Gradient Missing?**
→ Check `SpotlightBackground` is imported
→ Verify it's rendered in screens

**API Not Working?**
→ Check internet connection
→ Verify API URL in `brandsApi.js`
→ Test API in browser: `https://6953a3b7a319a928023c1c63.mockapi.io/api/brands`

**Navigation Broken?**
→ Check `AppNavigator.js` setup
→ Verify `App.js` has NavigationContainer

**Fonts Not Loading?**
→ Check `assets/fonts/` folder has font files
→ Verify `App.js` font loading code

---

**Print this checklist and test systematically!**

