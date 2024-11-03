
Brief4: Implémentation d’un système de gestion de tach : To Do List


![todo1](https://github.com/user-attachments/assets/18499cb0-22fc-4928-9c1c-c6a6dd23369f)
![todo2](https://github.com/user-attachments/assets/3abf71bc-b4ee-4f65-88fe-28459e52b084)
![todo3](https://github.com/user-attachments/assets/26837f62-dc8d-4ab6-891a-e31aebedfe31)





le contexte du projet :
le projet vise à implémenter une application web de gestion des tache(todo list) pour faciliter la gestion des tache pour les utilisateurs. Chaque tâche veut prendre un titre, une date d'échéance, description,un statut spécifique (todo, doing,done), et une priorité (p1, p2,p3). l’application doit contenir un modal pour donner à l'utilisateur la possibilité d’ajouter une tâche avec les inputs suivant : titre, description, date d’échéance, statut et priorité de la tâche.

Le processus de développement de l’application :

1- la création de repository on GitHub et la création de nouveau projet on GitHub Projects puis cloner le repository dans ma machine locale.

2- L'installation de framework Tailwind pour assurer une apparence moderne de l'application par l’utilisation des classes prédéfinies de ce dernier. 

3- Installation de la bibliothèque des icons font awesome

4- la structuration de workspace visual Studio(création de dossier public,src,css et js)

5- la création de fichier Index.html qui doit contenir la structure de la page, il contient les éléments suivant :

    un header pour les boutons d’ajout de tâche et la barre de recherche
    une section qui représente l’ensemble une bar de filtrage,et l’ensemble des tâches existantes divisées en trois blocs, un bloc pour les tâches avec le statut 
    todo, doing et pour done avec le nombre de tâches existantes pour chaque statut.
    chaque tâches se représentant avec son nom et ça date d’échéance et un couleur de bordure qui spécifie sa priorité
    une section pour le modal qui contient un formulaire pour ajouter une tâche avec des inputs pour le titre, la description, la date, le statut et la priorité. 
    
6- la création d’un fichier css pour l’ajout du style spécifique au modal

7- la création d’un fichier js qui doit contenir l’ensemble des fonctions qui nous permet de rendre l’application interactive et dynamique. 

8- La fonction d’ajout des tâches dans un tableau d’objet chaque tâches doit être stockée selon son statut avec l’augmentation de nombre de tâches de chaque 
statut.
a- la fonction d’affichage des tâches et le nombre des tâches existantes sur la page.

b- la fonction de suppression des tâches 

c- la fonction qui permet d'assigner un couleur pour chaque tâche selon sa priorité

d- fonction de filtrage des tâches selon la priorité.

e- ajout des animation pour le header et le centenaire des tâches

