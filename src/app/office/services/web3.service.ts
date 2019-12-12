import {Injectable} from '@angular/core';
import { Observable, forkJoin, combineLatest, from, merge, interval, of, Subject } from 'rxjs';
import { map, shareReplay, switchMap, tap, filter, share, distinctUntilChanged, catchError } from 'rxjs/operators';
import Web3 from 'web3';
import { environment } from '../../../environments/environment';
interface AppWindow extends Window {
  web3: any;
  ethereum: any;
}

declare const window: AppWindow;

@Injectable()
export class Web3Service {
  private web3: any;
  public account$: Observable<string>;
  private interval$ = interval(1000);
	private dappUrl = environment.apiUrl;

  constructor() {
		this.getWeb3().then(web3 => {
    	this.web3 = web3;
    });

    this.account$ = this.interval$.pipe(
      switchMap(() => from(this.web3.eth.getAccounts())),
      map(accounts => accounts && accounts[0] ? accounts[0] : null),
      distinctUntilChanged(),
      shareReplay(1),
    );
  }

  public async getWeb3(): Promise<Web3> {
    let web3: Web3;
    try {
      if (window.ethereum) {
        web3 = new Web3(window.ethereum);
      } else if (window.web3) {
        web3 = new Web3(window.web3.currentProvider);
      } else {
        web3 = new Web3(Web3.givenProvider || this.dappUrl);
      }
      return web3;
    } catch (e) {
      console.log('getWeb3', e);
    	return new Web3(window.ethereum || window.web3 || this.dappUrl);
		}
  }

}
