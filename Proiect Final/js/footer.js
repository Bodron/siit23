const createFooter = () => {
  let footer = document.querySelector("footer");

  footer.innerHTML = `
    <div class="footer-content">
    <img src="img/logo.png" class="logo" alt="" />
    <div class="footer-ul-container">
      <ul class="category">
        <li class="category-title">Miere</li>
        <li><a href="#" class="footer-link">Tei</a></li>
        <li><a href="#" class="footer-link">Salcam</a></li>
        <li><a href="#" class="footer-link">Poliflora</a></li>
      </ul>
      <ul class="category">
        <li class="category-title">Utilaje</li>
        <li><a href="#" class="footer-link">Centrifuga</a></li>
        <li><a href="#" class="footer-link">Rame</a></li>
        <li><a href="#" class="footer-link">Stup</a></li>
      </ul>
    </div>
  </div>
  <p class="footer-title">about company</p>
  <p class="info">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
    quo mollitia blanditiis hic reiciendis. Suscipit, enim! Quas cum commodi
    eos obcaecati, quo similique repellendus qui possimus, eligendi, earum
    autem asperiores.
  </p>
  <p class="info">support emails - bodroncosmin98@gmail.com</p>
  <p class="info">Telephone: 0734945683 / 0762344467</p>
  <div class="footer-social-container">
    <div>
      <a href="#" class="social-link">terms & services</a>
      <a href="#" class="social-link">privacy page</a>
    </div>
    <div>
      <a href="https://www.instagram.com/" class="social-link">instagram</a>
      <a href="https://www.facebook.com/" class="social-link">facebook</a>
      <a href="https://www.twitter.com/" class="social-link">twitter</a>
    </div>
  </div>
  <p class="footer-credit">BubuBee, Best honey online store </p>
    `;
};
createFooter();
