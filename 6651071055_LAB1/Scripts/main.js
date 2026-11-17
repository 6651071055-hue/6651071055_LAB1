/**
 * OrganiWax - Main UI Scripts & Interactive Handlers
 */

document.addEventListener("DOMContentLoaded", function () {
  // 1. Mobile Menu Drawer Toggle
  const openBtn = document.querySelector(".humberger__open");
  const closeBtn = document.querySelector(".humberger__menu__close");
  const wrapper = document.querySelector(".humberger__menu__wrapper");
  const overlay = document.querySelector(".humberger__menu__overlay");

  if (openBtn && wrapper && overlay) {
    openBtn.addEventListener("click", function () {
      wrapper.classList.add("show__humberger__menu__wrapper");
      overlay.classList.add("active");
    });
  }

  function closeMenu() {
    if (wrapper) wrapper.classList.remove("show__humberger__menu__wrapper");
    if (overlay) overlay.classList.remove("active");
  }

  if (closeBtn) closeBtn.addEventListener("click", closeMenu);
  if (overlay) overlay.addEventListener("click", closeMenu);

  // 2. Hero Department Category Toggle
  const heroCatAll = document.querySelector(".hero__categories__all");
  const heroCatList = document.querySelector(".hero__categories ul");

  if (heroCatAll && heroCatList) {
    const isHeroNormal = document.querySelector(".hero.hero-normal");
    if (isHeroNormal) {
      heroCatList.style.display = "none";
    }

    heroCatAll.addEventListener("click", function () {
      if (heroCatList.style.display === "none") {
        heroCatList.style.display = "block";
      } else {
        heroCatList.style.display = "none";
      }
    });
  }

  // 3. Featured Products Filter Tabs
  const filterBtns = document.querySelectorAll(".featured__controls ul li");
  const filterItems = document.querySelectorAll(".featured__filter .mix");

  if (filterBtns.length > 0 && filterItems.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener("click", function () {
        filterBtns.forEach(b => b.classList.remove("active"));
        this.classList.add("active");

        const filterValue = this.getAttribute("data-filter");

        filterItems.forEach(item => {
          if (filterValue === "*" || item.classList.contains(filterValue.substring(1))) {
            item.style.display = "block";
            item.style.animation = "fadeIn .4s ease";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  }

  // 4. Shop Details Dynamic Data & Thumbnail Switching
  const isDetailsPage = window.location.pathname.includes("shop-details.html");
  if (isDetailsPage && typeof DEFAULT_PRODUCTS !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    const prodId = parseInt(urlParams.get("id")) || 5; // Default to 5 (user's favorite photo) or 1
    const prod = DEFAULT_PRODUCTS.find(p => p.id === prodId) || DEFAULT_PRODUCTS[4];

    const titleElem = document.getElementById("detailTitle");
    const priceElem = document.getElementById("detailPrice");
    const oldPriceElem = document.getElementById("detailOldPrice");
    const descElem = document.getElementById("detailDesc");
    const catElem = document.getElementById("detailCat");
    const scentElem = document.getElementById("detailScent");
    const bigImg = document.getElementById("detailBigImg");
    const breadcrumbElem = document.getElementById("detailBreadcrumb");

    if (titleElem) titleElem.textContent = prod.name;
    if (priceElem) priceElem.textContent = formatPrice(prod.price);
    if (oldPriceElem) oldPriceElem.textContent = formatPrice(prod.oldPrice);
    if (descElem) descElem.textContent = prod.description;
    if (catElem) catElem.textContent = prod.categoryName;
    if (scentElem) scentElem.textContent = prod.scent;
    if (bigImg) bigImg.src = prod.image;
    if (breadcrumbElem) breadcrumbElem.textContent = prod.name;

    const addDetailBtn = document.getElementById("detailAddToCartBtn");
    if (addDetailBtn) {
      addDetailBtn.onclick = function () {
        const qty = parseInt(document.getElementById("detailQty")?.value) || 1;
        addToCart(prod.id, qty);
      };
    }

    const thumbs = document.querySelectorAll(".product__details__pic__slider img");
    thumbs.forEach(thumb => {
      thumb.addEventListener("click", function () {
        thumbs.forEach(t => t.classList.remove("active"));
        this.classList.add("active");
        if (bigImg) bigImg.src = this.src;
      });
    });
  }

  // 5. Quantity Buttons in Details
  window.changeDetailQty = function (delta) {
    const qtyInput = document.getElementById("detailQty");
    if (qtyInput) {
      let cur = parseInt(qtyInput.value) || 1;
      cur += delta;
      if (cur < 1) cur = 1;
      qtyInput.value = cur;
    }
  };

  // 6. Tabs Toggle in Product Details
  const tabLinks = document.querySelectorAll(".nav-tabs li a");
  const tabPanes = document.querySelectorAll(".tab-pane");

  tabLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      tabLinks.forEach(l => l.classList.remove("active"));
      tabPanes.forEach(p => p.style.display = "none");

      this.classList.add("active");
      const targetId = this.getAttribute("href");
      const targetPane = document.querySelector(targetId);
      if (targetPane) targetPane.style.display = "block";
    });
  });

  // 7. Price Filter in Shop Grid
  const priceSlider = document.getElementById("priceSlider");
  const maxPriceDisplay = document.getElementById("maxPriceDisplay");
  if (priceSlider && maxPriceDisplay) {
    priceSlider.addEventListener("input", function () {
      const val = parseInt(this.value);
      maxPriceDisplay.textContent = formatPrice(val);
      filterShopProducts();
    });
  }

  // 8. Search Filter
  const searchInput = document.getElementById("heroSearchInput");
  const searchBtn = document.getElementById("heroSearchBtn");

  if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const q = searchInput.value.trim();
      if (q) {
        window.location.href = `shop-grid.html?search=${encodeURIComponent(q)}`;
      }
    });
  }

  if (window.location.pathname.includes("shop-grid.html")) {
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get("search");
    if (searchParam) {
      const searchBox = document.getElementById("heroSearchInput");
      if (searchBox) searchBox.value = searchParam;
      filterShopProducts(searchParam);
    }

    const packageOptions = document.querySelectorAll(".sidebar__item__size button");
    packageOptions.forEach(option => {
      option.addEventListener("click", function () {
        packageOptions.forEach(button => {
          button.classList.remove("active");
          button.setAttribute("aria-pressed", "false");
        });
        this.classList.add("active");
        this.setAttribute("aria-pressed", "true");
        filterShopProducts();
      });
    });
  }
});

