import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Add this

@Component({
  selector: 'app-delete-person',
  standalone: true,
  templateUrl: './delete-person.component.html',
  styleUrls: ['./delete-person.component.css'],
  imports: [CommonModule, HttpClientModule], // Include HttpClientModule
})
export class DeletePersonComponent implements OnInit {
  private apiUrl = 'https://your-rest-api-url/people';

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (confirm('Are you sure you want to delete this person?')) {
      this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => {
        alert('Person deleted successfully!');
      });
    }
  }
}