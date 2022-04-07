import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-one',
  changeDetection : ChangeDetectionStrategy.OnPush,
  template: `
  <div class="example-one">
      <h4>{{ user.name }}</h4>
      <h5>{{ user.age }} years old</h5>
      {{ user.location }} <br />
      {{ user.email }}

      <button (click)="update()">Internal update</button>
      <p>* should not update</p>
    </div>
  `,
  styles: [`
    .example-one {
      font-size:19px;
      margin-bottom: 10px;
    }`]
})
export class ExampleOneComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @Input() user : any=[];

  update() {
    this.user.name = 'Matt Skiba';
  }

}
