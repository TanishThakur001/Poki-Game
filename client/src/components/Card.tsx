import React from "react";

interface CardProps {
  cardId?: string;
  name?: string;
  type?: string;
  hp?: number;
  attack?: {
    name: string;
    cost: string;
    damage: string;
  }[];
  damage?: number;
  weakness?: string;
  imageUrl?: string;
}

const Card: React.FC<CardProps> = ({
  cardId = "001",
  name = "Charizard",
  type = "Fire",
  hp = 120,
  attack = [
    {
      name: "Fire Spin",
      cost: "Fire, Fire, Colorless",
      damage: "100",
    },
  ],
  damage = 100,
  weakness = "Water",
  imageUrl = "https://images.unsplash.com/photo-1613771404721-1f92d799e49f?w=300&h=400&fit=crop",
}) => {
  const getTypeColor = (type: string): string => {
    const typeColors: Record<string, string> = {
      grass: "bg-green-500 bg-opacity-10",
      fire: "bg-gradient-to-br from-yellow-400 to-orange-500 bg-opacity-10",
      water: "bg-blue-500 bg-opacity-10",
      dragon: "bg-purple-500 bg-opacity-10",
      lightning: "bg-yellow-300 bg-opacity-15",
      electric: "bg-yellow-300 bg-opacity-15",
    };
    return typeColors[type.toLowerCase()] || "bg-white bg-opacity-5";
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.currentTarget.style.transform = "rotateY(180deg)";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.currentTarget.style.transform = "rotateY(0deg)";
  };

  return (
    <div className="pb-36">
    <div className="relative w-72 h-96" style={{ perspective: "1000px" }}>
      <div
        className="relative w-full h-full transition-all duration-1000 ease-in-out group"
        style={{
          transformStyle: "preserve-3d",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Front of Card */}
        <div
          className={`absolute inset-0 w-full h-[400px] rounded-xl ${getTypeColor(
            type
          )} border-2 border-red-500 border-opacity-60 shadow-2xl backdrop-blur-sm`}
        >
          <div className="flex-1 ${getTypeColor(
            type
          )}  border-opacity-60 shadow-2xl backdrop-blur-sm`} bg-opacity-10 rounded-lg p-2">
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-auto object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>

        {/* Back of Card */}
        <div
          className={`absolute inset-1 w-full h-full rounded-xl ${getTypeColor(
            type
          )}  shadow-2xl backdrop-blur-sm`}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="p-1 h-full flex flex-col border-amber-50 border-8 rounded text-gray-800 bg-gray-500   overflow-hidden">
            <div className="text-center border-b e border-opacity-20 pb-2 mb-3 shrink-0">
              <h3 className="text-2xl font-bold truncate">{name}</h3>
              <p className="text-xs opacity-70">Card Details</p>
            </div>

            <div className="flex-1 grid grid-cols-2 gap-2 auto-rows-min overflow-hidden">
              <div className="bg-white bg-opacity-10 rounded-lg p-2 backdrop-blur-sm min-h-0">
                <div className="text-center">
                  <p className="text-xs font-semibold opacity-70 mb-1">
                    Card ID
                  </p>
                  <p className="font-bold text-xs truncate">#{cardId}</p>
                </div>
              </div>

              <div className="bg-white bg-opacity-10 rounded-lg p-2 backdrop-blur-sm min-h-0">
                <div className="text-center">
                  <p className="text-xs font-semibold opacity-70 mb-1">Type</p>
                  <p className="font-bold text-xs capitalize truncate">
                    {type}
                  </p>
                </div>
              </div>

              <div className="bg-white bg-opacity-10 rounded-lg p-2 backdrop-blur-sm min-h-0">
                <div className="text-center">
                  <p className="text-xs font-semibold opacity-70 mb-1">HP</p>
                  <p className="font-bold text-xs truncate">{hp}</p>
                </div>
              </div>

              <div className="bg-white bg-opacity-10 rounded-lg p-2 backdrop-blur-sm min-h-0">
                <div className="text-center">
                  <p className="text-xs font-semibold opacity-70 mb-1">
                    Damage
                  </p>
                  <p className="font-bold text-xs truncate">{damage}</p>
                </div>
              </div>

              <div className="bg-white bg-opacity-10 rounded-lg p-2 backdrop-blur-sm col-span-2 min-h-0">
                <div className="text-center">
                  <p className="text-xs font-semibold opacity-70 mb-1">
                    Attack
                  </p>
                  {Array.isArray(attack) && attack.length > 0 ? (
                    <ul className="text-left list-disc list-inside text-xs font-bold space-y-1">
                      {attack.map((atk, idx) => (
                        <li key={idx}>
                          {atk.name} — {atk.cost} — {atk.damage}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="font-bold text-xs truncate">No attacks</p>
                  )}
                </div>
              </div>

              <div className="bg-white bg-opacity-10 rounded-lg p-2 backdrop-blur-sm col-span-2 min-h-0">
                <div className="text-center">
                  <p className="text-xs font-semibold opacity-70 mb-1">
                    Weakness
                  </p>
                  <p className="font-bold text-xs capitalize truncate">
                    {weakness}
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center pt-2 border-t border-white border-opacity-20 mt-2 shrink-0">
              <p className="text-xs opacity-50">Hover to flip back</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default Card;
