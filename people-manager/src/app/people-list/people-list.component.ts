import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; // Import Router
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-people-list',
  standalone: true,
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css'],
  imports: [CommonModule, RouterModule, HttpClientModule],
})
export class PeopleListComponent implements OnInit {
  people: any[] = [];
  private apiUrl = 'http://localhost:3000/people';

  constructor(private http: HttpClient, private router: Router) {} // Inject Router

  ngOnInit() {
    this.loadPeople(); // Fetch data when the component initializes
  }

  loadPeople() {
    this.http.get(this.apiUrl).subscribe((data: any) => {
      this.people = data;
      console.log('People loaded:', this.people);
    });
  }

  navigateToAdd() {
    this.router.navigate(['/add']); // Navigate to the "Add Person" route
  }

  navigateToEdit(id: number) {
    this.router.navigate(['/edit', id]); // Navigate to the "Edit Person" route with the ID
  }

  deletePerson(id: number) {
    if (confirm('Are you sure you want to delete this person?')) {
      this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => {
        alert('Person deleted successfully!');
        this.loadPeople(); // Reload the list after deletion
      });
    }
  }
}