import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../components/Card";

export type allCard = {
  id: number;
  cardId: string;
  name: string;
  imageUrl: string;
  type: string;
  hp: number;
  attack: {
    name: string;
    cost: string;
    damage: string;
  }[];
  damage: number;
  weakness: string;
  createdAt: Date;
  updatedAt: Date;
};

const Inventory = () => {
  const [allCard, setAllCard] = useState<allCard[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAllCard = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/card/allCard");
      const rawData = response.data.allCard;

      // Parse attack field (if it's a string)
      const parsedData = rawData.map((card: any) => ({
        ...card,
        attack: typeof card.attack === "string" ? JSON.parse(card.attack) : card.attack,
      }));

      setAllCard(parsedData);
    } catch (error) {
      console.error("Failed to fetch cards:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllCard();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      {allCard.map((card) => (
        <Card
          key={card.id}
          cardId={card.cardId}
          name={card.name}
          type={card.type}
          hp={card.hp}
          damage={card.damage}
          weakness={card.weakness}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
};

export default Inventory;
