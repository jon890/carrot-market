import { Prisma, PrismaClient } from "@prisma/client";

const client = new PrismaClient<Prisma.PrismaClientOptions, "query">({
  log: [
    {
      emit: "stdout",
      level: "query",
    },
    {
      emit: "stdout",
      level: "error",
    },
    {
      emit: "stdout",
      level: "info",
    },
    {
      emit: "stdout",
      level: "warn",
    },
  ],
});

client.$on("query", (e: Prisma.QueryEvent) => {
  //   console.log("Query: " + e.query);
  console.log("Params: " + e.params);
  console.log("Duration: " + e.duration + "ms");
});

export default client;
