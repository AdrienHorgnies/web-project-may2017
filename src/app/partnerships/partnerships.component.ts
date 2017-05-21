import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wp-partnerships',
  templateUrl: './partnerships.component.html',
  styleUrls: ['./partnerships.component.css']
})
export class PartnershipsComponent implements OnInit {
  partnerships = [
    'Le Fonds social européen',
    'Le Ministère de la Région wallone',
    'Différentes administrations communales',
    'La CSCSP',
    'Le Ministère de la Fédération Wallonie-Bruxelles',
    'L\'Université de Namur (convention REBOND)',
    'La prison de Namur (convention REINSERT)',
    'Le Parlement wallon',
    'Le FOREM',
    'Différents CPAS du namurois',
    'La Croix-Rouge',
    'L\'athénée royal de Jambes'
  ];

  constructor() { }

  ngOnInit() {
  }

}
