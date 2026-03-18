# taskly
Taskly - webbasierte To-Do-App zur einfachen und übersichtlichen Verwaltung privater Aufgaben.

Die Anwendung ermöglicht es, Aufgaben zentral zu erstellen, zu organisieren und ihren Fortschritt zu verfolgen. Ziel ist es, eine strukturierte Alternative zu Notizen, Zetteln oder Kalendern zu bieten.

---

## Technologien

- Frontend: React
- Backend: Java / Spring Boot
- Datenbank: MariaDB (Docker)
- Kommunikation: REST API

---

## Projektstruktur

- `frontend/` → React-Anwendung (Benutzeroberfläche)
- `backend/` → Spring Boot API und Datenbanklogik
- `docker-compose.yml` → Konfiguration für MariaDB (Docker)

---

## Installation & Start

1. Repository klonen:
   `git clone https://github.com/mayyademic/taskly.git`

2. Docker starten
`dokcer-compose up`

3. Backend starten 
`TasklyBackendApplication`

4. Frontend starten:
   `npm install`
   `npm start`

4. Anwendung im Browser öffnen:
   `http://localhost:3000`