import angular from 'angular';
import uiRouter, {IStateProvider, IUrlRouterProvider} from 'angular-ui-router'
import {HomeComponent} from './home.component'
import {MenuModule} from "../menu/menu.module";

export const HomeModule = angular
    .module('common.home', [
        uiRouter,
        MenuModule
    ])
    .component('home', HomeComponent)
    .config(($stateProvider : IStateProvider, $urlRouterProvider: IUrlRouterProvider) => {
        $stateProvider
            .state('home', {
                url: '/home',
                component: 'home'
            });
        $urlRouterProvider.otherwise('/');
    })
    .name;
