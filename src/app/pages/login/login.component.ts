import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  Email:string="";
  password:string="";


   async loginUser() {

    if (!this.Email || !this.password) {
      Swal.fire('Please fill in all fields!', '', 'warning');
      return;
    }

    if (!this.isValidEmail(this.Email)) {
      Swal.fire('Please enter a valid email address!', '', 'error');
      return;
    }

    try {
      const response = await fetch ('http://localhost:8080/User/login',
       { method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify({
          userEmail:this.Email,
          userPassword:this.password
        }),
       });

       if (response.ok) {
        const data = await response.json();
        Swal.fire('Login successFull','','success'); 
       }
       else{
        Swal.fire('Invalid credentials','','error');
       }
    } catch (error) {
      Swal.fire('An Error occured!','','error');
      
    }

    };


    
 isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
} 

}
