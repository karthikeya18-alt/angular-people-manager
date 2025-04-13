import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router'; // Import Router
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-edit-person',
  standalone: true,
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css'],
  imports: [CommonModule, FormsModule, HttpClientModule], // Include HttpClientModule
})
export class EditPersonComponent implements OnInit {
  person: any = {};
  private apiUrl = 'http://localhost:3000/people';

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router // Inject Router for navigation
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.http.get(`${this.apiUrl}/${id}`).subscribe((data: any) => {
      this.person = data;
    });
  }

  saveChanges() {
    const id = this.route.snapshot.params['id'];
    console.log('Saving changes for person:', this.person); // Log the person being updated
    console.log(`PUT request URL: ${this.apiUrl}/${id}`); // Log the request URL
  
    this.http.put(`${this.apiUrl}/${id}`, this.person).subscribe(() => {
      alert('Changes saved successfully!');
      this.router.navigate(['/']); // Navigate back to the People List page
    });
  }
}