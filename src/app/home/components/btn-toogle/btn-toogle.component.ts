import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-btn-toogle',
  templateUrl: './btn-toogle.component.html',
  styleUrls: ['./btn-toogle.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => BtnToogleComponent),
    multi: true
  }]
})
export class BtnToogleComponent implements ControlValueAccessor {

  @Input()
  label: string;

  _value: boolean;
  get value() {
    return this._value;
  }
  set value(newValue) {
    this._value = newValue;
    this.onChange(newValue);
  }

  onChange: any = () => {};

  writeValue(value: boolean): void {
    this.value = value;
  }
  registerOnChange = fn => this.onChange = fn;
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}

}
