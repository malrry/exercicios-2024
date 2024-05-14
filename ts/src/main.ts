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