import { User } from "./User";
import { Company } from './Company';


// instructions to every other class
// on how they can be argument to 'addMarker'
export interface Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      },
      mapId: 'custom-map',
    });

  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.marker.AdvancedMarkerElement({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      },
      title: mappable.name
    })



    marker.addListener('click', () => {
      const infowindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infowindow.open({
        anchor: marker,
        map: this.googleMap
      })
    })
  }

  // addCompanyMarker(company: Company): void {
  //   new google.maps.marker.AdvancedMarkerElement({
  //     map: this.googleMap,
  //     position: {
  //       lat: company.location.lat,
  //       lng: company.location.lng
  //     }
  //   })
  // }
}