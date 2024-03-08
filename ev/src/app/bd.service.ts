import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BdService {

  private urlBase:string = "assets/json/"

  private manufacturers:any = []
  private technologies:any = []
  private vehicles:any = []

  constructor(private http:HttpClient) {}

  getCarById(id:string) {
    //let vehicles = this.getVehicles()
    if (this.vehicles.length) return this.vehicles.find( ( v:any ) => v.id == id )
  }

  getManufacturers() {
    if (this.manufacturers.length) return this.manufacturers
    else {
      this.http.get(this.urlBase + "manufacturers.json").subscribe( resp => {
        this.manufacturers = resp
      } )
    }
  }

  getTechnologies() {
    if (this.technologies.length) return this.technologies
    else {
      this.http.get(this.urlBase + "technologies.json").subscribe( resp => {
        this.technologies = resp
      } )
    }
  }

  getVehicles() {
    if (this.vehicles.length) return this.vehicles
    else {
      this.http.get(this.urlBase + "vehicles.json").subscribe( resp => {
        this.vehicles = resp
      } )
    }
  }
}
