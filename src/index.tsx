import * as React from "bloatless-react";

import downloadData from "downloadjs";
import html2canvas from "html2canvas";

const iconName = React.restoreState("iconname", "home");

async function download() {
  const preview = document.getElementById("preview");
  if (!preview) return;

  const canvas = await html2canvas(preview);
  const dataURL = canvas.toDataURL("image/png")
  downloadData(dataURL, "icon.png", "image/png");
}

document.querySelector("main")!.append(
  <article>
    <header>Icon Generator</header>
    <div>
      <label class="tile">
        <div>
          <span>Icon name</span>
          <input
            bind:value={iconName}
            on:enter={download}
            placeholder="home"
          ></input>
        </div>
      </label>

      <div class="flex-row justify-end width-input">
        <button class="primary width-50" on:click={download}>
          Download
          <span class="icon">download</span>
        </button>
      </div>

      <p class="secondary" style="margin-top: var(--spacing-05)">You can find icon names on <a href="https://fonts.google.com/icons">Google Fonts</a>.</p>

      <hr></hr>

      <h3>Preview</h3>

      <span
        id="preview"
        style="
      padding: 3rem; 
      font-size: 15rem;
      color: var(--primary);
      background-color: hsla(0, 0%, 9%, 100%);
      outline: 1px solid var(--border);"
        class="icon"
        subscribe:innerText={iconName}
      ></span>
    </div>
  </article>
);
