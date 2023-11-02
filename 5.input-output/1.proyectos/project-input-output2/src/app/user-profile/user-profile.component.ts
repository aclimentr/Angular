import { Component } from '@angular/core';
import { Profile } from '../profile.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

    //aquí vamos a mostrar la información del perfil y permitir la edición 
    //a través del componente hijo

    user: Profile = {
      firtsName: 'Carlos',
      lastName: 'Eldeloshuevoslargos',
      email: 'carloshuevoslargos@hotmail.com'
    }

    //esta variable nos permite saber si estamos en modo edición o no
    //se inicializa en false
    editMode = false;

    //función que se llama cuando se actualiza el perfil en el componente hijo

    onProfileUpdated(updatedProfile: Profile){
      this.user = updatedProfile;
      this.editMode = false;
    }
}
