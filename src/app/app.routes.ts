import { Routes } from '@angular/router';
import { About } from './components/about/about';
import { Programmes } from './components/programmes/programmes';
import { Resources } from './components/resources/resources';
import { Events } from './components/events/events';
import { Media } from './components/media/media';
import { Opportunities } from './components/opportunities/opportunities';
import { Community } from './components/community/community';
import { Home } from './components/home/home';
import { ResourceOpportunities } from './components/opportunities/resource-opportunities/resource-opportunities';
import { ProgramsOpportunities } from './components/opportunities/programs-opportunities/programs-opportunities';
import { CommunityOpportunities } from './components/opportunities/community-opportunities/community-opportunities';
import { Login } from './components/login/login';
import { authenticationGuard } from './guards/authentication-guard';
import { opportunitiesChildGuard } from './guards/opportunities-child-guard';
import { unsavedChangesGuard } from './guards/unsaved-changes-guard';
import { canMatchGuard } from './guards/can-match-guard';

export const routes: Routes = [
    //Eager loading
    { path: "login", component: Login },
    { path: "", component: Home },
    { path: "about", component: About },
    { path: "programmes", component: Programmes },
    //Lazy loading
    { 
        path: "resources", 
        loadComponent: ()=> import("./components/resources/resources")
        .then((m)=> m.Resources),
        canActivate: [authenticationGuard],
        canDeactivate: [unsavedChangesGuard],
        canMatch: [canMatchGuard]
    },
    { 
        path: "events", 
        loadComponent: ()=> import("./components/events/events")
        .then(m=> m.Events)
    },
    //Eager loading
    { path: "media", component: Media },
    { 
        path: "opportunities", 
        component: Opportunities,
        children: [
            { path: "resource-opportunities", component: ResourceOpportunities },
            { path: "programs-opportunities", component: ProgramsOpportunities },
            { path: "community-opportunities", component: CommunityOpportunities }
        ],
        canActivate: [authenticationGuard],
        canActivateChild: [opportunitiesChildGuard],
        canDeactivate: [unsavedChangesGuard],
        canMatch: [canMatchGuard]
    },
    { path: "community", component: Community },
];

