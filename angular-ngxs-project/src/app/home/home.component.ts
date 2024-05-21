import { Component } from '@angular/core';

@Component({
  selector: 'ngxs-home',
  template: `
   <div class="px-4 py-5 my-5 text-center">
   <i class="bi bi-arrow-down-circle" style="font-size: 2rem; color: cornflowerblue;"></i>
    <h1 class="display-5 fw-bold text-body-emphasis"> What is the NgXS Benfits? </h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">
        NGXS is a state management pattern + library for Angular. It acts as a single source of truth for your application's state, providing simple rules for predictable state mutations.
        that helps manage the state of your Angular application in a predictable way. Here are some benefits of using NgXS:</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
          <a class="nav-link" href="https://www.ngxs.io/" target="_blank">More Details</a>
        </button>
        <button type="button" class="btn btn-outline-secondary btn-lg px-4">Cancel</button>
      </div>
    </div>
  </div>
  `
})
export class HomeComponent { }