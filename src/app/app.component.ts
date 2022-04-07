import { Component, TemplateRef, ComponentRef, ViewContainerRef, ViewChild, AfterContentInit, ComponentFactoryResolver } from '@angular/core';

import { AuthFormComponent } from './auth-form/auth-form.component';

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  template: `
    <!-- <div>
      <div #entry></div>
      <ng-template #tmpl let-name let-location="location">
        {{ name }} : {{ location }}
      </ng-template>
    </div> -->
<div>
  <button (click)="addProp()">Add property</button>
  <button (click)="changeUser()">change user Object</button>
  <button (click)="changeName()">change name property</button>
  <div class="users">
    <app-example-one [user]="user"></app-example-one>
    <app-example-two [user]="user"></app-example-two>

  </div>
</div>

  `,
 styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {
  // constructor(
  //   private resolver: ComponentFactoryResolver,
  //   private viewContainerRef: ViewContainerRef
  // ) {}
  // @ViewChild('entry', { read: ViewContainerRef }) entry!: ViewContainerRef;
  // @ViewChild('tmpl') tmpl!: TemplateRef<any>;

  ngAfterContentInit() {
    // this.viewContainerRef.createEmbeddedView(this.tmpl, {
    //   $implicit: 'Motto Todd',
    //   location: 'UK, England'
    // });
  }

  user:any= {
    name:'Ananya',
    age: 44,
    location: 'California'
  }

  addProp(){
    this.user.email = 'ananya@v-comply.com';
  }

  changeName(){
    this.user.name='travis';
  }

  changeUser(){
    this.user = {
      name: 'tomhas',
      age: 41,
      location: 'kolkata'
    }
  }

}
