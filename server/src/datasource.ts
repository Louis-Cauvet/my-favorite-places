import { DataSource } from "typeorm";

const datasource = new DataSource({
  type: "postgres",
  host: "db",
  username: "postgres",
  password: "Root_2026_Secure!",
  database: "postgres",
  entities: [__dirname + "/entities/**/*.{js,ts}"],
  logging: true,
  synchronize: true,
});

export default datasource;
