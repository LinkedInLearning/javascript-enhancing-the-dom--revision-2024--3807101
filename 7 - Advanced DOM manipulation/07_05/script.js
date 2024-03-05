class UserCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
          <style>
          p { color: blue; }
          </style>
          <p>
          User Card Component
          </p>`;

    }
}

window.customElements.define('user-card', UserCard);