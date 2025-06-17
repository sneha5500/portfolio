# User Profile Management System (UserWebApp)

This is a full-stack ASP.NET Core MVC web application designed to register users, upload their profile pictures, and select geographical location using an interactive map.

## Technologies Used

- ASP.NET Core MVC (.NET 8)
- SQL Server (via Docker)
- Entity Framework Core (EF Core)
- Leaflet.js (for interactive maps)
- HTML, Bootstrap, Razor Pages

## Features

### 1. User Registration
- Input: Full Name, Country, Gender, Email, Phone, Date of Birth
- File Upload: Profile Picture
- Map Selection: Latitude and Longitude via interactive map

### 2. User Details Page
- Displays all user details
- Renders profile picture
- Displays a Leaflet map with a pointer on user location

### 3. Edit Profile
- Pre-fills user data for editing
- Allows updating profile picture and map location

### 4. Delete Profile
- Deletes selected user safely from SQL Server database

### 5. Index View
- Lists all users
- Displays core info in table format

## Architecture

### MVC Pattern
- **Model** – `User.cs`: Defines user schema
- **View** – Razor files in `/Views/Users/`: Handles display/UI
- **Controller** – `UsersController.cs`: Contains business logic

### Database
- SQL Server (Docker container)
- `AppDbContext.cs` connects the model with DB
- `DbSet<User>` represents the Users table

## Application Flow

### 1. Create (User Registration)
- Form inputs → model binding
- File upload saved to `/wwwroot/uploads`
- Latitude & Longitude saved from map interaction
- Data stored in DB using `_context.Users.Add(user)`

### 2. View Details
- Controller fetches user via `_context.Users.FirstOrDefaultAsync`
- Razor View displays image and Leaflet map marker at location

### 3. Edit
- Fetches user by ID
- Pre-fills data and allows edits
- New profile picture and map location handled the same way

### 4. Delete
- Confirms user intent
- Deletes user from DB via `_context.Users.Remove(user)`

## Profile Picture Upload Logic

- On submit, file is saved to `/wwwroot/uploads/`
- File path is stored in the database (e.g. `/uploads/xyz.jpg`)
- Razor view uses `<img src="~/@Model.ProfilePicturePath" />` to display image

## Map Integration (Leaflet.js)

- `leaflet.js` and `leaflet.css` added to layout/view
- On Create/Edit:
  - Map loads, user clicks to place marker
  - Captures coordinates into hidden fields
- On Details:
  - Marker shown on stored coordinates

## Project Structure

UserWebApp/
│
├── Controllers/
│ └── UsersController.cs
│
├── Data/
│ └── AppDbContext.cs
│
├── Models/
│ └── User.cs
│
├── Views/
│ ├── Users/
│ │ ├── Create.cshtml
│ │ ├── Edit.cshtml
│ │ ├── Index.cshtml
│ │ ├── Details.cshtml
│ │ └── Delete.cshtml
│ └── Shared/
│ └── _Layout.cshtml
│
├── wwwroot/
│ └── uploads/
│
├── appsettings.json
├── Program.cs
└── UserWebApp.csproj

## Summary

This application is designed with a clean MVC architecture, allowing users to manage their profile with real-time location selection and image uploads. Data is stored securely and rendered dynamically with database integration and map support. It’s a fully functional CRUD system built with production-grade ASP.NET Core.
