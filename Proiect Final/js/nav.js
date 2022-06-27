const createNav = () => {
  let nav = document.querySelector('.navbar');
  nav.innerHTML = `
    <div class="nav">
    <img src="img/logo.png" class="brand-logo" alt="" />
    <div class="nav-items">
      <div class="search">
        <input type="text" class="search-box" placeholder="search" />
        <button class="search-btn">Search</button>
      </div>
      <a href="cart.html"><img src="img/cart.svg" alt="cart"></a>
      <a href="admin.html"><img src="img/user.svg" alt="user"></a>
    </div>
  </div>
  <ul class="links-container">
      <li class="link-item"><a href="index.html" class="link">Acasa</a></li>
      <li class="link-item"><a href="tei.html" class="link">Tei</a></li>
      <li class="link-item"><a href="salcam.html" class="link">Salcam</a></li>
      <li class="link-item"><a href="Poliflora.html" class="link">Poliflora</a></li>
      <li class="link-item"><a href="Utilaje.html" class="link">Utilaje</a></li>
  </ul>
    `;
}
createNav();