let activeShopSearchTerm = "";
let defaultShopProductOrder;

function filterShopProducts(searchTerm) {
  if (typeof searchTerm === "string") {
    activeShopSearchTerm = searchTerm.trim().toLowerCase();
  }

  const items = document.querySelectorAll(".shop-product-card");
  if (!defaultShopProductOrder) {
    defaultShopProductOrder = new Map(Array.from(items, (item, index) => [item, index]));
  }
  const maxPrice = parseInt(document.getElementById("priceSlider")?.value || 500000);
  const sortOrder = document.querySelector(".filter__sort select")?.value || "0";
  const selectedPackage = document.querySelector(".sidebar__item__size button.active")?.dataset.package || "all";
  const grid = document.getElementById("shopProductGrid");
  let count = 0;
  const sortedItems = Array.from(items);

  sortedItems.forEach(item => {
    const price = parseInt(item.getAttribute("data-price"), 10);
    const name = (item.getAttribute("data-name") || "").toLowerCase();

    const matchPrice = price <= maxPrice;
    const matchSearch = activeShopSearchTerm === "" || name.includes(activeShopSearchTerm);
    const matchPackage = selectedPackage === "all" || item.dataset.package === selectedPackage;

    if (matchPrice && matchSearch && matchPackage) {
      item.style.display = "block";
      count++;
    } else {
      item.style.display = "none";
    }
  });

  if (sortOrder === "1") {
    sortedItems.sort((a, b) => Number(a.dataset.price) - Number(b.dataset.price));
  } else if (sortOrder === "2") {
    sortedItems.sort((a, b) => Number(b.dataset.price) - Number(a.dataset.price));
  } else if (sortOrder === "3") {
    sortedItems.sort((a, b) => Number(b.dataset.id) - Number(a.dataset.id));
  } else {
    sortedItems.sort((a, b) => defaultShopProductOrder.get(a) - defaultShopProductOrder.get(b));
  }

  if (grid) sortedItems.forEach(item => grid.appendChild(item));

  const countElem = document.getElementById("filteredCount");
  if (countElem) countElem.textContent = count;

  const emptyMessage = document.getElementById("noProductsMessage");
  if (emptyMessage) emptyMessage.style.display = count === 0 ? "block" : "none";
}
