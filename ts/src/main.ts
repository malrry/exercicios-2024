import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component, AfterViewChecked } from '@angular/core';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
// import { Interface } from 'mocha';
import { EventType } from '@angular/router';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

const txt = document.querySelector(".texto") as HTMLElement;
const textInitialHeight = txt.clientHeight;
const overflow = document.querySelector(".overflow") as HTMLElement;
const btn = document.querySelector(".btn-show-more") as HTMLElement;
// console.log(txt);
// debugger;
type EventListener = (event: MouseEvent) => void;

const initToggle: EventListener = (e) => {
  const target = e.target as HTMLElement;
  const state = target.dataset['state'];
  const newState = state === "more"? "less" : "more";
  const newMaxHeight = state === "more"? `${txt.scrollHeight}px` : `${textInitialHeight}px`;

  txt.style.maxHeight = newMaxHeight;

  target.setAttribute("data-state", newState);

  target.innerHTML = newState === "more"? "Veja mais" : "Veja menos";
};

btn.addEventListener("click", initToggle);


function supportsPopover() {
    return HTMLElement.prototype.hasOwnProperty("popover");
  }

  const modal = document.querySelector('.modal') as HTMLElement;
  const openModal = document.querySelector('.btn-create-topic') as HTMLButtonElement;
  const closeModal = document.querySelector('.btn-send-topic') as HTMLButtonElement;

  openModal.addEventListener('click', () => {
    modal.showPopover();
  })

document.addEventListener('DOMContentLoaded', function() {
  const openPopupButton = document.getElementById('button open') as HTMLElement;
  const closePopupButton = document.getElementById('button close') as HTMLElement;
  const popup = document.getElementById('popup') as HTMLElement;

  openPopupButton.addEventListener('click', function() {
      popup.style.display = 'block';
  });

  closePopupButton.addEventListener('click', function() {
      popup.style.display = 'none';
  });
});


