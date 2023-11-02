import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Profile } from 'src/app/profile.model';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {

  //este componente hijo va a recibir el profile como entrada y va a 
  //permitir su edición y le enviará al componente padre el perfil actualizado
  @Input() profile: Profile | undefined;

  @Output() profileUpdated = new EventEmitter<Profile>(); 

  updatedProfile(): void{
    this.profileUpdated.emit(this.profile);
  }
}
