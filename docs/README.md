# travisscott

Bienvenue dans le projet Travis Scott !!

Build statut Travis : [![Build Status](https://travis-ci.org/messaoy/travisscott.svg?branch=master)](https://travis-ci.org/messaoy/travisscott) <br/>
Note Codacy : [![Codacy Badge](https://api.codacy.com/project/badge/Grade/da255c0c32944b279a0917c6d969b139)](https://www.codacy.com/app/messaoy/travisscott?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=messaoy/travisscott&amp;utm_campaign=Badge_Grade) <br/>


Lors de ce projet, nous tentons de mettre en place un environnement pratique et sécurisé autour de notre projet : <br/>

Tout d'abord, forker le projet puis cloner le grace à la commande "git clone adresse_du_projet". <br/>

Une fois cela fait, faire un "git flow init" avant d'initialiser git flow. Nous aurons ainsi accès à 3 branches principales : Master, Develop et Hotfix. <br/>

Master est la branche principale, contenant le code qui est mit en production, develop est la branche à partir de laquelle nous allons rajouter des features et hotfix est une branche directement relié à master qui nous permettra de régler un problème rapidement en production. <br/>

Lorsqu'une tâche vous est attribué, créer une branche feature à partir de la branche develop avec la commande "git flow feature start NOM DE LA BRANCHE". Une fois que votre tâche est terminée, utilisé la commande "git flow feature finish NOM DE VOTRE BRANCHE". Cela va push, merger sur develop puis supprimer votre branche automatiquement.

Après avoir testé votre tâche, faire une PULL REQUEST sur github de develop à Master. Après que les tests soient passés (à corriger s'il y a une erreur), la PR sera vérifiée puis validée. <br/>

Elle sera enfin build en intégration continue sur heroku.

(N'OUBLIEZ PAS DE METTRE VOS BRANCHES A JOUR).
