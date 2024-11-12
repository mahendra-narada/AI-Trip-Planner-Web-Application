import { Routes } from '@angular/router';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { LoginComponent } from './pages/login/login.component';
import { SigninComponent } from './pages/signin/signin.component';
import { FAQComponent } from './pages/faq/faq.component';
import { InputPlanComponent } from './pages/input-plan/input-plan.component';
import { UserdashboardComponent } from './pages/userdashboard/userdashboard.component';

export const routes: Routes = [
    {
        path: "",
        component:DashBoardComponent
    },
    {
        path:"login",
        component:LoginComponent
    },
    {
        path: "Join",
        component:SigninComponent
    },
    {
        path:"FAQ",
        component:FAQComponent
    },
    {
        path:"Plan",
        component:InputPlanComponent
    },
    {
        path:"UserDashBoard",
        component:UserdashboardComponent
    }
  
];
