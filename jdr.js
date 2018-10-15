/*
I used to modify existing script like slideshow, lightbox, countdown, form validation
I also added coockies information depending on products, to hide or to show message depending on coockies
but before this simple exercise, I have never used the real programation object,
that's why I think it's interesting to show it
the result will be seen in console, it's a small "game"w with heroes, monsters and properties
*/


var Personnage={
	initPerso:function(nom,force,vie,or,cle){
		this.nom=nom;
		this.force=force;
		this.vie=vie;
		this.or=or;
		this.cle=cle;
		},
	attaquer:function(cible){	
		if(this.vie > 0){
				var degat=this.force;
				cible.vie=cible.vie-degat;
				
				if(cible.vie > 0){
					console.log(cible.nom+" a subit "+degat+" points de degat, il lui reste "+cible.vie+" points de vie");
				}
				else{
					console.log(cible.nom+" est mort");
					}
			}
		else{
			console.log(this.nom+" est mort, il ne peut plus attaquer");
			}
		}
};

var Joueur = Object.create(Personnage);
	Joueur.initJoueur=function(nom,force,vie,or,cle){
		this.initPerso(nom,force,vie,or,cle);
		this.xp=0;//les joueurs auront des point d'experience mais pas les méchants construits avec le prototype personnage
	};
	Joueur.decrire=function(){
		var description="le Heros "+this.nom+", points de force : "+this.force+", points de vie : "+this.vie+
		", points d'experience : "+this.xp+", il possède "+this.or+" pièces d'or, et "+this.cle+" clé(s)";
		return description;
	};
	Joueur.combattre=function(cible){
			this.attaquer(cible);
			if(cible.vie < 0){
				console.log("le gros mechant "+cible.nom+" a ete tue par "+this.nom+" et lui donne "+cible.valeur+" points d'experience, ainsi que "+cible.or+" pièces d'or et "+cible.cle+" clé(s)");
				this.xp=this.xp+cible.valeur;
				this.or=this.or+cible.or;
				this.cle=this.cle+cible.cle;
				console.log("l'experience de "+this.nom+" est de "+this.xp+" il possede "+this.or+" pieces d' or et "+this.cle+" cle(s)");
				}
		};

var Mechant=Object.create(Personnage);
	Mechant.initMechant=function(nom,force,vie,race,valeur,or,cle){
		this.initPerso(nom,force,vie,or,cle);
		this.race=race;
		this.valeur=valeur;
	};
	
	Mechant.decrire2=function(){
		var description2="le mechant "+this.nom+", points de force : "+this.force+", points de vie : "+this.vie+
		", de race : "+this.race+" et de valeur : "+this.valeur+", il possède "+this.or+" pièces d'or, et "+this.cle+" clé(s)";
		return description2;
	};
	
var Joueur1=Object.create(Joueur);
Joueur1.initJoueur("Ares",350,120,10,1);

var Joueur2=Object.create(Joueur);
Joueur2.initJoueur("Lila",250,200,10,1);

var Monstre1=Object.create(Mechant);
Monstre1.initMechant("Zorg Glub",20,500,"Troll",2000,10,1);

console.log("bienvenue dans ce jeux d'aventure ! Dites bonjour à nos deux héros !");

console.log(Joueur1.decrire());
console.log(Joueur2.decrire());

console.log("Arrive un gros monstre:");
console.log(Monstre1.decrire2());


console.log("le monstrueux "+Monstre1.nom+" attaquent nos heros !");
Monstre1.attaquer(Joueur1);
Monstre1.attaquer(Joueur2);
console.log(Joueur1.decrire());
console.log(Joueur2.decrire());

console.log(Joueur1.nom+" et "+Joueur2.nom+" contre-attaquent !");
Joueur2.combattre(Monstre1);
Joueur1.combattre(Monstre1);
