import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'dynamic-form-builder',
  template:`
    <form (ngSubmit)="onSubmit.emit(this.form.value)" [formGroup]="form">
      <div id="dynamic-form">
        <ng-container *ngFor="let field of fields">
            <field-builder [field]="field" [form]="form"></field-builder>
        </ng-container>
      </div>
      <div>
        <button type="submit" [disabled]="!form.valid">送信</button>
      </div>
    </form>
  `,
})
export class DynamicFormBuilderComponent implements OnInit {
  @Output() onSubmit = new EventEmitter();
  @Input() fields: any[] = [];
  form: FormGroup;

  constructor() { }

  ngOnInit() {
    // FormControl生成
    let fieldsCtrls:any = this.walkJSON(this.fields, function(item) {
      let fieldsCtrl: any = {};
      if (item.type != 'checkbox') {
        fieldsCtrl = new FormControl(item.value || '', Validators.required)
      } else {
        let opts = {};
        for (let opt of item.options) {
          opts[opt.value] = new FormControl('');
        }
        fieldsCtrl = new FormGroup(opts)
      }
      return fieldsCtrl;
    });

    this.form = new FormGroup(fieldsCtrls);
    console.log(this.form);


    // 入力状況を監視
    this.form.valueChanges.subscribe((update) => {
      console.log(update);
    });

  }

  walkJSON(data, callback){
    const formGroup: any = {};
    data.forEach(item => {

      formGroup[item.id] = callback(item);
      if (item.item) {
        formGroup[item.id + '_child'] = new FormGroup(this.walkJSON(item.item, callback));
      }
    });

    return formGroup;
  }

}
