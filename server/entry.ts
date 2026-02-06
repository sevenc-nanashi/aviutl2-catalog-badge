import icon from "./icon.svg?raw";
import { serve, apply } from "@photonjs/hono";
import { Hono } from "hono";
import z from "zod";

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

const app = new Hono();

// https://raw.githubusercontent.com/Neosku/aviutl2-catalog-data/refs/heads/main/index.json
const minimumCatalogSchema = z
  .object({
    id: z.string(),
    "latest-version": z.string(),
  })
  .array();

app.get("/api/badge/:name", async (c) => {
  const { name } = c.req.param();
  const data = await fetch(
    `https://raw.githubusercontent.com/Neosku/aviutl2-catalog-data/refs/heads/main/index.json`,
    {
      cf: {
        cacheTtl: 60 * 60, // 1 hour
      },
    },
  )
    .then((res) => res.json())
    .then((data) => minimumCatalogSchema.parse(data));
  const packageData = data.find(
    (pkg) => pkg.id.toLowerCase() === name.toLowerCase(),
  );
  if (!packageData) {
    return c.json(
      {
        schemaVersion: 1,
        label: "Catalog",
        message: "not found",
        color: "red",
      },
      404,
    );
  }

  return c.json({
    schemaVersion: 1,
    iconSvg: icon,
    label: "Catalog",
    message: packageData["latest-version"],
    color: "cyan",
  });
});
apply(app);

export default serve(app, {
  port,
});
