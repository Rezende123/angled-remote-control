import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { Options } from 'ng5-slider/options';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SliderComponent),
    multi: true
  }]
})
export class SliderComponent implements ControlValueAccessor {

  @Input()
  label: string;

  options: Options = {
    floor: -50,
    ceil: 50
  };

  _value: number;
  get value() {
    return this._value;
  }
  set value(newValue) {
    this._value = newValue;
    this.onChange(newValue);
  }

  onChange: any = () => {};

  writeValue(value: number): void {
    this.value = value;
  }
  registerOnChange = fn => this.onChange = fn;
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}

}
