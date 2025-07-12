import { PrismaClient } from "@prisma/client";
import axios from "axios";

const client = new PrismaClient();

(async () => {
  try {
    await client.$connect();

    const response: any = await axios.get('https://api.pokemontcg.io/v2/cards', {
      params: {
        page: 1,
        pageSize: 50,
      }
    });

    const cards = response.data.data; // The actual cards array

    console.log(`Seeding ${cards.length} cards into the database...`);

    for (const card of cards) {
      // Parse fields with fallbacks
      const hp = card.hp ? parseInt(card.hp) || 0 : 0;
      const type = card.types ? card.types.join(", ") : "Unknown";
      const imageUrl = card.images?.large || card.images?.small || "";
      const attacks = card.attacks
        ? card.attacks.map((atk: any) => ({
            name: atk.name,
            cost: atk.cost ? atk.cost.join(", ") : "",
            damage: atk.damage || "0",
          }))
        : [];

      const attackJson = JSON.stringify(attacks);

      const totalDamage = attacks.reduce((sum: number, atk: any) => {
        const dmg = parseInt(atk.damage);
        return sum + (isNaN(dmg) ? 0 : dmg);
      }, 0);

      const weakness = card.weaknesses
        ? card.weaknesses.map((w: any) => w.type).join(", ")
        : "None";

      // Upsert MasterCard entry
      await client.masterCard.upsert({
        where: { cardId: card.id },
        update: {
          name: card.name,
          imageUrl,
          type,
          hp,
          attack: attackJson,
          damage: totalDamage,
          weakness,
        },
        create: {
          cardId: card.id,
          name: card.name,
          imageUrl,
          type,
          hp,
          attack: attackJson,
          damage: totalDamage,
          weakness,
        },
      });

      console.log(`Upserted card: ${card.name} (${card.id})`);
    }

    console.log("Seeding complete!");
  } catch (err) {
    console.error("Error seeding the database:", err);
  } finally {
    await client.$disconnect();
  }
})();
