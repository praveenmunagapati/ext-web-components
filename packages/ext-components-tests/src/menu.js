import ElementInsertBetween from './view/elementinsertbetween/ElementInsertBetweenComponent.js';
import ElementInsertEnd from './view/elementinsertend/ElementInsertEndComponent.js';
import ElementInsertStart from './view/elementinsertstart/ElementInsertStartComponent.js';
import InsertBetween from  './view/insertbetween/InsertBetweenComponent.js';
import InsertEnd from  './view/insertend/InsertEndComponent.js';
import InsertStart from  './view/insertstart/InsertStartComponent.js';

import Defaults from  './view/defaults/DefaultsComponent.js';

import BasicEventComponent from  './view/basicevent/BasicEventComponent.js';
import SingleEventComponent from './view/singleevent/SingleEventComponent.js';

import HTMLInExtComponent from './view/htmlinextcomponent/HTMLInExtComponent.js';

import SimpleAttributeUpdateComponent from './view/simpleattributeupdate/SimpleAttributeUpdateComponent.js';
import ClassNameUpdateComponent from './view/classnameupdate/ClassNameUpdateComponent.js';

import UpdateFunctionsComponent from './view/updatefunctions/UpdateFunctionsComponent.js';

import SimpleComponent from './view/simple/SimpleComponent.js';

export default function getMenu() {
  return [
    { text: 'Element Insert Between', component: ElementInsertBetween },
    { text: 'Element Insert End', component: ElementInsertEnd },
    { text: 'Element Insert Start', component: ElementInsertStart },
    { text: 'Insert Between', component: InsertBetween },
    { text: 'Insert End', component: InsertEnd },
    { text: 'Insert Start', component: InsertStart },
    { text: 'Defaults', component: Defaults },
    { text: 'Basic Event', component: BasicEventComponent },
    { text: 'Single Event', component: SingleEventComponent },
    { text: 'HTML in Ext Component', component: HTMLInExtComponent },
    { text: 'Simple Attribute Update', component: SimpleAttributeUpdateComponent },
    { text: 'Class Name Update', component: ClassNameUpdateComponent },
    { text: 'Update Functions', component: UpdateFunctionsComponent },
    { text: 'Simple', component: SimpleComponent },
  ]
};