import { Injectable } from '@angular/core';
import { Subject ,BehaviorSubject} from 'rxjs';
@Injectable({
    providedIn: 'root'
  })
export class SharedDataService {
    constructor(){}
    //Using any
    public editDataDetails: any = [];
    public subject = new Subject<any>();
    private messageSource = new  BehaviorSubject(this.editDataDetails);
    currentMessage = this.messageSource.asObservable();
    changeMessage(message: string) {
    this.messageSource.next(message)
    }
    }