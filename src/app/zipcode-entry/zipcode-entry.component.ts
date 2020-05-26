import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html'
})
export class ZipcodeEntryComponent implements OnInit {

  @Output() zipCodeAdded: EventEmitter<string> = new EventEmitter<string>();

  form: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this._fb.group({
      zip: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]]
    });
  }

  zipAddedEvent(zip: string) {
    if (this.form.valid) {
      this.zipCodeAdded.emit(zip);
    }
  }

}
