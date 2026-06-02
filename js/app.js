// 16 listings Indian properties dataset
    

    // Wishlist localStorage helpers
    function getWishlist() {
      const wishlist = localStorage.getItem("airbnb_india_wishlist");
      return wishlist ? JSON.parse(wishlist) : [];
    }

    function toggleWishlist(id) {
      let wishlist = getWishlist();
      const index = wishlist.indexOf(id);
      if (index === -1) {
        wishlist.push(id);
      } else {
        wishlist.splice(index, 1);
      }
      localStorage.setItem("airbnb_india_wishlist", JSON.stringify(wishlist));
      return wishlist;
    }

    function isInWishlist(id) {
      return getWishlist().includes(id);
    }

    // Initialize application elements on document load
    document.addEventListener("DOMContentLoaded", () => {
      // 1. Initial renders of Listings
      renderListingGroup(listings.filter(l => l.location.includes("Goa")), "goa-scroll-row");
      renderListingGroup(listings.filter(l => l.location.includes("Manali")), "manali-scroll-row");
      renderListingGroup(listings.filter(l => l.location.includes("Rajasthan")), "rajasthan-scroll-row");
      renderAllGrid(listings);

      // 2. Setup Category Filters
      initCategoryFilters();

      // 3. Setup Scroll Row Arrow Listeners
      initScrollRowArrows();

      // 4. Setup Profile Dropdown Trigger
      initUserDropdown();

      // 5. Setup expanding Search Header
      initHeaderSearchExpand();

      // 6. Setup Promo Modal Timer
      initPromoModal();
    });

    /**
     * Renders listings inside a horizontal scroll container
     */
    function renderListingGroup(items, containerId) {
      const container = document.getElementById(containerId);
      if (!container) return;
      container.innerHTML = "";

      items.forEach(item => {
        container.appendChild(createCardElement(item));
      });

      // Bind slider and wishlist animation event hooks
      attachCardEvents(container);
    }

    /**
     * Renders listings inside the 4-column responsive grid
     */
    function renderAllGrid(items) {
      const container = document.getElementById("all-listings-grid");
      if (!container) return;
      container.innerHTML = "";

      if (items.length === 0) {
        container.innerHTML = `
          <div style="grid-column: 1/-1; text-align: center; padding: 48px 0; color: var(--light);">
            <i class="fa-solid fa-hotel" style="font-size: 44px; margin-bottom: 16px; color: var(--light);"></i>
            <h3>No matches found</h3>
            <p style="margin-top: 8px;">Try modifying your search criteria or choosing another category.</p>
          </div>
        `;
        return;
      }

      items.forEach(item => {
        container.appendChild(createCardElement(item));
      });

      // Bind slider and wishlist animation event hooks
      attachCardEvents(container);
    }

    /**
     * Creates and returns a single property card HTML element
     */
    function createCardElement(item) {
      const isWishlisted = isInWishlist(item.id);
      const card = document.createElement("div");
      card.className = "listing-card";
      
      // format price nicely with commas
      const formattedPrice = item.price.toLocaleString('en-IN');

      card.innerHTML = `
        <div class="card-image-container">
          <!-- Guest Favorite badge -->
          <span class="guest-favourite-badge">Guest favourite</span>
          
          <!-- Image slider flex container -->
          <div class="slider-wrapper">
            ${item.images.map(img => `<img class="slider-image" src="${img}" alt="${item.title}" loading="lazy">`).join('')}
          </div>
          
          <!-- Slider arrow chevrons -->
          <button class="slider-arrow left-arrow" aria-label="Previous image"><i class="fa-solid fa-chevron-left"></i></button>
          <button class="slider-arrow right-arrow" aria-label="Next image"><i class="fa-solid fa-chevron-right"></i></button>
          
          <!-- Indicator dots -->
          <div class="slider-dots">
            ${item.images.map((_, i) => `<span class="slider-dot ${i === 0 ? 'active' : ''}"></span>`).join('')}
          </div>
        </div>
        
        <!-- Wishlist heart button -->
        <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" data-id="${item.id}" aria-label="Add to Wishlist">
          <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
        </button>
        
        <!-- Details layout -->
        <div class="card-details">
          <div class="card-header-row">
            <span class="card-title" onclick="alert('Viewing property: ${item.title}')">${item.title}</span>
            <span class="card-rating">
              <i class="fa-solid fa-star"></i> ${item.rating.toFixed(2)}
            </span>
          </div>
          <span class="card-location">${item.location}</span>
          <span class="card-distance">${item.distance}</span>
          <div class="card-price-row">
            <span class="card-price">₹${formattedPrice}</span>
            <span class="card-price-unit"> night</span>
          </div>
        </div>
      `;

      return card;
    }

    /**
     * Attaches sliders chevrons, dot events, and wishlist animations to a container's cards
     */
    function attachCardEvents(container) {
      const cards = container.querySelectorAll(".listing-card");
      cards.forEach(card => {
        const wrapper = card.querySelector(".slider-wrapper");
        const leftArrow = card.querySelector(".left-arrow");
        const rightArrow = card.querySelector(".right-arrow");
        const dots = card.querySelectorAll(".slider-dot");
        const wishlistBtn = card.querySelector(".wishlist-btn");

        if (!wrapper || !leftArrow || !rightArrow || !wishlistBtn) return;

        let currentIndex = 0;
        const totalImages = dots.length;

        // Image slider updates
        const updateSlider = () => {
          wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
          dots.forEach((dot, idx) => {
            if (idx === currentIndex) {
              dot.classList.add("active");
            } else {
              dot.classList.remove("active");
            }
          });
        };

        leftArrow.addEventListener("click", (e) => {
          e.stopPropagation();
          currentIndex = (currentIndex - 1 + totalImages) % totalImages;
          updateSlider();
        });

        rightArrow.addEventListener("click", (e) => {
          e.stopPropagation();
          currentIndex = (currentIndex + 1) % totalImages;
          updateSlider();
        });

        // Wishlist heart triggers with scaling bounce animations
        wishlistBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          const id = parseInt(wishlistBtn.getAttribute("data-id"));
          
          wishlistBtn.classList.add("animate");
          const isNowWishlisted = toggleWishlist(id).includes(id);

          if (isNowWishlisted) {
            wishlistBtn.classList.add("active");
            wishlistBtn.innerHTML = `<i class="fa-solid fa-heart"></i>`;
          } else {
            wishlistBtn.classList.remove("active");
            wishlistBtn.innerHTML = `<i class="fa-regular fa-heart"></i>`;
          }

          setTimeout(() => {
            wishlistBtn.classList.remove("animate");
          }, 400);
        });
      });
    }

    /**
     * Toggles category active states and filters the All Listings grid
     */
    function initCategoryFilters() {
      const categoryItems = document.querySelectorAll(".category-item");
      categoryItems.forEach(item => {
        item.addEventListener("click", () => {
          categoryItems.forEach(i => i.classList.remove("active"));
          item.classList.add("active");

          const category = item.getAttribute("data-category");
          if (category === "all") {
            renderAllGrid(listings);
          } else {
            const filtered = listings.filter(l => l.category === category);
            renderAllGrid(filtered);
          }
        });
      });
    }

    /**
     * Shifts scrollLeft bounds on horizontal row arrows click
     */
    function initScrollRowArrows() {
      const arrows = document.querySelectorAll(".scroll-arrow-btn");
      arrows.forEach(arrow => {
        arrow.addEventListener("click", () => {
          const targetId = arrow.getAttribute("data-target");
          const row = document.getElementById(targetId);
          if (!row) return;

          // Shift shift size: shifts the width of one card + gap (e.g. 314px)
          const shiftVal = row.querySelector(".listing-card")?.offsetWidth + 24 || 314;
          if (arrow.classList.contains("left")) {
            row.scrollLeft -= shiftVal;
          } else {
            row.scrollLeft += shiftVal;
          }
        });
      });
    }

    /**
     * Handles User Menu click options and closes on click outside
     */
    function initUserDropdown() {
      const trigger = document.getElementById("user-menu-trigger");
      const dropdown = document.getElementById("user-dropdown");

      if (!trigger || !dropdown) return;

      trigger.addEventListener("click", (e) => {
        e.stopPropagation();
        dropdown.classList.toggle("active");
      });

      document.addEventListener("click", (e) => {
        if (!dropdown.contains(e.target) && e.target !== trigger) {
          dropdown.classList.remove("active");
        }
      });
    }

    /**
     * Expands search pills inside header navigation block
     */
    function initHeaderSearchExpand() {
      const header = document.getElementById("main-header");
      const searchTrigger = document.getElementById("desktop-search-trigger");
      const mobileSearchTrigger = document.getElementById("mobile-search-trigger");
      const dimmer = document.getElementById("header-dimmer");
      const searchForm = document.getElementById("header-search-form");
      const guestsTrigger = document.getElementById("header-guests-trigger");
      const guestsDropdown = document.getElementById("header-guests-dropdown");

      if (!header || !searchForm) return;

      const expandHeader = () => header.classList.add("search-expanded");
      const collapseHeader = () => {
        header.classList.remove("search-expanded");
        if (guestsDropdown) guestsDropdown.classList.remove("active");
      };

      if (searchTrigger) {
        searchTrigger.addEventListener("click", (e) => {
          e.stopPropagation();
          expandHeader();
        });
      }

      if (mobileSearchTrigger) {
        mobileSearchTrigger.addEventListener("click", (e) => {
          e.stopPropagation();
          expandHeader();
        });
      }

      // Close expanded header on outside clicks
      document.addEventListener("click", (e) => {
        if (header.classList.contains("search-expanded")) {
          if (!header.contains(e.target) && e.target !== dimmer) {
            collapseHeader();
          }
        }
      });

      if (dimmer) {
        dimmer.addEventListener("click", (e) => {
          e.stopPropagation();
          collapseHeader();
        });
      }

      // Guest selector triggers
      if (guestsTrigger && guestsDropdown) {
        guestsTrigger.addEventListener("click", (e) => {
          e.stopPropagation();
          if (!e.target.closest(".counter-controls") && !e.target.closest(".header-guests-dropdown")) {
            guestsDropdown.classList.toggle("active");
          }
        });
      }

      // Guest Count Values logic
      const guestCounts = { adults: 1, children: 0, infants: 0 };
      const maxGuests = 10;

      const updateHeaderCounterUI = () => {
        document.getElementById("header-adults-count").innerText = guestCounts.adults;
        document.getElementById("header-children-count").innerText = guestCounts.children;
        document.getElementById("header-infants-count").innerText = guestCounts.infants;

        document.getElementById("header-adults-minus").disabled = guestCounts.adults <= 1;
        document.getElementById("header-children-minus").disabled = guestCounts.children <= 0;
        document.getElementById("header-infants-minus").disabled = guestCounts.infants <= 0;

        const totalGuests = guestCounts.adults + guestCounts.children;
        document.getElementById("header-adults-plus").disabled = totalGuests >= maxGuests;
        document.getElementById("header-children-plus").disabled = totalGuests >= maxGuests;
        document.getElementById("header-infants-plus").disabled = guestCounts.infants >= 3;

        let summaryText = `${totalGuests} guest${totalGuests > 1 ? 's' : ''}`;
        if (guestCounts.infants > 0) {
          summaryText += `, ${guestCounts.infants} infant${guestCounts.infants > 1 ? 's' : ''}`;
        }
        document.getElementById("header-guests-summary").innerText = summaryText;
      };

      const bindCounterBtn = (id, type, val) => {
        const btn = document.getElementById(id);
        if (btn) {
          btn.addEventListener("click", (e) => {
            e.stopPropagation();
            if (val === 1) {
              guestCounts[type]++;
            } else {
              guestCounts[type]--;
            }
            updateHeaderCounterUI();
          });
        }
      };

      bindCounterBtn("header-adults-plus", "adults", 1);
      bindCounterBtn("header-adults-minus", "adults", -1);
      bindCounterBtn("header-children-plus", "children", 1);
      bindCounterBtn("header-children-minus", "children", -1);
      bindCounterBtn("header-infants-plus", "infants", 1);
      bindCounterBtn("header-infants-minus", "infants", -1);

      // Submit Expanded Search
      searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const destination = document.getElementById("header-search-destination").value.trim();
        const checkin = document.getElementById("header-search-checkin").value;
        const checkout = document.getElementById("header-search-checkout").value;
        const totalGuests = guestCounts.adults + guestCounts.children;

        // Apply filters in-place on our All Listings Grid!
        let filtered = listings;
        if (destination) {
          filtered = filtered.filter(l => l.location.toLowerCase().includes(destination.toLowerCase()) || l.title.toLowerCase().includes(destination.toLowerCase()));
        }

        renderAllGrid(filtered);
        collapseHeader();
        
        // Alert search parameters
        alert(`🔍 Search Applied!\n\nDestination: ${destination || "Anywhere"}\nDates: ${checkin || "Any date"} to ${checkout || "Any date"}\nGuests: ${totalGuests} guests`);
      });
    }

    /**
     * Displays promo modal after 2-second timeout on load
     */
    function initPromoModal() {
      const modal = document.getElementById("promo-modal");
      const closeBtn = document.getElementById("close-promo-btn");

      if (!modal) return;

      // Show after 2 seconds
      setTimeout(() => {
        modal.classList.add("active");
      }, 2000);

      // Close triggers
      const closeModal = () => modal.classList.remove("active");
      
      if (closeBtn) {
        closeBtn.addEventListener("click", closeModal);
      }

      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          closeModal();
        }
      });
    }