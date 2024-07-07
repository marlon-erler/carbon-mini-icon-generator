import * as React from "bloatless-react";

import downloadData from "downloadjs";
import html2canvas from "html2canvas";

const iconName = React.restoreState("iconname", "home");

async function download() {
  const preview = document.getElementById("preview");
  if (!preview) return;

  const canvas = await html2canvas(preview);
  const dataURL = canvas.toDataURL("image/png");
  downloadData(dataURL, "icon.png", "image/png");
}

document.querySelector("main")!.append(
  <article>
    <header>Icon Generator</header>
    <div
      class="flex-row align-center justify-center"
      style="flex-wrap: wrap; gap: 2rem;"
    >
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

        <button class="primary width-input" on:click={download}>
          Download
          <span class="icon">download</span>
        </button>

        <p class="secondary" style="margin-top: 1rem">
          You can find the icon names on{" "}
          <a href="https://fonts.google.com/icons">Google Fonts</a>.
        </p>
      </div>

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
