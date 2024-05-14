// Change 1: Imports
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Select, Store, Actions, ActionCompletion, ofAction, 
  ofActionCompleted } from '@ngxs/store';
import { Observable, takeUntil, Subject } from 'rxjs';
import { Item } from 'src/app/models/item';
import { AddItem, RemoveItem } from 'src/app/state/items.actions';
import { ItemsState } from 'src/app/state/items.state';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarModule, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

  @Select(ItemsState.getAllItems) 
  allItems$: Observable<Item[]> | undefined;

  loadingItems: boolean[] = [];

  item = '';

  // Change 2
  private ngUnsubscribe = new Subject<void>();

  private horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  private verticalPosition: MatSnackBarVerticalPosition = 'top';

  // Change 4
  constructor(private store: Store, private actions$: Actions, private _snackBar: MatSnackBar) { }

  // Change 5
  ngOnInit(): void {
    this.actions$.pipe(ofActionCompleted(AddItem, RemoveItem), takeUntil(this.ngUnsubscribe))
    .subscribe((data) => {
      console.log('ofAction => ', data)
      if(data.result.successful) {
        if(data.action instanceof RemoveItem) {
          this._snackBar.open('Item has been removed.','Close', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition
          });
          
        } else if(data.action instanceof AddItem) {
          this._snackBar.open(`Item ${data.action.payload.name} was added.`,'Close', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition
          });
        } else if(data.result.error) {
          this._snackBar.open(`There is an error. Please try after sometime.`,'Close', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition
          });
        }
        this.loadingItems.pop();
      }
    });
  }

  // Change 3
  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  addItem(itemName: string): void {
    this.loadingItems.push(true);

    this.store.dispatch(new AddItem(new Item(itemName))).subscribe(() =>
        this.loadingItems.pop()
    );
  }

  removeItem(id: number): void {
    this.store.dispatch(new RemoveItem(id));
  }
}

