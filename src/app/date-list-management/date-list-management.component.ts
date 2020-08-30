import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-date-list-management',
  templateUrl: './date-list-management.component.html',
  styleUrls: ['./date-list-management.component.scss']
})
export class DateListManagementComponent implements OnInit {
  minDate: NgbDateStruct;
  fromDateModel: NgbDateStruct;
  fromTimeModel: NgbTimeStruct;
  toDateModel: NgbDateStruct;
  toTimeModel: NgbTimeStruct;
  dateTimeCollection: { id: number, fromDateTime: Date, toDateTime: Date }[] = [];

  constructor() { }

  ngOnInit(): void {
    // Set minimum date, NgbDateStruct use index 1 month
    const today = new Date();
    this.minDate = { day: today.getDate() + 1, month: today.getMonth() + 1, year: today.getFullYear() };
  }

  addDateTime(): void {
    const nextId = this.getLatestDateTimeCollectionId();

    // Add date time to collection
    const fromDate = new Date(this.fromDateModel.year, this.fromDateModel.month - 1, this.fromDateModel.day, this.fromTimeModel.hour, this.fromTimeModel.minute);
    const toDate = new Date(this.toDateModel.year, this.toDateModel.month - 1, this.toDateModel.day, this.toTimeModel.hour, this.toTimeModel.minute);
    this.dateTimeCollection.push({ id: nextId, fromDateTime: fromDate, toDateTime: toDate });

    // Reset date time
    this.fromDateModel = null;
    this.fromTimeModel = null;
    this.toDateModel = null;
    this.toTimeModel = null;
  }

  deleteDateTime(id: number) {
    this.dateTimeCollection = this.dateTimeCollection.filter(x => x.id != id);
  }

  private getLatestDateTimeCollectionId(): number {
    if (this.dateTimeCollection.length == 0) {
      return 0;
    }

    const ids: number[] = [];
    this.dateTimeCollection.map(x => ids.push(x.id));
    return Math.max(...ids) + 1;
  }
}