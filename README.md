# 🏠 ABNB Clone India - Vacation Rentals, Cabins & Villas

A fully responsive, modular, and interactive **ABNB Clone** inspired by the modern Airbnb UI. Built with vanilla HTML, CSS, and JavaScript, it features popular Indian vacation destinations (Goa, Manali, Rajasthan, Kerala, Coorg, Rishikesh, Lonavala, and Mysore) mapped with location-specific images and fully custom interactive widgets.

### 🔗 Live Demo
Check out the live site deployed on Netlify:
**[https://abnb-clone-sumudev.netlify.app](https://abnb-clone-sumudev.netlify.app)**

---

## 🎨 Layout & Styling (Responsive CSS Media Queries)
The styling has been modularized and optimized for three distinct viewport sizes:
*   **Desktop (>1200px)**: 4-column responsive grid for all listings, and 4 cards visible at once in horizontal rows (card width `calc(25% - 12px)`).
*   **Tablet (768px–1200px)**: 2-column listings grid and 2 cards visible in horizontal rows (card width `calc(50% - 8px)`).
*   **Mobile (<768px)**: 1-column layout (100% width) for listings, and 1.2 cards visible in horizontal rows (card width `85%`) to peak upcoming scroll cards.
    *   Hides scroll arrow chevrons to make room for natural touch swipe gestures.
    *   Optimizes filter bar touch targets with larger tap paddings (`16px 14px`).
    *   Navbar collapses to the Logo on the left and a Mobile Search Icon + User hamburger menu on the right. Hides center search pill, Become a Host text, and Globe icon.
    *   Tuned mobile typography (section titles `18px`, card names `14px`, prices `14px`) and reduced section padding to `16px`.

---

## ⚙️ Interactive Features (Vanilla JS)
All interactive controls are handled by modular scripts:
1.  **Expanding Search Pill**: Binds clicking the center search pill or mobile search icon to vertically expand a 4-section detailed drawer (Where, Check in, Check out, and Who/Guests dropdown counter). Collapses on clicking outside the header or on the dimmed screen overlay.
2.  **Sticky Categories Scroller**: Horizontally scrolls filter categories (Beachfront, Mountains, Heritage, Farm Stay, Treehouses, Pools, Trending) and filters the listing grid dynamically with active underlining.
3.  **Heart Wishlist Animations**: Clicking the heart button fills it with rose-pink (`#FF385C`) and triggers a scale bounce keyframe animation (`transform: scale(1.3) -> 1.0`). Saves state to `localStorage` so liked properties persist across page reloads.
4.  **Property Card Image Sliders**: Hovering over cards displays left/right arrows. Clicking them slides through 3 high-resolution regional Unsplash images, synchronized with bottom dot indicators.
5.  **Timed Summer Promo Modal**: Automatically opens a summer discount modal 2 seconds after page load. Can be dismissed via the close X mark or by clicking outside the modal content.

---

## 📂 Project Structure
```text
airbnb/
├── index.html        # HTML structure and layouts
├── css/
│   └── style.css     # CSS resets, custom variables, layouts, and responsive breakpoints
└── js/
    ├── data.js       # The 16 mock Indian properties listings dataset
    └── app.js        # Core event listeners, sliders, wishlist triggers, and modals
```

---

## 🛠️ Local Development & Running
1. Clone the repository:
   ```bash
   git clone https://github.com/sumudev/airbnb-clone.git
   ```
2. Open `index.html` in your browser, or start a local server:
   ```bash
   npx http-server -p 8081
   ```
3. Open **`http://localhost:8081`** to view.

---

## 👩‍💻 Author
Built by **Sumu Dev** with a focus on rich web aesthetics, responsive layout transitions, and vanilla JavaScript micro-interactions.
