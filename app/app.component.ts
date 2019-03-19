import {Component, NgModule, ViewChild} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormControl, FormGroup, ReactiveFormsModule, FormsModule} from '@angular/forms';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular ng-select <small class="text-muted"><a target="_blank" href="https://github.com/ng-select/ng-select">Open in Github</a></small></h1>

        <ng-select
            [items]="cities"
            bindLabel="name"
            bindValue="id"
            [multiple]="true"
            placeholder="Select cities"
            [(ngModel)]="selectedUsers2">
            <ng-template ng-multi-label-tmp let-items="items" let-clear="clear">
                <div class="ng-value" *ngFor="let item of (items ? items.slice(0,2): [])">
                    <span class="ng-value-label">{{ item.name }}</span>
                    <span class="ng-value-icon right" (click)="clear(item)" aria-hidden="true">×</span>
                </div>
                <div class="ng-value" *ngIf="items.length > 2" >
                    <span class="ng-value-label">{{items.length - 2}} more...</span>
                </div>
            </ng-template>
        </ng-select>
`
})
export class AppComponent {
    
    cities = [
        {id: 1, name: 'Vilnius'},
        {id: 2, name: 'Kaunas'},
        {id: 3, name: 'Pavilnys', disabled: true},
        {id: 4, name: 'Pabradė'},
        {id: 5, name: 'Klaipėda'}
    ];
}
