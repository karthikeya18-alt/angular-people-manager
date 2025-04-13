import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

@Component({
  selector: 'app-add-person',
  standalone: true,
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css'],
  imports: [CommonModule, FormsModule, HttpClientModule], // Include HttpClientModule here
})
export class AddPersonComponent {
  person: any = { name: '', email: '' };
  private apiUrl = 'http://localhost:3000/people';

  constructor(private http: HttpClient, private router: Router) {}

  addPerson() {
    console.log("person add function...")
    this.http.post(this.apiUrl, this.person).subscribe(() => {
      alert('Person added successfully!');
      this.router.navigate(['/']); // Navigate back to the People List
    });
  }
}