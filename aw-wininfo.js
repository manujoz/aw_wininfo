import { PolymerElement, html } from "../aw_polymer_3/polymer/polymer-element.js";
import "../aw_polymer_3/iron-icons/iron-icons.js";

class AwWinInfo extends PolymerElement {
    static get template() {
        return html`
            <style>
                :host {
                    position: relative;
                    vertical-align: middle;
                    display: inline-block;
                }

                /* #region Iron icon principal */

                #icon_prin {
                    fill: var(--aw-wininfo-icon-color, #333333);
                    cursor: var(--aw-wininfo-icon-cursor, pointer);
                    transition: fill 0.2s;
                    display: inline-block;
                }
                #icon_prin:hover {
                    fill: var(--aw-wininfo-icon-color-hv, var(--aw-primary-color, #1c7cdd));
                }

                /* #endregion Iron icon principal */

                /* #region Contenedor de ventana */

                .container {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 0;
                    height: 0;
                    background-color: var(--aw-wininfo-background-color, #222222);
                    color: var(--aw-wininfo-color, white);
                    font-size: var(--aw-wininfo-font-size, 14px);
                    border-radius: var(--aw-wininfo-border-radius, 5px);
                    box-shadow: var(--aw-wininfo-box-shadow, 1px 1px 3px 1px #cccccc);
                    transition: width 0.2s, height 0.2s, left 0.2s, top 0.2s;
                    overflow: hidden;
                    z-index: 100;
                    display: none;
                }

                /* #endregion Contenedor de ventana  */

                /* #region División interior principal */

                .container > div {
                    position: relative;
                    overflow-y: auto;
                    width: 290px;
                    opacity: 0;
                    transition: opacity 0.3s;
                    padding: 13px 10px 10px;
                    box-sizing: border-box;
                    scrollbar-width: thin;
                    scrollbar-color: var(--aw-wininfo-scrollbar-color, #bbbbbb) var(--aw-wininfo-scrollbar-color-hv, #999999);
                }
                .container > div::-webkit-scrollbar {
                    width: var(--aw-wininfo-scrollbar-width, 6px);
                    height: var(--aw-wininfo-scrollbar-width, 6px);
                    background-color: transparent;
                }
                .container > div::-webkit-scrollbar-track {
                    background-color: var(--aw-wininfo-scrollbar-background-color, transparent);
                }
                .container > div::-webkit-scrollbar-thumb {
                    background-color: var(--aw-wininfo-scrollbar-color, #bbbbbb);
                    border-radius: 10px;
                }
                .container > div::-webkit-scrollbar-thumb:hover {
                    background-color: var(--aw-wininfo-scrollbar-color-hv, #999999);
                }

                @media (min-width: 500px) {
                    .container > div {
                        width: 360px;
                    }
                }

                /* #endregion División interior principal */

                #wi-icon-close {
                    position: absolute;
                    top: 3px;
                    right: 5px;
                    width: 15px;
                    height: 15px;
                    fill: var(--aw-wininfo-icon-close-fill, var(--aw-wininfo-color, white));
                    cursor: pointer;
                }
                #wi-icon-close:hover {
                    fill: var(--aw-wininfo-icon-close-fill-hv, var(--aw-wininfo-icon-close-fill, var(--aw-wininfo-color, white)));
                }

                /* #region Ventana de cargando */

                .container > div.wi-loading {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    padding: 0;
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: center;
                    align-items: center;
                    opacity: 1;
                    transition: none;
                    overflow: auto;
                    text-align: center;
                }
                .container > div.wi-loading iron-icon {
                    fill: white;
                    width: 20px;
                    height: 20px;
                    animation: loading 1s infinite;
                }

                @keyframes loading {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }

                /* #endregion Ventana de cargando */

                /* #region Interior del contenido */

                h1,
                p.h1 {
                    margin: var(--aw-wininfo-h1-margin, 0 0 8px);
                    padding: var(--aw-wininfo-h1-padding, 10px 0 2px);
                    color: var(--aw-wininfo-h1-color, #2e80c4);
                    font-size: var(--aw-wininfo-h1-font-size, 16px);
                    font-weight: var(--aw-wininfo-h1-font-weight, bold);
                    border-bottom: solid 1px var(--aw-wininfo-h1-border-color, var(--aw-wininfo-h1-color, #2e80c4));
                }
                h2,
                p.h2 {
                    margin: var(--aw-wininfo-h2-margin, 0 0 8px);
                    padding: var(--aw-wininfo-h2-padding, 7px 0 2px);
                    color: var(--aw-wininfo-h2-color, #cf773b);
                    font-size: var(--aw-wininfo-h2-font-size, 14px);
                    font-weight: var(--aw-wininfo-h2-font-weight, bold);
                    border-bottom: solid 1px var(--aw-wininfo-h2-border-color, var(--aw-wininfo-h2-color, transparent));
                }
                h3,
                p.h3 {
                    margin: var(--aw-wininfo-h3-margin, 0 0 8px);
                    padding: var(--aw-wininfo-h3-padding, 7px 0 2px);
                    color: var(--aw-wininfo-h3-color, #3f8b49);
                    font-size: var(--aw-wininfo-h3-font-size, 14px);
                    font-weight: var(--aw-wininfo-h3-font-weight, bold);
                    border-bottom: solid 1px var(--aw-wininfo-h3-border-color, var(--aw-wininfo-h3-color, transparent));
                }
                h4,
                p.h4 {
                    margin: var(--aw-wininfo-h4-margin, 0 0 8px);
                    padding: var(--aw-wininfo-h4-padding, 7px 0 2px);
                    color: var(--aw-wininfo-h4-color, #ddbe35);
                    font-size: var(--aw-wininfo-h4-font-size, 14px);
                    font-weight: var(--aw-wininfo-h4-font-weight, bold);
                    border-bottom: solid 1px var(--aw-wininfo-h4-border-color, var(--aw-wininfo-h4-color, transparent));
                }
                ul,
                ol {
                    padding: 0 0 0 20px;
                }

                /* #endregion Interior del contenido */
            </style>

            <iron-icon id="icon_prin" icon="{{icon}}" on-click="toggle"></iron-icon>
            <div class="container"></div>
        `;
    }
    static get properties() {
        return {
            iron: { type: Object, value: {} },
            container: { type: Object, value: {} },
            params: { type: Object, value: {} },
            content: { type: String, value: "" },
            icon: { type: String, value: "info-outline" },
            size: { type: Number, value: 20 },
            script: { type: String, value: "" },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.iron = this.shadowRoot.querySelector("#icon_prin");
        this.container = this.shadowRoot.querySelector(".container");
        this.init();
        this.listenvars = {
            close: (ev) => {
                this._listen_close(ev);
            },
        };
        this.removeAttribute("unresolved");
    }
    disconectedCallback() {
        super.disconectedCallback();
        this._remove_listeners();
    }
    init() {
        this._set_icon_size();
        this.content = this.innerHTML;
        this.params = { posX: null, posY: null, newTop: null, newLeft: null, winWidth: null, winHeight: null, winTop: null, altoPag: null };
    }
    _set_icon_size() {
        this.iron.style.width = this.size + "px";
        this.iron.style.height = this.size + "px";
    }
    _is_open() {
        if (0 < this.container.offsetHeight) {
            return !0;
        } else {
            return !1;
        }
    }
    toggle(ev) {
        if (!this._is_open()) {
            this.open(ev);
        } else {
            this.close();
        }
    }
    open(ev) {
        if (this._is_open()) {
            return !1;
        }
        if (!this.content && !this.script) {
            return !1;
        }
        this.params = {
            posX: 0,
            posY: 0,
            newTop: null,
            newLeft: ev.pageY,
            winWidth: window.innerWidth,
            winHeight: window.innerHeight,
            winTop: window.pageYOffset,
            altoPag: document.body.offsetHeight,
        };
        this.container.style.display = "block";
        this.container.innerHTML = '<div class="wi-loading"><iron-icon icon="cached"></iron-icon></div>';
        setTimeout(() => {
            this._animate_window();
            if (this.script) {
                this._load_content();
            } else {
                this._insert_content();
            }
        }, 50);
    }
    close() {
        if (!this._is_open()) {
            return !1;
        }
        this.container.style.width = 0;
        this.container.style.height = 0;
        setTimeout(() => {
            this.container.innerHTML = "";
            this.container.removeAttribute("style");
            this._remove_listeners();
        }, 250);
    }
    _load_content() {
        var xhr = new XMLHttpRequest();
        xhr.addEventListener(
            "load",
            (ev) => {
                var request = xhr.responseText;
                this.content = request;
                this._insert_content();
            },
            !1
        );
        xhr.open("POST", this.script);
        xhr.send();
    }
    _insert_content() {
        let loading = this.container.querySelector(".wi-loading"),
            iconClose = document.createElement("IRON-ICON");
        iconClose.setAttribute("id", "wi-icon-close");
        iconClose.setAttribute("icon", "clear");
        let div = document.createElement("DIV");
        div.classList.add("wi-content-text");
        div.innerHTML = this.content;
        this.container.appendChild(div);
        this.container.appendChild(iconClose);
        setTimeout(() => {
            let width = div.offsetWidth,
                height = div.offsetHeight;
            if (height > window.innerHeight - 20) {
                height = window.innerHeight - 20;
            }
            this._animate_window(width, height, !1);
        }, 20);
        setTimeout(() => {
            loading.style.opacity = 0;
            div.style.opacity = 1;
            this._set_listeners();
        }, 350);
    }
    _animate_window(width = 80, height = 80, loading = !0) {
        let position = this.getBoundingClientRect();
        if (position.top + height > window.innerHeight) {
            this.params.posY = window.innerHeight - (position.top + height) - 10;
        }
        if (position.left + width > window.innerWidth) {
            this.params.posX = window.innerWidth - (position.left + width) - 20;
        }
        this.container.style.width = width + "px";
        this.container.style.height = height + "px";
        this.container.style.top = this.params.posY + "px";
        this.container.style.left = this.params.posX + "px";
        if (!loading) {
            this.container.querySelector(".wi-content-text").style.maxHeight = "100%";
        }
    }
    _listen_close(ev) {
        if (ev.target == this && "wi-icon-close" != ev.path[0].id) {
            return !1;
        }
        this.close();
    }
    _set_listeners() {
        document.body.addEventListener("click", this.listenvars.close);
    }
    _remove_listeners() {
        document.body.removeEventListener("click", this.listenvars.close);
    }
}
window.customElements.define("aw-wininfo", AwWinInfo);
