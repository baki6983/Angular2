
import { Router, ActivatedRouteSnapshot,CanActivate } from '@angular/router'
import {Injectable } from '@angular/core'
import { ServicesComponent } from './services/services.component'

@Injectable()
export class CanActiveRoute implements CanActivate {

  constructor(private serviceC:ServicesComponent,
  private router:Router){

  }

  canActivate(route:ActivatedRouteSnapshot)
  {
const evenExists=!!this.serviceC.getEventById(+route.params['id'])

  if(!evenExists)
  this.router.navigate(['/404'])
  return evenExists
  }
}
