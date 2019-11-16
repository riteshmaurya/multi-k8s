import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fib',
  templateUrl: './fib.component.html',
  styleUrls: ['./fib.component.scss']
})
export class FibComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  state = {
    seenIndex: [],
    values: {},
    index: ''
  };
  fibForm: FormGroup;
  ngOnInit() {
    this.initForm();
    this.fetchValues();
    this.fetchIndexes();
  }
  initForm() {
    this.fibForm = new FormGroup({
      index: new FormControl()
    });
  }

  async fetchValues() {
    this.httpClient.get('/api/values/current').subscribe((res: any) => {
      console.log(res);
      this.state.values = res;
    });
  }

  async fetchIndexes() {
    this.httpClient.get('/api/values/all').subscribe((res: any) => {
      this.state.index = res.data;
    });
  }

  onSubmit() {
    console.log(this.fibForm.value);
    this.state.index = this.fibForm.value;
    this.httpClient.post('/api/values', this.state.index).subscribe((res) => {
      this.state.index = '';
    });
  }

  renderSeenIndecies() {
    return this.state.seenIndex.map(({ number }) => number).join(', ');
  }

  renderValues() {
    return this.state.values;
  }

}
