import { MikroORM } from "@mikro-orm/core";
import { _prod_ } from "./constants";
import { Post } from "./entities/Post";
import microConfig from "./mikro-orm.config";

const main = async () => {
  const orm = await MikroORM.init(microConfig);

  const post = orm.em.create(Post, {
    title: "My First Fullstack Project",
    createdAt: "",
    updatedAt: "",
  });

  await orm.em.persistAndFlush(post);
};

main().catch((err) => {
  console.log(err);
});
