

## Description

List your superheroes along with their superpowers and ratings using this API: Hosted API Documentation [Superhero API](http://ec2-16-170-243-190.eu-north-1.compute.amazonaws.com:3000/api).

<p align="center">
  <a href="http://ec2-16-170-243-190.eu-north-1.compute.amazonaws.com:3000/api#/" target="blank"><img src="https://media-hosting.imagekit.io//3ac14b8eeb194193/superheroapi.png?Expires=1833273901&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ZcCsGb3xw9VmlGNGloAkLRiW7u3VYJafdW7VDrJtTdglAvQc05HrNU2TbqoUAOhVv8SDt6CyIbifkgk1Sf6lAQ7IPZKiR8TmaarKAZEr2aQXG3RVzPt189gZJYwvX3-X8ikfrp7WitXuDfq0yDm67K2e~sY71IpZ1V0EDy5EqCjFDVbcZJH-TyB2w-TqejgOMIbf~FMdsOmRxRom~SOj~~Iuasw1zXYjLYnYjf8KQotumNrR6V5EAT0akSrivTpz2vv-2qnH427Yu0mOW~GPua~bsUt-JQBrSu~d3ZKcY2F8jF~l2QAHnhIhKdQrJac1m4oiHgpQaacxLreIZ8crLQ__" width="70%" alt="superhero app" /></a>
</p>


A React - ``Next.js`` frontend application is available that displays a list of superheroes. You can easily download the application from the [repository](https://github.com/sankarseran/superheroWeb/tree/main) and follow the instructions to set it up and run it locally. Once set up, you can explore the superheroes listed on the interface. The app also allows you to filter superheroes by name, making it easier to find specific heroes. Additionally, you can add new superheroes directly within the application itself.

<p align="center">
  <a href="https://github.com/sankarseran/superheroWeb/tree/main" target="blank"><img src="https://media-hosting.imagekit.io//e60c396af23943dd/superheroweb.png?Expires=1833274072&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=TitBkvqBVCWUAiiyCu-Z7LoAWDvTFblfd9LlV40LJutA58XBoDAC0pNS~SC95htgCkEyEmS-v3xNI5bUnsMZnLRtkq5EfPCdiDcrCwO3yz3Eko1yPyBOiuvCbEVRhAAbmljHPDdvblZi0zvSfnrMRfEzJlGZLqF5SkDp5JmeSLHEWzlL3n7zczLjcnTrmyNgeHAf1Hld4pzps0zXMxIaH76gqdZ3PMLJYfcznK1Ufa-rnOtwHx7nwMVK5BNBjMiGG-Vx4T7aKO1Q4ihuVNHQxr2ikUzYHisWoZKsGRXaVGz0n3vgeK0K~S7eRKTo9LDoFimc9KPlUf1ttb44u4IyOg__" width="45%" style="margin-right: 5px; border: 2px solid black;" alt="superhero app" /></a>
  <a href="https://github.com/sankarseran/superheroWeb/tree/main" target="blank"><img src="https://media-hosting.imagekit.io//3c0f7febc985487d/superheroweb1.png?Expires=1833276048&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=0zif1N~ztVO1DIsEx8ABEtultrmuyTM6nVnZffwC4VJCr5Hh~zUpJ7Vf15xO14Fk7cigcQgYEHPdN7swoCForchyPSTM-N9lBajtQwfpkhYa4W3KULBNVhmowWLegRBlPg53eGZ~AYUwEY6gB-juKrRPvXGXgos-HexdYn~87YnnSqY~uSKkaeEbm2yiGJBflyi~YAZrgsjq-PPHlRFgjPJghzCThmBn3cQkXFtExqhx5~1Alb8M3zhmFkwmE3XmNFUlHf4qwCjxVZpZFXRFZw2VjkGzHQJUTiL7NGBTR04KjXTrFbi66T-yvXoJDisPvpoBbICYxt7~snG4kLqagA__" width="45%" style="margin-left: 5px; border: 2px solid black;" alt="superhero app" /></a>
</p>

## Stack used
- Backend
    - Nest.js
    - Postgresql
    - Prisma ORM
- Frontend
    - React
    - Next.js
    - Ant desing UI
- Devops
    - AWS RDS Postgresql
    - AWS EC2 Instance


## Project setup
First, install dependencies:

```bash
$ npm install
```
## Database Configuration
To connect to an existing database, use the shared ``.env`` file (sent via email) and place it in the root folder.

If using a different **PostgreSQL** database, update the ``.env`` file with:

```bash
DATABASE_URL=your_database_connection_string
```
Then, run Prisma migrations:
```bash
# To run prisma migration 
$ prisma migrate dev --name migration_name
or
$ npx prisma migrate dev --name migration_name
```
## Running the Application
Once the setup is complete, start the application using one of the following modes:
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests
Unit tests are included to cover the core functionalities. To run them:

```bash
# unit tests
$ npm run test

```
## Team Player Attitude
When it comes to teamwork, I ensure to discuss with everyone about tasks/features through open communication to exchange ideas and give/get constructive feedbacks. We discuss and decide on the project architecture together, then divide work based on individual strengths—design, database, or UI. During development, we hold regular stand-ups to share progress, troubleshoot issues, and exchange ideas. Peer code reviews and testing are integral to maintaining quality. I value everyone’s input, fostering respectful discussions to refine ideas and ensure a collaborative, efficient workflow.

## If I had more time
-  Implement user authentication using JWT (JSON Web Tokens) to protect the API endpoints and personalize the experience. This would enable user-specific actions like adding, updating, and rating superheroes.
- Explore cursor-based pagination for more efficient data retrieval and implement soft deletes for a smoother user experience.
- Separate the update functionality for superheroes and ratings to provide more granular control.
- Increase test coverage to ensure all API scenarios, including edge cases, are thoroughly validated.
- Investigate strategies for scaling the API for production, including setting up CI/CD pipelines.

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
