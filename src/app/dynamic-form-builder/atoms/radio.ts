import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'radio',
    template: `
      <div [formGroup]="form">
        <label [attr.for]="field.label">
          {{field.text}}：
          <strong *ngIf="field.required">*</strong>
        </label>
        <div *ngFor="let opt of field.options">
          <label>
            <input [formControlName]="field.id" type="radio" [value]="opt.value">
            {{opt.text}}
          </label>
        </div>
      </div>
    `
})
export class RadioComponent {
    @Input() field:any = {};
    @Input() form:FormGroup;
    get isValid() { return this.form.controls[this.field.id].valid; }
    get isDirty() { return this.form.controls[this.field.id].dirty; }
}
