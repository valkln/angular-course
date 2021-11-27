import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
export type AlertT = 'success' | 'warning' | 'danger'
export interface AlertI {
  type: AlertT
  text: string
}
@Injectable()
export class AlertService {
  public alert$ = new Subject<AlertI>()
  success(text: string) {
    this.alert$.next({type: 'success', text})
  }
  warning(text: string) {
    this.alert$.next({type: 'warning', text})
  }
  danger(text: string) {
    this.alert$.next({type: 'danger', text})
  }
}
