
Brief4: Implémentation d’un système de gestion de tach : To Do List

le contexte du projet : le projet vise à implémenter une application web de gestion des tache(todo list) pour faciliter la gestion des tache pour les utilisateurs. Chaque tâche veut prendre un titre, une date d'échéance, description,un statut spécifique (todo, doing,done), et une priorité (p1, p2,p3). l’application doit contenir un modal pour donner à l'utilisateur la possibilité d’ajouter une tâche avec les inputs suivant : titre, description, date d’échéance, statut et priorité de la tâche.

Le processus de développement de l’application :

la création de repository on GitHub et la création de nouveau projet on GitHub Projects puis cloner le repository dans ma machine locale.
L'installation de framework Tailwind pour assurer une apparence moderne de l'application par l’utilisation des classes prédéfinies de ce dernier. 
Installation de la bibliothèque des icons font awesome
la structuration de workspace visual Studio(création de dossier public,src,css et js)
la création de fichier Index.html qui doit contenir la structure de la page, il contient les éléments suivant :
un header pour les boutons d’ajout de tâche et la barre de recherche
une section qui représente l’ensemble une bar de filtrage,et l’ensemble des tâches existantes divisées en trois blocs, un bloc pour les tâches avec le statut todo, doing et pour done avec le nombre de tâches existantes pour chaque statut.
chaque tâches se représentant avec son nom et ça date d’échéance et un couleur de bordure qui spécifie sa priorité
une section pour le modal qui contient un formulaire pour ajouter une tâche avec des inputs pour le titre, la description, la date, le statut et la priorité. 
la création d’un fichier css pour l’ajout du style spécifique au modal
la création d’un fichier js qui doit contenir l’ensemble des fonctions qui nous permet de rendre l’application interactive et dynamique. 
La fonction d’ajout des tâches dans un tableau d’objet chaque tâches doit être stockée selon son statut avec l’augmentation de nombre de tâches de chaque statut.
la fonction d’affichage des tâches et le nombre des tâches existantes sur la page.
la fonction de suppression des tâches 
la fonction qui permet d'assigner un couleur pour chaque tâche selon sa priorité
fonction de filtrage des tâches selon la priorité.
ajout des animation pour le header et le centenaire des tâches

