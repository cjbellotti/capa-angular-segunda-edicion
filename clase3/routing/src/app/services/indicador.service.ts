import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class IndicadorService {

	private incrementarSource = new Subject<any>();
	private incrementarEvent = this.incrementarSource.asObservable();

	agrega() {
		this.incrementarSource.next();
	}

	getIncrementarEvent() : Observable<any> {
		return this.incrementarEvent;
	}

} 