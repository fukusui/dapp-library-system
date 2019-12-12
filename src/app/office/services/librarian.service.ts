import { Injectable } from '@angular/core';
import { Observable, combineLatest, from, interval, of, Subject, throwError } from 'rxjs';
import { map, mergeMap, shareReplay, switchMap, tap, toArray, filter, share, distinctUntilChanged, catchError } from 'rxjs/operators';

import { Web3Service } from './web3.service';
import { OfficeService } from './office.service';
import LibContract from 'build/contracts/Librarian.json';
// declare let require: any;
// let LibContract = require( '../../../../build/contracts/Librarian.json');
//

@Injectable()
export class LibService {
	private libContract$: Observable<any>;
  public auth$: Observable<any>;

  constructor(private web3Service: Web3Service,
    private office: OfficeService) {
    this.libContract$ = from(this.web3Service.getWeb3()).pipe(
      switchMap((provider => from(this.getLibContract(provider)))),
    );

  	this.auth$ = this.web3Service.account$.pipe(
			switchMap(address => this.employee(address)),
    );
  }

	private async getLibContract(web3) {
    try {
      // const instance = new web3.eth.Contract(LibContract);
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = LibContract.networks[networkId];
      const instance = new web3.eth.Contract(
      LibContract.abi, deployedNetwork && deployedNetwork.address,
      );
      return instance;
    } catch(e) {
      console.log(e);
    }
  }

	public employee(address): Observable<any> {
		return this.libContract$.pipe(
			switchMap(contract =>
				contract.methods.employee(address).call()),
			catchError(this.handleError)
		);
	}

  public auth(): Observable<any> {
    let account = this.office.getAdminDetails();
    return this.office.getAdmin(account._id).pipe(
      switchMap(admin => this.employee(admin.address)),
      catchError(this.handleError)
    )
  }


	public addEmployee(address): Observable<any> {
		return combineLatest(this.web3Service.account$,
			this.libContract$).pipe(
				switchMap(([account, contract]) =>
					contract.methods.addEmployee(address)
					.send({from: account})),
				catchError(this.handleError)
		)
	}

	public addAdmin(address): Observable<any> {
		return combineLatest(this.web3Service.account$,
			this.libContract$).pipe(
				switchMap(([account, contract]) =>
					contract.methods.addAdmin(address)
						.send({from: account})),
				catchError(this.handleError)
		)
	}

	public deleteEmp(address): Observable<any> {
		return combineLatest(this.web3Service.account$,
			this.libContract$).pipe(
				switchMap(([account, contract]) =>
					contract.methods.deleteEmployee(address)
						.send({from: account})),
				catchError(this.handleError)
			)
	}

  public combinedData(): Observable<any> {
    return this.office.getAdmins().pipe(
      mergeMap((admins =>
        from(admins).pipe(
          mergeMap((admin:any) => this.employee(admin.address),
            (original, detail) => ({...original, auth: detail})
          ),
          toArray()
				))),
			catchError(this.handleError)
		)
	}

	private handleError(error) {
  	let errorMessage = '';
   	if (error.error instanceof ErrorEvent) {
     // client-side error
      errorMessage = `Error: ${error.error.message}`;
   	} else {
     // server-side error
     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
   	}
   	window.alert(errorMessage);
   	return throwError(errorMessage);
	}

}
