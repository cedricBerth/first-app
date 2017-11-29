import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/*class Personne{
  nom : string;
  prenom : string;
  description : string;
  travail : string;

  constructor(nom : string, prenom: string, description : string, travail : string){
    this.nom = nom;
    this.prenom = prenom;
    this.description = description;
    this.travail = travail;
  }
}*/
export class AppComponent {
  title = 'Liste des scientifiques';

  //personne = new Personne("Einstein", "Albert", "Il publie sa théorie de la relativité restreinte en 1905 et sa théorie de la gravitation dite relativité générale en 1916. Il contribue largement au développement de la mécanique quantique et de la cosmologie, et reçoit le prix Nobel de physique de 1921 pour son explication de l’effet photoélectrique2. Son travail est notamment connu du grand public pour l’équation E=mc2, qui établit une équivalence entre la matière et l’énergie d’un système.", "Relativité générale");

  personne = {
    nom : 'Einstein',
    prenom : 'Albert',
    description : 'Il publie sa théorie de la relativité restreinte en 1905 et sa théorie de la gravitation dite relativité générale en 1916. Il contribue largement au développement de la mécanique quantique et de la cosmologie, et reçoit le prix Nobel de physique de 1921 pour son explication de l’effet photoélectrique2. Son travail est notamment connu du grand public pour l’équation E=mc2, qui établit une équivalence entre la matière et l’énergie d’un système.',
    travail : 'Relativité générale'
  };

  count:number = 0;
  clickEffectue(){
    this.count++;
    this.personne.nom += this.count;
  }

}
