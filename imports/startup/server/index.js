// Import server startup through a single index entry point
import { Meteor } from 'meteor/meteor';
import { Books } from "../../api/books/books"

import './fixtures.js';
import './register-api.js';

const books = [{
        "image": "img/hunger-games.jpg",
        "bookname": "Hunger Games : La Révolte",
        "author": "Suzanne Collins",
        "category": "Dystopie",
        "date": "05/05/2011",
        "description": "Les Hunger Games ont commencé. Le vainqueur deviendra riche et célèbre. Les autres mourront… Dans un futur sombre, sur les ruines des États-Unis, un jeu télévisé est créé pour contrôler le peuple par la terreur. Douze garçons et douze filles tirés au sort participent à cette sinistre téléréalité, que tout le monde est forcé de regarder en direct. Une seule règle dans l’arène : survivre, à tout prix. Quand sa petite soeur est appelée pour participer aux Hunger Games, Katniss n’hésite pas une seconde. Elle prend sa place, consciente du danger. À seize ans, Katniss a déjà été confrontée plusieurs fois à la mort. Chez elle, survivre est comme une seconde nature…"
      }, {
        "image": "img/etoiles-contraires.jpg",
        "bookname": "Nos étoiles contraires",
        "author": "John Green",
        "category": "Drame",
        "date": "19/10/2012",
        "description": "Hazel Grace Lancaster et Augustus Waters sont deux adolescents hors-normes, partageant un humour ravageur et le mépris des conventions. Leur relation est elle-même inhabituelle, étant donné qu’ils se sont rencontrés et sont tombés amoureux via un groupe de soutien pour les malades. Ils savent tout les deux qu'ils n'ont plus beaucoup de temps à vivre, de ce fait Augustus va tenter de réaliser le rêve de Hazel, rencontrer l'auteur de son roman préféré, à Amsterdam. Malheureusement ce voyage ne va pas se passer comme prévu..."
      }, {
        "image": "img/aventures-charlotte.jpg",
        "bookname": "Les Aventures de Charlotte Holmes : Le dernier des Moriarty",
        "author": "Brittany Cavallaro",
        "category": "Mystè",
        "date": "12/09/2016",
        "description": "Les vacances de Noël de Jamie Watson ne s’annoncent pas de tout repos : invité dans le luxueux manoir des Holmes dans le Sussex, il se heurte à l’énigmatique comportement de Charlotte. Et quand l’oncle de celle-ci disparaît, le duo se doit de reprendre du service. Les arrière-petits-enfants des célèbres D. Watson et Sherlock Holmes s’envolent alors pour Berlin, sur les traces d’une mystérieuse filière des faussaires… Leur contact ? Auguste, le dernier descendant des Moriarty…"
      }, {
        "image": "img/blacklistee.jpg",
        "bookname": "Blacklistée",
        "author": "Cole Gibsen",
        "category": "Drame",
        "date": "04/05/2017",
        "description": "La vie de Regan bascule le jour où elle découvre ses messages privés placardés sur les murs du lycée. Mensonges, insultes, manipulations… tous ses secrets sont dévoilés. En une seconde et quelques clics, sa vie bascule… Elle devient une paria. Qui a pu la trahir ainsi ? Et pourquoi Nolan, ce mystérieux garçon au charme trouble, se trouve-t-il toujours sur son chemin ? La chute de Regan n’est pourtant qu’un début. Et personne n’en sortira indemne."
      }, {
        "image": "img/carry-on.jpg",
        "bookname": "Carry On",
        "author": "Rainbow Rowell",
        "category": "Drame",
        "date": "05/01/2017",
        "description": "Une histoire d’amour profondément émouvante et complètement envoutante dans un univers effrayant de monstres et de fantomes… Un cocktail aussi surprenant que captivant ! Simon Snow déteste cette rentrée. Sa petite amie rompt avec lui ; son professeur préféré l’évite ; et Baz, son insupportable colocataire et ennemi juré, a disparu. Qu’il se trouve à l’école de magie de Watford ne change pas grand-chose. Simon n’a rien, mais vraiment rien de l’Élu. Et pourtant, il faut avancer, car la vie continue…"
      }, {
        "image": "img/le-labyrinthe.jpg",
        "bookname": "Intégrale Le labyrinthetashia",
        "author": "James Dashner",
        "category": "Science-Fiction",
        "date": "03/11/2016",
        "description": ""
      }, {
        "image": "img/gone.jpg",
        "bookname": "Gone : La peur",
        "author": "Michael Grant",
        "category": "Drame",
        "date": "15/10/2015",
        "description": "Depuis huit mois, les enfants de Perdido Beach vivent sans adultes, piégés à l’intérieur de la Zone. Ils ont survécu à la famine, aux mensonges et l’épidémie. Mais sauront-ils faire face à l’obscurité et à leurs peurs les plus intimes qu’elle révèle ? Malgré la famine et les mensonges, malgré l’épidémie, les enfants de Perdido Beach ont survécu. Mais un nouvel ennemi vient rôder dans le monde fragile qu’ils ont construit. Peut-être le pire de tous : la peur. Dans l’obscurité qui envahit peu à peu la Zone surgissent les angoisses les plus terrifi antes. Pourtant, au sein de chaque clan, les survivants continuent à prendre soin les uns des autres, quel qu’en soit le prix…"
      }, {
        "image": "img/douze-ans.jpg",
        "bookname": "Douze ans, sept mois et onze jours",
        "author": "Lorris Murail",
        "category": "Drame",
        "date": "15/01/2015",
        "description": "Walden, 12 ans, est abandonné en pleine forêt par son père qui veut en faire un homme… Entre roman d’apprentissage et nature writing : un Into the wild, version thriller à vous glacer le sang. Une cabane perdue dans les forêts du Maine. C’est là que Walden est abandonné par son père. À partir de maintenant, le garçon va devoir se débrouiller pour survivre dans les bois. Avec pour seule richesse quelques boîtes de conserve, un livre de Thoreau et une carabine. À la fin de chaque journée, Walden note son âge sur une écorce de rondin. Douze ans, sept mois et quatre jours, au moment où commence son apprentissage pour le moins étrange…"
      }, {
        "image": "img/how-to-love.jpg",
        "bookname": "How to Love",
        "author": "Katie Cotugno",
        "category": "Drame",
        "date": "04/09/2014",
        "description": "Avant: du plus loin qu’elle se souvienne, Reena a toujours aimé Sawyer. Mais un jour, le garçon quitte leur petite ville de Floride du jour au lendemain… Après : Sawyer revient. Entre les deux : un nouvel amour dans la vie de Reena, sa fille, Hannah…"
      }, {
        "image": "img/eleanor-park.jpg",
        "bookname": "Eleanor & Park",
        "author": "Rainbow Rowell",
        "category": "Drame",
        "date": "05/06/2014",
        "description": "Une chronique culte de l’adolescence sur fond de Smiths et de comics. 1986. Lorsque Eleanor, nouvelle au lycée, trop rousse, trop ronde, s’installe à côté de lui dans le bus scolaire, Park, garçon solitaire et secret, l’ignore poliment. Pourtant, peu à peu, les deux lycéens se rapprochent, liés par leur amour des comics et des Smiths… Et qu’importe si tout le monde au lycée harcèle Eleanor et si sa vie chez elle est un véritable enfer, Park est prêt à tout pour la sortir de là."
      }, {
        "image": "img/la-fournaise.jpg",
        "bookname": "La Fournaise : L’isolement",
        "author": "Alexander Gordon Smith",
        "category": "Drame",
        "date": "05/06/2014",
        "description": "Alex et ses amis pensaient avoir réussi leur évasion. Mais ils auraient dû se douter qu’on n’échappe pas si facilement à la Fournaise… Les voilà piégés dans les tunnels situés sous la prison. Ils regretteraient presque leur cellule et les créatures inhumaines qui les gardaient ! Désormais, le temps est compté. Dans ce gouffre obscur, leurs pires cauchemars vont prendre vie…"
      }, {
        "image": "img/voyage-ulysse.jpg",
        "bookname": "Lorris Murail",
        "author": "Lorris Murail",
        "category": "Drame",
        "date": "20/01/2005",
        "description": "Troie n’est plus qu’un champ de ruines. Vainqueurs, les Grecs vont enfin pouvoir rentrer dans leur patrie. Parmi eux Ulysse, roi d’Ithaque : avec ses compagnons, il s’embarque pour une fabuleuse odysée qui le mènera de Charybde en Scylla. Mais bien vite, sur les flots déchaînés par la colère de Poséidon, il devient un simple fétu de paille, balloté entre la caverne du Cyclope et le pays de l’envoûtante Circé."
      }]

Meteor.startup(() => {
  if (Books.find().count() === 0) {
    books.map(( book ) => {
      Books.insert( book )
    })
  }
})