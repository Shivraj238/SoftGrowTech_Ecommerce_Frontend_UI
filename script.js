// Product Data Array
const products = [
    { id: 1, name: "Noise Cancelling Headphones", category: "electronics", price: 199, img: "https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=500" },
    { id: 2, name: "Smart Fitness Watch", category: "electronics", price: 149, img: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500" },
    { id: 3, name: "Premium Purple Hoodie", category: "fashion", price: 65, img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=500" },
    { id: 4, name: "Classic White Sneakers", category: "fashion", price: 89, img: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=500" },
    { id: 5, name: "Mechanical Keyboard", category: "electronics", price: 120, img: "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=500" },
    { id: 6, name: "Designer Sunglasses", category: "fashion", price: 45, img: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=500" }
];

let cartCount = 0;

// Function to render product cards
function renderProducts(items) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = items.map(p => `
        <div class="card">
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p class="price">$${p.price}</p>
            <button class="add-btn" onclick="addToCart()">Add to Cart</button>
        </div>
    `).join('');
}

// Basic Filtering Logic
function filterProducts(category) {
    // Update active button UI
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Filter items
    const filtered = category === 'all' ? products : products.filter(p => p.category === category);
    renderProducts(filtered);
}

// Search Logic
function searchProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(query));
    renderProducts(filtered);
}

// Add to Cart UI Logic
function addToCart() {
    cartCount++;
    const badge = document.getElementById('cart-count');
    badge.innerText = cartCount;
    
    // Quick scale animation for the badge
    badge.style.transform = "scale(1.4)";
    setTimeout(() => { badge.style.transform = "scale(1)"; }, 200);
}

// Initial display load
renderProducts(products);