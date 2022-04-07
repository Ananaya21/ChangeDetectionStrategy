import { AuthRememberComponent } from './auth-remember.component';
import { Component, Output,ViewChild,AfterViewInit , EventEmitter , AfterContentInit, QueryList ,ContentChild, ContentChildren, ViewChildren, ChangeDetectorRef, ElementRef, Renderer2 } from '@angular/core';
import { User } from './auth-form.interface';
import { AuthMessageComponent } from './auth-message.component';
@Component({
  selector: 'auth-form',
  template: `
    <div>
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        <ng-content select="h3"></ng-content>
        <label>
          Email address
          <input type="email" name="email" ngModel #email>
        </label><br><br>
        <label>
          Password
          <input type="password" name="password" ngModel>
        </label>
        <ng-content select="auth-remember"></ng-content>
        <auth-message
          [style.display]="(showMessage ? 'inherit' : 'none')">
        </auth-message>
        <auth-message
          [style.display]="(showMessage ? 'inherit' : 'none')">
        </auth-message>
        <auth-message
          [style.display]="(showMessage ? 'inherit' : 'none')">
        </auth-message>
        <auth-message
          [style.display]="(showMessage ? 'inherit' : 'none')">
        </auth-message>
        <ng-content select="button"></ng-content>
      </form>
    </div>
  `,
  styles: [ `
     .email {border-color: #9f72e6}`]

})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {
  title='Login';
  showMessage?: boolean;
  @ViewChild('email') email!: ElementRef;
  @ViewChildren(AuthMessageComponent) message!: QueryList<AuthMessageComponent>;

  @ContentChildren(AuthRememberComponent) remember!: QueryList<AuthRememberComponent>;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();


  constructor(private renderer: Renderer2,private cd: ChangeDetectorRef,private el: ElementRef){}
  ngAfterViewInit() {
    // this.renderer.setElementAttribute(this.email.nativeElement,'placeholder','Enter your email addreess')
    this.renderer.setAttribute(this.email.nativeElement,'placeholder','Enter your email addreess');
    //se setAttribute or removeAttribute to do just that, set or remove an attribute:
    this.renderer.addClass(this.email.nativeElement,'email');

    this.email.nativeElement.setAttribute('placeholder', 'Enter your email address')
    if(this.message){
      setTimeout(() =>{
      this.message.forEach((message) =>{
      message.days=30;
      });
      this.cd.detectChanges
      })
    }
  }

  ngAfterContentInit() {
    // if (this.message) {
    //   this.message.days = 30;
    // }
    if (this.remember) {
      this.remember.forEach((item) => {
        item.checked.subscribe((checked: boolean) => this.showMessage = checked);
      });
    }
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }
}
